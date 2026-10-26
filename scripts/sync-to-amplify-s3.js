#!/usr/bin/env node

/**
 * BrandForge - Amplify S3 Media Sync Tool
 * 
 * Uploads all public images and videos to your AWS Amplify S3 bucket with
 * optimal MIME types and Cache-Control headers for CDN performance.
 *
 * Usage:
 *   node scripts/sync-to-amplify-s3.js
 *   node scripts/sync-to-amplify-s3.js --dry-run
 *   node scripts/sync-to-amplify-s3.js --force
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { S3Client, PutObjectCommand, HeadObjectCommand } from '@aws-sdk/client-s3';
import mime from 'mime-types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Attempt to load .env if present
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const BUCKET_NAME = process.env.S3_BUCKET_NAME || process.env.VITE_AWS_STORAGE_BUCKET_NAME;
const REGION = process.env.AWS_REGION || process.env.VITE_AWS_REGION || 'us-east-1';
const IS_DRY_RUN = process.argv.includes('--dry-run');
const IS_FORCE = process.argv.includes('--force');

const MEDIA_EXTENSIONS = new Set([
  '.mp4', '.webm', '.ogg', '.mov',
  '.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif',
  '.glb', '.gltf', '.hdr',
  '.mp3', '.wav',
]);

// Root files that MUST remain in the local root directory for crawlers & browsers
const EXCLUDED_FILES = new Set([
  'robots.txt',
  'sitemap.xml',
  'favicon.ico',
  '_headers',
  '.htaccess',
]);

async function main() {
  console.log('====================================================');
  console.log('       BrandForge Amplify Storage S3 Sync           ');
  console.log('====================================================');
  console.log(`Region:     ${REGION}`);
  console.log(`Bucket:     ${BUCKET_NAME || '[Not configured]'}`);
  console.log(`Mode:       ${IS_DRY_RUN ? 'DRY RUN (no files modified)' : 'LIVE SYNC'}`);
  console.log('----------------------------------------------------');

  if (!BUCKET_NAME && !IS_DRY_RUN) {
    console.error('\n[ERROR] S3 bucket name not found.');
    console.error('Please configure VITE_AWS_STORAGE_BUCKET_NAME or S3_BUCKET_NAME in .env');
    console.error('Run with --dry-run to preview files without uploading.\n');
    process.exit(1);
  }

  const s3 = new S3Client({
    region: REGION,
    credentials: (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) ? {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    } : undefined, // Will fallback to AWS SSO, default profile or instance IAM role
  });

  const files = [];
  function scanDir(dir, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name), prefix ? `${prefix}/${entry.name}` : entry.name);
      } else {
        const ext = path.extname(entry.name).toLowerCase();
        if (EXCLUDED_FILES.has(entry.name)) continue;
        if (MEDIA_EXTENSIONS.has(ext)) {
          const relativeKey = prefix ? `${prefix}/${entry.name}` : entry.name;
          files.push({
            fullPath: path.join(dir, entry.name),
            s3Key: relativeKey,
            size: fs.statSync(path.join(dir, entry.name)).size,
            ext,
          });
        }
      }
    }
  }

  scanDir(PUBLIC_DIR);

  console.log(`Discovered ${files.length} media files in /public.`);
  const totalBytes = files.reduce((acc, f) => acc + f.size, 0);
  console.log(`Total payload size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB\n`);

  let uploadedCount = 0;
  let skippedCount = 0;
  let failedCount = 0;

  for (const file of files) {
    const contentType = mime.lookup(file.ext) || 'application/octet-stream';
    const mbSize = (file.size / (1024 * 1024)).toFixed(2);

    if (IS_DRY_RUN) {
      console.log(`[DRY-RUN] Would sync -> s3://${BUCKET_NAME || 'target-bucket'}/${file.s3Key} (${mbSize} MB, ${contentType})`);
      uploadedCount++;
      continue;
    }

    try {
      // Check if file already exists in S3 with identical size
      if (!IS_FORCE) {
        try {
          const head = await s3.send(new HeadObjectCommand({
            Bucket: BUCKET_NAME,
            Key: file.s3Key,
          }));
          if (head.ContentLength === file.size) {
            console.log(`[SKIPPED] ${file.s3Key} (already up-to-date in S3)`);
            skippedCount++;
            continue;
          }
        } catch (headErr) {
          // Object does not exist, proceed to upload
        }
      }

      console.log(`[UPLOADING] ${file.s3Key} (${mbSize} MB)...`);
      const fileBuffer = fs.readFileSync(file.fullPath);

      await s3.send(new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: file.s3Key,
        Body: fileBuffer,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000, immutable',
      }));

      console.log(`  -> SUCCESS: s3://${BUCKET_NAME}/${file.s3Key}`);
      uploadedCount++;
    } catch (err) {
      console.error(`  -> FAILED: ${file.s3Key}:`, err.message);
      failedCount++;
    }
  }

  console.log('\n----------------------------------------------------');
  console.log(`Summary: ${uploadedCount} uploaded/processed, ${skippedCount} skipped, ${failedCount} errors.`);
  console.log('====================================================\n');
}

main().catch((err) => {
  console.error('Fatal error in sync script:', err);
  process.exit(1);
});
