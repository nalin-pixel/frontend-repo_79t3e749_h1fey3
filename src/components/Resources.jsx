import { FileText, Download, Image as ImageIcon, Link as LinkIcon } from "lucide-react";

const resources = [
  { icon: FileText, title: "Seasonal Maintenance Checklist", type: "PDF", action: "View" },
  { icon: Download, title: "Soil Test Guide", type: "Download", action: "Get" },
  { icon: ImageIcon, title: "Planting Diagram Templates", type: "PNG", action: "Open" },
  { icon: LinkIcon, title: "Recommended Tools", type: "Links", action: "Browse" },
];

export default function Resources(){
  return (
    <section id="resources" className="bg-gradient-to-b from-emerald-950 to-emerald-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Resources</h2>
          <p className="text-emerald-100/80 mt-2">Guides, templates, and downloads to support your work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r, i) => (
            <div key={i} className="rounded-xl border border-emerald-700/30 bg-emerald-900/40 p-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                <r.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{r.title}</h3>
              <p className="text-emerald-100/70 text-sm">{r.type}</p>
              <button className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-md transition">{r.action}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
