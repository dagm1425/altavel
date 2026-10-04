import { ArrowRight } from 'lucide-react'

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-4 text-center text-slate-900">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Altavel, coming soon</h1>
      <p className="max-w-xl text-lg text-slate-600">
        Vite + React + Tailwind CSS is ready. Start building in <code>src/pages/Home.jsx</code>.
      </p>
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-medium text-white hover:bg-slate-700"
      >
        Get started <ArrowRight className="size-4" />
      </a>
    </main>
  )
}

export default Home
