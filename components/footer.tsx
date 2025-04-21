import { Heart } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-8 w-8 mr-2" />
            <span className="text-zinc-400 text-sm">
              © {currentYear} | Built with <Heart className="h-3 w-3 inline text-red-500 mx-1" /> and clean code
            </span>
          </div>

          <div className="text-zinc-500 text-sm">
            <span className="font-mono">Backend Developer | AI Builder | Sustainability Enthusiast</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
