import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface SitePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: SitePageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ").toUpperCase()} | Preview`,
    icons: {
      icon: [
        { url: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2224%22 fill=%22%230F172A%22/><text y=%2268%22 x=%2250%22 text-anchor=%22middle%22 font-size=%2260%22>✨</text></svg>`, type: "image/svg+xml" }
      ],
      shortcut: [`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2224%22 fill=%22%230F172A%22/><text y=%2268%22 x=%2250%22 text-anchor=%22middle%22 font-size=%2260%22>✨</text></svg>`]
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DynamicSitePage({ params }: SitePageProps) {
  const { slug } = await params;

  // Resolve file path across both local root development and Vercel monorepo deployments
  const candidates = [
    path.join(process.cwd(), "public", "sites", slug, "index.html"),
    path.join(process.cwd(), "web-dev-agency", "public", "sites", slug, "index.html"),
    path.join(__dirname, "../../../../../public", "sites", slug, "index.html"),
  ];

  let filePath = candidates.find((p) => fs.existsSync(p));

  if (!filePath) {
    notFound();
  }

  const html = fs.readFileSync(filePath, "utf-8");

  return (
    <div
      className="w-full min-h-screen"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
