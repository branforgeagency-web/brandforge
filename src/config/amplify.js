import { Amplify } from 'aws-amplify';

export const awsConfig = {
  region: process.env.NEXT_PUBLIC_AWS_REGION || process.env.VITE_AWS_REGION || 'ap-south-1',
  storageBucket: process.env.NEXT_PUBLIC_AWS_STORAGE_BUCKET_NAME || process.env.VITE_AWS_STORAGE_BUCKET_NAME || 'amplify-d1ctxijh9tb71g-ma-brandforgemediabucket804-fpkhwfc6etmi',
  cloudFrontUrl: process.env.NEXT_PUBLIC_AWS_CLOUDFRONT_URL || process.env.VITE_AWS_CLOUDFRONT_URL || '',
  storageBaseUrl: process.env.NEXT_PUBLIC_STORAGE_BASE_URL || process.env.VITE_STORAGE_BASE_URL || 'https://amplify-d1ctxijh9tb71g-ma-brandforgemediabucket804-fpkhwfc6etmi.s3.ap-south-1.amazonaws.com/media',
  identityPoolId: process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID || process.env.VITE_AWS_IDENTITY_POOL_ID || '',
  userPoolId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID || process.env.VITE_AWS_USER_POOLS_ID || '',
  userPoolClientId: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID || process.env.VITE_AWS_USER_POOLS_WEB_CLIENT_ID || '',
};

let isAmplifyConfigured = false;

export function configureAmplify() {
  if (isAmplifyConfigured) return;

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
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[Amplify Storage] Client config note:', err?.message || err);
      }
    }
  }
}

configureAmplify();

export default configureAmplify;
