import Image from 'next/image'
import Link from 'next/link'
import { Terminal, Github, Mail, Camera, Clock } from 'lucide-react'
import { FaGuilded } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-4 md:p-8 max-w-3xl mx-auto">
      {/* Meta Section */}
      <section className="border border-white/20 p-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Image
            src="/icon.png?height=50&width=50"
            alt="Profile"
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <h1 className="text-lg">@weebthedev</h1>
            <p className="text-sm text-white/70">
              full-stack dev | anime nerd | horny mind, cool personality
            </p>
          </div>
          <div className="ml-auto">
            <Image
              src="/favicon.ico?height=40&width=40"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border border-white/20 p-4 mb-4">
        <h2 className="text-white/50 mb-2">─── about ───</h2>
        <p>
         high school student who likes to code, i love building frontend UI, fellow svelte user and js lover.
        </p>
      </section>

      {/* Projects Section */}
      <section className="border border-white/20 p-4 mb-4">
        <h2 className="text-white/50 mb-4">─── stuff i&apos;ve cooked ───</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="https://www.npmjs.com/package/primebit.js" 
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <Terminal size={20} />
            <span>primebit.js – console logging but way cooler.</span>
          </Link>
          <Link 
            href="https://www.guilded.gg/p/zapguilded" 
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
          >
            <FaGuilded size={20} />
            <span>zap – a cool multipurpose guiled bot.</span>
          </Link>
        </div>
      </section>

      {/* Resources Section */}
      <section className="border border-white/20 p-4 mb-4">
        <h2 className="text-white/50 mb-4">─── resources i use ───</h2>
        <div className="space-y-2">
          <Link 
            href="#" 
            className="block text-white/90 hover:text-white transition-colors"
          >
            [0] Svelte
          </Link>
          <Link 
            href="#" 
            className="block text-white/90 hover:text-white transition-colors"
          >
            [1] React
          </Link>
          <Link 
            href="#" 
            className="block text-white/90 hover:text-white transition-colors"
          >
            [2] HTML, CSS, JS
          </Link>
          <Link 
            href="#" 
            className="block text-white/90 hover:text-white transition-colors"
          >
            [3] Next.js
          </Link>
          <Link 
            href="#" 
            className="block text-white/90 hover:text-white transition-colors"
          >
            [4] shadcn
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/50 mt-8 pt-8 border-t border-white/20">
        <pre className="text-xs overflow-x-auto">
          {`
   ___________
  /           \\
 /             \\
|               |
|               |
 \\             /
  \\___________/
        `}
        </pre>
        <p className="mt-2">@weebthedev - 2024</p>
      </footer>
    </div>
  )
}