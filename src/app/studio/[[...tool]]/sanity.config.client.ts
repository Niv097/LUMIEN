"use client"

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../../../../sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const studioConfig = defineConfig({
  name: 'lumien-cms',
  title: 'Lumien CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})
