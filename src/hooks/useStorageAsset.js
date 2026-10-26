import { useState, useEffect } from 'react';
import { getStorageUrl, fetchAmplifyStorageUrl, isStorageConfigured } from '../utils/storageAsset';

/**
 * Custom React hook to resolve an Amplify Storage asset URL.
 *
 * @param {string} path - Local asset path or S3 key (e.g. '/seointro.mp4')
 * @param {object} [options]
 * @param {boolean} [options.useSdk=false] - Whether to fetch signed URL asynchronously via Amplify Storage SDK getUrl()
 * @param {number} [options.expiresIn=3600] - Expiry in seconds if useSdk is true
 * @returns {{ url: string, loading: boolean, error: Error | null }}
 */
export function useStorageAsset(path, options = {}) {
  const { useSdk = false, expiresIn = 3600 } = options;
  const initialUrl = getStorageUrl(path);

  const [url, setUrl] = useState(initialUrl);
  const [loading, setLoading] = useState(Boolean(useSdk && isStorageConfigured()));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!path) {
      setUrl('');
      setLoading(false);
      return;
    }

    if (!useSdk) {
      setUrl(getStorageUrl(path));
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchAmplifyStorageUrl(path, { expiresIn })
      .then((resolvedUrl) => {
        if (isMounted) {
          setUrl(resolvedUrl);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setUrl(getStorageUrl(path));
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [path, useSdk, expiresIn]);

  return { url, loading, error };
}

export default useStorageAsset;
