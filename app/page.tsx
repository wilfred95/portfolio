import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import BlogPreview from "@/components/blog-preview"
import LoadingSpinner from "@/components/ui/loading-spinner"
import Education from "@/components/education"
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Education />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TechStack />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <BlogPreview />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </main>
  )
}
