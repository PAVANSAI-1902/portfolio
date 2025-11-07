import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "app", "docs", "static", "robots.txt");
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return new NextResponse(fileContents, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch {
    return new NextResponse("File not found", { status: 404 });
  }
}
