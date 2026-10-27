import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";

interface ReportPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ReportPageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Client Report #${id} | Arclane Strategic Audit`,
    description: `Comprehensive 14-Point Digital Footprint & UI/UX Audit Report for Lead #${id}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ClientReportPage({ params }: ReportPageProps) {
  const { id } = await params;
  const clientId = (id || "").replace(/[^0-9]/g, "");

  if (!clientId) {
    notFound();
  }

  // Candidates across monorepo & Vercel deployment structures
  const candidates = [
    path.join(process.cwd(), "public", "reports", clientId, "audit.md"),
    path.join(process.cwd(), "web-dev-agency", "public", "reports", clientId, "audit.md"),
    path.join(process.cwd(), "..", "reports", clientId, "audit.md"),
    path.join(__dirname, "../../../../../public", "reports", clientId, "audit.md"),
    path.join(__dirname, "../../../../../../reports", clientId, "audit.md"),
  ];

  let filePath = candidates.find((p) => {
    try {
      return fs.existsSync(p);
    } catch {
      return false;
    }
  });

  if (!filePath) {
    notFound();
  }

  const rawMarkdown = fs.readFileSync(filePath, "utf-8");
  const processed = await remark().use(html).process(rawMarkdown);
  const contentHtml = processed.toString();

  // Try reading outreach.json for metadata if present
  let outreachMeta: any = null;
  const jsonPath = filePath.replace("audit.md", "outreach.json");
  if (fs.existsSync(jsonPath)) {
    try {
      outreachMeta = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    } catch {}
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Navigation & Branding */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
              ⚡
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-white">
                ArcLane Studios — Strategic Client Audit
              </h1>
              <p className="text-xs text-slate-400">
                Lead #{clientId} {outreachMeta?.businessName ? `• ${outreachMeta.businessName}` : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {outreachMeta?.deployedUrl && (
              <a
                href={outreachMeta.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition shadow-md shadow-cyan-500/20"
              >
                🌐 View Live Prototype
              </a>
            )}
          </div>
        </div>

        {/* Outreach Script & Calling Blueprint Card if available */}
        {outreachMeta && (outreachMeta.whatsappMessage || outreachMeta.callScript) && (
          <div className="p-6 bg-slate-900/90 border border-cyan-500/30 rounded-2xl space-y-4 shadow-xl">
            <h2 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              📱 Verified Outreach & Conversion Scripts
            </h2>
            {outreachMeta.whatsappMessage && (
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-300">Tailored WhatsApp Pitch:</span>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {outreachMeta.whatsappMessage}
                </div>
              </div>
            )}
            {outreachMeta.callScript && (
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-semibold text-slate-300">60-Second Deal Closing Call Script:</span>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 whitespace-pre-wrap leading-relaxed">
                  {outreachMeta.callScript}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 14-Point Comprehensive Audit Document */}
        <div className="p-8 sm:p-12 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-2xl prose prose-invert max-w-none prose-headings:text-white prose-a:text-cyan-400 prose-code:text-cyan-300 prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </div>
  );
}
