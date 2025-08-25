// app/api/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, service: "pattern-growth-web", ts: Date.now() });
}
