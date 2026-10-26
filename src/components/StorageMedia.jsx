import React, { useState } from 'react';
import { getStorageUrl } from '../utils/storageAsset';

/**
 * StorageImage - An <img> replacement that resolves URLs via Amplify Storage / CDN
 * with automatic fallback to local asset if remote fails.
 */
export function StorageImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fallbackSrc,
  onError,
  ...restProps
}) {
  const primaryUrl = getStorageUrl(src);
  const localFallbackUrl = src && src.startsWith('/') ? src : `/${src || ''}`;
  const [currentSrc, setCurrentSrc] = useState(primaryUrl);
  const [hasFailedRemote, setHasFailedRemote] = useState(false);

  const handleError = (e) => {
    // If the remote URL failed and we haven't tried the local fallback yet
    if (!hasFailedRemote && currentSrc !== localFallbackUrl) {
      setHasFailedRemote(true);
      setCurrentSrc(fallbackSrc || localFallbackUrl);
    }
    if (onError) onError(e);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={handleError}
      {...restProps}
    />
  );
}

/**
 * StorageVideo - A <video> replacement that resolves URLs via Amplify Storage / CDN
 * with automatic fallback to local asset if remote fails.
 */
export function StorageVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  onError,
  children,
  ...restProps
}) {
  const primaryVideoUrl = getStorageUrl(src);
  const localFallbackUrl = src && src.startsWith('/') ? src : `/${src || ''}`;
  const posterUrl = poster ? getStorageUrl(poster) : undefined;

  const [currentSrc, setCurrentSrc] = useState(primaryVideoUrl);
  const [hasFailedRemote, setHasFailedRemote] = useState(false);

  const handleError = (e) => {
    if (!hasFailedRemote && currentSrc !== localFallbackUrl) {
      setHasFailedRemote(true);
      setCurrentSrc(localFallbackUrl);
    }
    if (onError) onError(e);
  };

  return (
    <video
      src={currentSrc}
      poster={posterUrl}
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      onError={handleError}
      {...restProps}
    >
      {children}
    </video>
  );
}

const StorageMedia = { StorageImage, StorageVideo };
export default StorageMedia;
