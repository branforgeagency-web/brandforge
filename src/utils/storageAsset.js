import { getUrl, uploadData } from 'aws-amplify/storage';
import { awsConfig, configureAmplify } from '../config/amplify.js';

/**
 * Derives the base URL for Amplify Storage / S3 / CloudFront.
 */
export function getStorageBaseUrl() {
  if (awsConfig.storageBaseUrl) {
    return awsConfig.storageBaseUrl.replace(/\/+$/, '');
  }
  if (awsConfig.cloudFrontUrl) {
    return awsConfig.cloudFrontUrl.replace(/\/+$/, '');
  }
  if (awsConfig.storageBucket) {
    const region = awsConfig.region || 'us-east-1';
    return `https://${awsConfig.storageBucket}.s3.${region}.amazonaws.com/media`;
  }
  return '';
}

/**
 * Check if remote Amplify Storage / S3 is configured.
 */
export function isStorageConfigured() {
  return Boolean(awsConfig.storageBaseUrl || awsConfig.cloudFrontUrl || awsConfig.storageBucket);
}

/**
 * Synchronous storage URL resolver.
 * 
 * Used for JSX src attributes, Three.js texture loaders, and SSG prerendering.
 * If AWS Amplify/S3/CloudFront is configured, prepends the remote base URL.
 * Otherwise, falls back smoothly to local public assets (e.g., /media.mp4).
 *
 * @param {string} path - Local path or asset filename (e.g. '/seointro.mp4')
 * @returns {string} - Full S3/CloudFront URL or local public asset path
 */
export function getStorageUrl(path) {
  if (!path || typeof path !== 'string') return '';

  // Return full external URLs as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  let cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Local-only assets stored directly in /public (not in remote S3/CloudFront)
  if (
    cleanPath === 'influencerbannervideo.mp4' ||
    cleanPath.startsWith('influencerbannervideo.') ||
    cleanPath.endsWith('-logo-transparent.png') ||
    cleanPath === 'brandforge-logo.png' ||
    cleanPath === 'fire-flame.png' ||
    cleanPath.startsWith('client-') ||
    cleanPath.startsWith('favicon') ||
    cleanPath.startsWith('android-chrome') ||
    cleanPath === 'apple-touch-icon.png' ||
    cleanPath === 'rocket.png' ||
    cleanPath.startsWith('farmer_fresh_') ||
    cleanPath.startsWith('jugg_jugg_')
  ) {
    return `/${cleanPath}`;
  }
  const baseUrl = getStorageBaseUrl();

  if (baseUrl) {
    if (baseUrl.endsWith('/media') && cleanPath.startsWith('media/')) {
      cleanPath = cleanPath.slice(6);
    }
    return `${baseUrl}/${cleanPath}`;
  }

  // Fallback to local /public directory asset
  return `/${cleanPath}`;
}

/**
 * Asynchronous Amplify Storage URL resolver using aws-amplify/storage SDK.
 * 
 * Supports signed URLs and custom S3 options (expiresIn, validation, etc.).
 * Gracefully falls back to getStorageUrl(path) if Amplify client isn't configured or errors.
 *
 * @param {string} path - Storage path/key (e.g. 'seointro.mp4')
 * @param {object} [options] - Optional SDK getUrl options
 * @returns {Promise<string>}
 */
export async function fetchAmplifyStorageUrl(path, options = {}) {
  if (!path || typeof path !== 'string') return '';

  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  if (awsConfig.storageBucket) {
    try {
      configureAmplify();
      const result = await getUrl({
        path: cleanPath,
        options: {
          validateObjectExistence: options.validateObjectExistence ?? false,
          expiresIn: options.expiresIn ?? 3600,
          useAccelerateEndpoint: options.useAccelerateEndpoint ?? false,
        },
      });
      return result.url.toString();
    } catch (err) {
      console.warn(`[Amplify Storage] SDK getUrl error for "${cleanPath}", falling back:`, err?.message || err);
    }
  }

  return getStorageUrl(path);
}

/**
 * Upload a file directly to Amplify S3 storage.
 *
 * @param {string} path - Target path in S3 (e.g. 'uploads/image.png')
 * @param {File|Blob|string} data - Content to upload
 * @param {object} [options] - Extra upload options (contentType, metadata)
 * @returns {Promise<{ key: string, path: string }>}
 */
export async function uploadToStorage(path, data, options = {}) {
  configureAmplify();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  const uploadTask = uploadData({
    path: cleanPath,
    data,
    options: {
      contentType: options.contentType,
      metadata: options.metadata,
      onProgress: options.onProgress,
    },
  });

  const result = await uploadTask.result;
  return result;
}
