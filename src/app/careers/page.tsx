import { Metadata } from 'next'
import { getCareersPage } from '@sanity/lib/client'
import CareersClient from './CareersClient'

export const metadata: Metadata = {
  title: 'Careers at Lumien India | Join Lumien Innovation',
  description: 'Join Lumien India and help build the future of compliance-driven banking technology. Explore open roles at Lumien Innovation today.',
  keywords: [
    'Lumien Career',
    'Lumien Careers',
    'Lumien India Career',
    'Lumien India Careers',
    'Lumien Innovation Jobs',
    'Banking Technology Jobs India'
  ],
  openGraph: {
    title: 'Careers at Lumien India',
    description: 'Join Lumien India and help build the future of compliance-driven banking technology.',
    url: 'https://lumien-india.com/careers',
  }
}

export default async function CareersPage() {
  const data = await getCareersPage()
  return <CareersClient data={data} />
}
