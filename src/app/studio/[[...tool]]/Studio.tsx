"use client"

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../../../../sanity/schemas'

const config = defineConfig({
  name: 'lumien-cms',
  title: 'Lumien CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})

export default function Studio() {
  return (
    <div style={{ height: '100vh' }}>
      <NextStudio config={config} />
    </div>
  )
}
