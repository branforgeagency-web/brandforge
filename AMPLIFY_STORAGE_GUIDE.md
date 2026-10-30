# AWS Amplify Storage Integration Guide

BrandForge is configured with a high-performance **Hybrid Amplify Storage & CDN architecture** designed for sub-second page loads, SSG static generation, and offloading heavy images and video files.

---

## 🚀 Key Capabilities

1. **Hybrid S3 / CloudFront URL Resolution**:
   - Media assets (`.mp4`, `.png`, `.jpg`, `.webp`, `.svg`, etc.) automatically map to your AWS Amplify S3 bucket or CloudFront CDN domain.
   - Zero render waterfall: Fast synchronous resolution (`getStorageUrl`) works inside React render cycles, Three.js texture loaders, and Node.js SSG builds (`generate-ssg.js`).
2. **Local Fallback Resilience**:
   - In local development or if AWS environment variables are not yet provided, media automatically falls back to local `/public/` assets.
   - If an S3 or CloudFront asset encounters a 404 or network failure in production, `<StorageImage>` and `<StorageVideo>` automatically fall back to the bundled asset seamlessly.
3. **Automated S3 Bulk Sync Tool**:
   - `npm run sync:storage` scans `/public/` and uploads all 120+ media files (84MB+) to S3 with optimal MIME types and `Cache-Control: public, max-age=31536000, immutable`.
4. **AWS Amplify Storage SDK Ready**:
   - Includes `@aws-amplify/storage` v6 with `getUrl`, `uploadData`, and custom React hook `useStorageAsset`.

---

## 🛠️ Configuration (.env)

Create or edit your `.env` file in the project root (see [`.env.example`](file:///.env.example)):

```bash
# AWS Region where your Amplify Storage S3 bucket is hosted
NEXT_PUBLIC_AWS_REGION=us-east-1

# S3 Bucket Name provisioned by AWS Amplify Storage
NEXT_PUBLIC_AWS_STORAGE_BUCKET_NAME=your-amplify-storage-bucket-name

# (Recommended for production) CloudFront distribution or custom CDN domain
# e.g., https://d123456abcdef8.cloudfront.net or https://media.brandforgeagency.in
NEXT_PUBLIC_AWS_CLOUDFRONT_URL=https://media.brandforgeagency.in

# Optional override base URL
NEXT_PUBLIC_STORAGE_BASE_URL=

# AWS Cognito Identity Pool ID (if using Amplify Storage SDK for guest S3 access)
NEXT_PUBLIC_AWS_IDENTITY_POOL_ID=us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# S3 Sync Script Credentials (CLI upload only)
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-amplify-storage-bucket-name
```

---

## 📦 Syncing Local Media to Amplify S3

To upload all public assets to your Amplify S3 bucket:

```bash
# Preview files and size without uploading (Dry run)
npm run sync:storage -- --dry-run

# Upload new and updated assets to S3
npm run sync:storage

# Force re-upload all assets
npm run sync:storage -- --force
```

System files like `robots.txt`, `sitemap.xml`, and `favicon.ico` are automatically excluded to preserve crawler indexing.

---

## 💻 Code Usage Examples

### 1. Synchronous URL Resolver (Recommended for fast JSX & Three.js)

```javascript
import { getStorageUrl } from '../utils/storageAsset';

// Resolves to: https://media.brandforgeagency.in/seobannerrightvideo.mp4
// Or falls back to: /seobannerrightvideo.mp4
const videoUrl = getStorageUrl('/seobannerrightvideo.mp4');

// Using with Three.js textures:
const texture = new THREE.TextureLoader().load(getStorageUrl('/fire-flame.png'));
```

### 2. High-Level React Media Components (with Error Fallback)

```jsx
import { StorageImage, StorageVideo } from '../components/StorageMedia';

// Image with automated remote -> local fallback
<StorageImage
  src="/banner-about-hero.jpg"
  alt="About BrandForge"
  className="bf-about-hero-img"
/>

// Video with automated remote -> local fallback
<StorageVideo
  src="/paidmediabannervideo.mp4"
  poster="/banner-paid-media.jpg"
  autoPlay
  muted
  loop
  playsInline
  className="bf-video-player"
/>
```

### 3. Dynamic Amplify Storage Hook (Signed URLs / SDK)

```jsx
import { useStorageAsset } from '../hooks/useStorageAsset';

export function MyProtectedAsset() {
  const { url, loading, error } = useStorageAsset('private-report.pdf', {
    useSdk: true,
    expiresIn: 3600, // 1 hour signed URL
  });

  if (loading) return <div>Loading asset...</div>;
  if (error) return <div>Failed to load asset</div>;

  return <a href={url} target="_blank" rel="noreferrer">Open Report</a>;
}
```

### 4. Client-Side Uploads

```javascript
import { uploadToStorage } from '../utils/storageAsset';

async function handleFileUpload(file) {
  const result = await uploadToStorage(`uploads/${file.name}`, file, {
    contentType: file.type,
    onProgress: ({ transferredBytes, totalBytes }) => {
      console.log(`Uploaded ${(transferredBytes / totalBytes) * 100}%`);
    },
  });
  console.log('Uploaded successfully:', result.path);
}
```

---

## 📁 Files Implemented

| File | Purpose |
| --- | --- |
| [`src/config/amplify.js`](file:///src/config/amplify.js) | Initializes AWS Amplify v6 with Cognito and S3 storage config. Works seamlessly in both Vite client and Node.js SSG build. |
| [`src/utils/storageAsset.js`](file:///src/utils/storageAsset.js) | Core utilities: `getStorageUrl`, `fetchAmplifyStorageUrl`, `uploadToStorage`, `isStorageConfigured`. |
| [`src/hooks/useStorageAsset.js`](file:///src/hooks/useStorageAsset.js) | React hook for reactive asset loading with optional Amplify Storage signed URL resolution. |
| [`src/components/StorageMedia.jsx`](file:///src/components/StorageMedia.jsx) | `<StorageImage>` & `<StorageVideo>` drop-in components with auto-fallback. |
| [`scripts/sync-to-amplify-s3.js`](file:///scripts/sync-to-amplify-s3.js) | CLI script to sync all 123 media files (84MB+) to S3 with cache headers and dry-run mode. |
| [`.env.example`](file:///.env.example) | Complete template for S3 bucket name, region, CloudFront URL, and AWS credentials. |
