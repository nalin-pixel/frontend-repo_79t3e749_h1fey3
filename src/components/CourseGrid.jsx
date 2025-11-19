import { BookOpen, Droplets, Trees, Shovel, Recycle, Ruler } from "lucide-react";

const courses = [
  { icon: BookOpen, title: "Lawn Care Basics", level: "Beginner", desc: "Mowing patterns, fertilization schedules, seasonal care.", badge: "Free" },
  { icon: Droplets, title: "Irrigation & Watering", level: "Intermediate", desc: "Smart timers, drip vs. spray, water-saving best practices.", badge: "Popular" },
  { icon: Trees, title: "Plant Selection", level: "All Levels", desc: "Native plants, shade vs. sun, soil compatibility.", badge: "New" },
  { icon: Shovel, title: "Hardscape Fundamentals", level: "Intermediate", desc: "Pavers, edging, base prep, compaction and leveling.", badge: "Video" },
  { icon: Recycle, title: "Sustainable Landscaping", level: "Advanced", desc: "Composting, xeriscaping, eco-friendly materials.", badge: "Pro" },
  { icon: Ruler, title: "Design & Layout", level: "All Levels", desc: "Site measuring, sketches, 3D tools, client presentations.", badge: "Template" },
];

export default function CourseGrid(){
  return (
    <section id="learn" className="bg-emerald-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Learning Paths</h2>
          <p className="text-emerald-100/80 mt-2">Pick a track and follow the lessons step-by-step.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <article key={i} className="group rounded-xl border border-emerald-700/30 bg-emerald-900/40 p-5 hover:bg-emerald-900/60 transition">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <c.icon size={20} />
                </div>
                <span className="text-xs px-2 py-1 rounded bg-emerald-400 text-emerald-900 font-semibold">{c.badge}</span>
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{c.title}</h3>
              <p className="text-emerald-100/80 text-sm mt-1">{c.desc}</p>
              <div className="mt-4 text-emerald-200/70 text-xs">Level: {c.level}</div>
              <button className="mt-5 w-full bg-emerald-400 text-emerald-950 font-semibold py-2 rounded-md hover:bg-emerald-300 transition">View Lessons</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
