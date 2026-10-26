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
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DynamicSitePage({ params }: SitePageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "public", "sites", slug, "index.html");

  if (!fs.existsSync(filePath)) {
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
