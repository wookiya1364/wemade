import { HOST } from "@shared/util";
import { NextRequest, NextResponse } from "next/server";

const dynamic = process.env.NODE_ENV === "production" ? "force-static" : "force-static";

export async function GET(request: NextRequest) {
    const data = await fetch(`${HOST}/coin/data.json`);
    console.log(data);
    return NextResponse.json({ data, msg: "success" });
}

export { dynamic };