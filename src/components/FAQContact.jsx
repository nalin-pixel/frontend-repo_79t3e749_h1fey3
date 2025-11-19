import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";

const faqs = [
  { q: "How long do courses take?", a: "Each course is 1–2 hours with short videos and reading. Full paths are 6–10 hours." },
  { q: "Is there a certificate?", a: "Yes, you can earn a digital certificate by completing quizzes at the end of each path." },
  { q: "Do I need experience?", a: "No, we cover fundamentals first and offer advanced modules for pros." },
];

export default function FAQContact(){
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-emerald-950">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-white">FAQ</h2>
          <div className="mt-6 divide-y divide-emerald-800/50 border border-emerald-700/30 rounded-xl">
            {faqs.map((f, i) => (
              <button key={i} onClick={()=> setOpen(open===i? -1 : i)} className="w-full text-left p-4 hover:bg-emerald-900/40 transition">
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">{f.q}</p>
                  <ChevronDown className={`text-emerald-200 transition ${open===i? 'rotate-180': ''}`} />
                </div>
                {open===i && <p className="mt-2 text-emerald-100/80 text-sm">{f.a}</p>}
              </button>
            ))}
          </div>
        </div>
        <div id="contact">
          <h2 className="text-3xl font-bold text-white">Contact Us</h2>
          <p className="text-emerald-100/80 mt-2">Ask about group training or custom lessons for your team.</p>
          <form onSubmit={(e)=> e.preventDefault()} className="mt-6 space-y-3">
            <input className="w-full bg-emerald-900/40 border border-emerald-700/40 rounded-md px-3 py-2 text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
            <input className="w-full bg-emerald-900/40 border border-emerald-700/40 rounded-md px-3 py-2 text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Email" type="email" />
            <textarea className="w-full min-h-[120px] bg-emerald-900/40 border border-emerald-700/40 rounded-md px-3 py-2 text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Message" />
            <button className="inline-flex items-center gap-2 bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 rounded-md hover:bg-emerald-300 transition"><Send size={16}/> Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
