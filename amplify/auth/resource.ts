import { defineAuth } from '@aws-amplify/backend';

/**
 * Authentication configuration for BrandForge
 * Provides unauthenticated (guest) access for public media viewing
 * and authenticated access for admin uploads.
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
