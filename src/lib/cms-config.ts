/**
 * CMS Client Configuration - Safe for Server and Client use
 * No Sanity Studio imports here to avoid server route issues
 */

import { createClient } from '@sanity/client';
import { groq } from 'next-sanity';

// ============================================================================
// SANITY PROJECT CONFIGURATION
// ============================================================================

export const SANITY_PROJECT_ID = 'hq711z90';
export const SANITY_DATASET = 'production';
export const SANITY_API_VERSION = '2024-01-01';
export const PREVIEW_SECRET = 'lumien-cms-preview-secret-2024';

// ============================================================================
// SANITY CLIENTS
// ============================================================================

// Public client for published content (uses CDN for caching)
export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
  perspective: 'published',
});

// Preview client for draft content (no CDN, drafts perspective)
export const sanityPreviewClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: false,
  perspective: 'previewDrafts',
});

// Helper function to get the appropriate client
export function getSanityClient({ preview }: { preview: boolean }) {
  return preview ? sanityPreviewClient : sanityClient;
}

// ============================================================================
// GROQ QUERIES
// ============================================================================

export const homepageQuery = groq`*[_type == "homepage"][0]{
  heroBadgeText,
  heroSegments[]{
    text,
    className,
    br
  },
  heroParagraph,
  platformTitle,
  platformParagraph
}`;
