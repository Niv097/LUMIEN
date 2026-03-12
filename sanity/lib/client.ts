import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Only create client if we have a valid projectId
export const client = projectId && projectId !== 'your_project_id_here' 
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-03-11',
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null

export async function getHomePage() {
  if (!client) return null
  return client.fetch(`*[_type == "homePage"][0]`)
}

export async function getSolutionsPage() {
  if (!client) return null
  return client.fetch(`*[_type == "solutionsPage"][0]`)
}

export async function getPlatformPage() {
  if (!client) return null
  return client.fetch(`*[_type == "platformPage"][0]`)
}

export async function getDevelopersPage() {
  if (!client) return null
  return client.fetch(`*[_type == "developersPage"][0]`)
}

export async function getCompanyPage() {
  if (!client) return null
  return client.fetch(`*[_type == "companyPage"][0]`)
}

export async function getCareersPage() {
  if (!client) return null
  return client.fetch(`*[_type == "careersPage"][0]`)
}

export async function getNavbar() {
  if (!client) return null
  return client.fetch(`*[_type == "navbar"][0]`)
}

export async function getFooter() {
  if (!client) return null
  return client.fetch(`*[_type == "footer"][0]`)
}
