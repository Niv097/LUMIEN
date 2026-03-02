"use client";

import { Studio } from "sanity";
import studioConfig from "@/lib/studio-config";

export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Studio config={studioConfig} />
    </div>
  );
}
