import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { storage } from './storage/resource';

/**
 * BrandForge Amplify Gen 2 Backend Definition
 * Combines Cognito Authentication and S3 Storage
 */
defineBackend({
  auth,
  storage,
});
