import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#080D18] text-white p-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-[#38D9F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-md w-full p-8 rounded-3xl glass-panel text-center border border-white/15 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-[#38D9F5]/15 text-[#38D9F5] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-7 h-7 animate-spin [animation-duration:15s]" />
        </div>

        <div className="text-xs editorial-mono text-[#38D9F5] uppercase tracking-wider mb-2 font-semibold">
          Error 404 • Coordinate Not Found
        </div>

        <h1 className="text-3xl font-bold font-display text-white mb-3">
          Page Does Not Exist
        </h1>

        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The requested route is outside the mapped system boundaries. You can safely return to the home terminal.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38D9F5] hover:bg-[#8CEBFA] text-[#080D18] font-semibold text-xs shadow-lg shadow-[#38D9F5]/25 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
