import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico, /images, etc.)
     */
    "/((?!api/|_next/|_static/|[\\w-]+\\.\\w+).*)",
  ],
};

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // Normalize host: strip port if present
  const currentHost = hostname.split(":")[0].toLowerCase();

  // Primary apex and agency hostnames that should NOT be treated as lead subdomains
  const mainHosts = [
    "arclanestudios.space",
    "www.arclanestudios.space",
    "arclanestudios.vercel.app",
    "localhost",
    "127.0.0.1",
  ];

  // Check if this is a custom client subdomain
  // e.g. "fitversegym.arclanestudios.space" or "fitversegym.localhost"
  const isMainHost = mainHosts.some((h) => currentHost === h);

  if (!isMainHost) {
    let subdomain = "";
    if (currentHost.endsWith(".arclanestudios.space")) {
      subdomain = currentHost.replace(".arclanestudios.space", "");
    } else if (currentHost.endsWith(".vercel.app")) {
      // In case accessed via <subdomain>---arclane.vercel.app or similar
      const parts = currentHost.split(".");
      if (parts.length > 2 && parts[0] !== "arclanestudios") {
        subdomain = parts[0];
      }
    } else if (currentHost.endsWith(".localhost")) {
      subdomain = currentHost.replace(".localhost", "");
    }

    if (subdomain && subdomain !== "www") {
      // Rewrite to public static demo: /sites/<subdomain>/index.html
      // If path is root '/', serve the client site index.html
      const subPath = url.pathname === "/" ? "/index.html" : url.pathname;
      return NextResponse.rewrite(new URL(`/sites/${subdomain}${subPath}`, req.url));
    }
  }

  return NextResponse.next();
}
