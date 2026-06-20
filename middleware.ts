import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === "www.letrsolutions.fr") {
    const url = request.nextUrl.clone();
    url.hostname = "letrsolutions.fr";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
