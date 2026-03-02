import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { PREVIEW_SECRET } from "@/lib/cms-config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const secret = searchParams.get("secret");
  const redirect = searchParams.get("redirect") || "/";

  if (secret !== PREVIEW_SECRET) {
    return new NextResponse("Invalid secret", { status: 401 });
  }

  const draft = await draftMode();
  draft.enable();
  return NextResponse.redirect(new URL(redirect, request.url));
}
