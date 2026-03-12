import { getSolutionsPage } from '@sanity/lib/client'
import SolutionsClient from './SolutionsClient'

export default async function SolutionsPage() {
  const data = await getSolutionsPage()
  return <SolutionsClient data={data} />
}
