"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, FileText, Linkedin, Twitter } from "lucide-react";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${theme === "light" ? "bg-white/80 border-zinc-200" : "bg-zinc-950/80 border-zinc-800"}`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-10" />
          <span
            className={`font-mono text-lg font-bold tracking-tight ${theme === "light" ? "text-zinc-800" : "text-white"}`}
          >
            Ayomide Wilfred
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                theme === "light" ? "text-zinc-600 hover:text-zinc-900" : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className={`hover:border-blue-500 ${
              theme === "light"
                ? "border-zinc-300 text-zinc-800 bg-white hover:bg-zinc-100"
                : "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`}
            asChild
            onClick={(e) => {
              e.preventDefault();
              window.open("/Resume.pdf", "_blank");
            }}
          >
            <a href="/Resume.pdf" download className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Download CV
            </a>
          </Button>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-zinc-400 hover:text-white" />
              ) : (
                <Moon className="h-5 w-5 text-zinc-600 hover:text-zinc-900" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="ml-2"
          >
            <a 
              href="https://www.linkedin.com/in/ayomide-adeyemi-95083a104/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              {mounted && (
                <Linkedin className={`h-5 w-5 ${
                  theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
                }`} />
              )}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="ml-2"
          >
            <a 
              href="https://x.com/AyomideWilfred9" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              {mounted && (
                <Twitter className={`h-5 w-5 ${
                  theme === "dark" ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"
                }`} />
              )}
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-zinc-400 hover:text-white" />
              ) : (
                <Moon className="h-5 w-5 text-zinc-600 hover:text-zinc-900" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isOpen ? (
              <X className={`h-6 w-6 ${theme === "light" ? "text-zinc-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${theme === "light" ? "text-zinc-800" : "text-white"}`} />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
        className={`md:hidden border-b ${
          theme === "light" ? "bg-white border-zinc-200" : "bg-zinc-900 border-zinc-800"
        }`}
      >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium py-2 transition-colors duration-200 ${
                    theme === "light" ? "text-zinc-600 hover:text-zinc-900" : "text-zinc-400 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                className={`w-full justify-center hover:border-blue-500 ${
                  theme === "light"
                    ? "border-zinc-300 text-zinc-800 bg-white hover:bg-zinc-100"
                    : "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }`}
                asChild
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/Resume.pdf", "_blank");
                }}
              >
                <a href="/Resume.pdf" download className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
