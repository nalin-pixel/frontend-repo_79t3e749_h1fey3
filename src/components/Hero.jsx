import { motion } from 'framer-motion'
import { Sprout, GraduationCap } from 'lucide-react'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,#34d399,transparent_25%),radial-gradient(circle_at_80%_20%,#a3e635,transparent_25%),radial-gradient(circle_at_40%_80%,#22d3ee,transparent_25%)]" />
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Learn Landscaping the Modern Way
            </h1>
            <p className="mt-4 text-emerald-100/90 text-lg">
              Bite-sized lessons, hands-on guides, and certification paths for lawn care, garden design, irrigation, and sustainable maintenance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#learn" className="inline-flex items-center gap-2 bg-emerald-400 text-emerald-900 font-semibold px-5 py-2.5 rounded-md hover:bg-emerald-300 transition">
                <GraduationCap size={18}/> Start Learning
              </a>
              <a href="#resources" className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-md hover:bg-white/20 transition">
                <Sprout size={18}/> Explore Resources
              </a>
            </div>
            <div className="mt-6 text-emerald-100/80 text-sm">
              Trusted by local pros • Updated monthly • Free starter curriculum
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{delay:0.1,duration:0.6}} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-emerald-900/40 border border-emerald-600/30 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-30 bg-[linear-gradient(120deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_60%)]" />
              <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop" alt="Landscaping" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
