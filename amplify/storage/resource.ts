import { defineStorage } from '@aws-amplify/backend';

/**
 * Storage configuration for BrandForge
 * Grants public read access for all website visitors (guest access)
 * for images, videos, 3D assets, and marketing media.
 */
export const storage = defineStorage({
  name: 'brandforgeMedia',
  access: (allow) => ({
    'media/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});
