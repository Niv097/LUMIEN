import { getCareersPage } from '@sanity/lib/client'
import CareersClient from './CareersClient'

export default async function CareersPage() {
  const data = await getCareersPage()
  return <CareersClient data={data} />
}
