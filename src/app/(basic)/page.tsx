import { cn } from "@/lib/utils";
import { geistMono } from "@/styles/fonts";

export default function Home() {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center gap-6 px-4">
      <h1 className={cn(
        "text-[clamp(5rem,1.5vw,3rem)] font-bold text-center",
        "bg-gradient-to-r from-[#0066cc] via-[#1e90ff] to-[#000080] bg-clip-text text-transparent",
        "[background-size:200%_auto] animate-[shine_5s_linear_infinite]",
        geistMono.className
      )}>Anantara</h1>
      <p className="max-w-4xl text-center font-mono font-light leading-relaxed text-sm">
        Welcome to my little corner of the internet! Here, I share my journey as a frontend engineer - the ups, downs, and everything in between. You'll find tutorials, reading materials, and stories about my adventures in code. Join me as I navigate through the exciting (and sometimes silly) world of frontend development.
      </p>
    </div>
  );
}
