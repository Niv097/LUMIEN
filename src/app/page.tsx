import { draftMode } from "next/headers";

import HomeClient, { type HomeContent } from "./home/HomeClient";
import { getSanityClient } from "@/sanity/client";
import { homepageQuery } from "@/sanity/queries";

export default async function Home() {
  const isDraftMode = (await draftMode()).isEnabled;

  try {
    const client = getSanityClient({ preview: isDraftMode });
    const content = await client.fetch<HomeContent | null>(homepageQuery);
    return <HomeClient content={content} />;
  } catch {
    return <HomeClient content={null} />;
  }
}
