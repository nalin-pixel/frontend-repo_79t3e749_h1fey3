import { Leaf, BookOpen, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-emerald-900/70 backdrop-blur supports-[backdrop-filter]:bg-emerald-900/60 border-b border-emerald-700/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center shadow">
            <Leaf className="text-emerald-900" size={20} />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">GreenScape Learning</p>
            <p className="text-emerald-200/70 text-xs -mt-0.5">Grow your landscaping skills</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-emerald-100">
          <a href="#learn" className="hover:text-white transition">Learn</a>
          <a href="#resources" className="hover:text-white transition">Resources</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-emerald-500 text-emerald-950 px-3 py-1.5 rounded-md hover:bg-emerald-400 transition"><Phone size={16}/> Contact</a>
        </nav>
        <button className="md:hidden text-emerald-100" onClick={() => setOpen(v=>!v)} aria-label="Open Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-emerald-700/30 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3 text-emerald-100">
            <a href="#learn" onClick={() => setOpen(false)}>Learn</a>
            <a href="#resources" onClick={() => setOpen(false)}>Resources</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 bg-emerald-500 text-emerald-950 px-3 py-1.5 rounded-md w-max"><BookOpen size={16}/> Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
