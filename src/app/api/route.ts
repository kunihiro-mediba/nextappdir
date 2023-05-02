import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // eslint-disable-next-line no-console
    console.log(req);
    return NextResponse.json({ now: new Date().toISOString() });
}
