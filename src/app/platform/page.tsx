import { getPlatformPage } from '@sanity/lib/client'
import PlatformClient from './PlatformClient'

export default async function PlatformPage() {
  const data = await getPlatformPage()
  return <PlatformClient data={data} />
}
