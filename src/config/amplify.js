import { Amplify } from 'aws-amplify';

/**
 * Universal environment variable accessor (Vite client + Node.js SSG)
 */
const env = (typeof import.meta !== 'undefined' && import.meta.env)
  ? import.meta.env
  : (typeof process !== 'undefined' && process.env ? process.env : {});

export const awsConfig = {
  region: env.VITE_AWS_REGION || env.AWS_REGION || 'us-east-1',
  storageBucket: env.VITE_AWS_STORAGE_BUCKET_NAME || env.S3_BUCKET_NAME || '',
  cloudFrontUrl: env.VITE_AWS_CLOUDFRONT_URL || '',
  storageBaseUrl: env.VITE_STORAGE_BASE_URL || '',
  identityPoolId: env.VITE_AWS_IDENTITY_POOL_ID || '',
  userPoolId: env.VITE_AWS_USER_POOLS_ID || '',
  userPoolClientId: env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID || '',
};

let isAmplifyConfigured = false;

export function configureAmplify() {
  if (isAmplifyConfigured) return;

  // Only configure Amplify if credentials / bucket are available
  if (awsConfig.storageBucket) {
    try {
      Amplify.configure({
        Storage: {
          S3: {
            bucket: awsConfig.storageBucket,
            region: awsConfig.region,
          },
        },
        Auth: {
          Cognito: {
            identityPoolId: awsConfig.identityPoolId || undefined,
            userPoolId: awsConfig.userPoolId || undefined,
            userPoolClientId: awsConfig.userPoolClientId || undefined,
          },
        },
      });
      isAmplifyConfigured = true;
    } catch (err) {
      // In dev or SSG without AWS keys, silent warning
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[Amplify Storage] Client config note:', err?.message || err);
      }
    }
  }
}

// Auto-run if configuration is available
configureAmplify();

export default configureAmplify;
