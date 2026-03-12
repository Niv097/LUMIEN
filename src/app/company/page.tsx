import { getCompanyPage } from '@sanity/lib/client'
import CompanyClient from './CompanyClient'

export default async function CompanyPage() {
  const data = await getCompanyPage()
  return <CompanyClient data={data} />
}
