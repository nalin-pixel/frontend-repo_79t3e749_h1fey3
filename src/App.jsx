import Header from './components/Header'
import Hero from './components/Hero'
import CourseGrid from './components/CourseGrid'
import Resources from './components/Resources'
import FAQContact from './components/FAQContact'

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 text-white">
      <Header />
      <Hero />
      <CourseGrid />
      <Resources />
      <FAQContact />
      <footer className="border-t border-emerald-800/40 bg-emerald-950">
        <div className="max-w-6xl mx-auto px-4 py-8 text-emerald-200/70 text-sm flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} GreenScape Learning. All rights reserved.</p>
          <p>Built to help landscape teams grow faster.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
