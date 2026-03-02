import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'hq711z90',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export const sanityPreviewClient = createClient({
  projectId: 'hq711z90',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  perspective: 'previewDrafts',
});
