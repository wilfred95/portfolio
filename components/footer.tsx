"use client"

import { Heart, Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/logo";
import { useTheme } from "next-themes"

export default function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear();
  

  return (
    <footer
    className={`border-t py-8 ${theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-950 border-zinc-900"}`}
  >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Logo className="h-8 w-8 mr-2" />
            <span className="text-zinc-400 text-sm">
              © {currentYear} | Built with{" "}
              <Heart className="h-3 w-3 inline text-red-500 mx-1" /> by Ayomide
              Wilfred
            </span>
          </div>

          <div className="text-zinc-500 text-sm flex items-center space-x-6">
            <span className="font-mono">
              Backend Developer | AI Builder | Sustainability Enthusiast
            </span>
            <a
              href="https://www.linkedin.com/in/ayomide-adeyemi-95083a104/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-75 transition-opacity ${
                theme === "light" ? "text-zinc-600" : "text-zinc-400"
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/AyomideWilfred9"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-75 transition-opacity ${
                theme === "light" ? "text-zinc-600" : "text-zinc-400"
              }`}
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
