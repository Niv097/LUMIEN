import { getDevelopersPage } from '@sanity/lib/client'
import DevelopersClient from './DevelopersClient'

export default async function DevelopersPage() {
  const data = await getDevelopersPage()
  return <DevelopersClient data={data} />
}
