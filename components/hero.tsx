"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { useTheme } from "next-themes"



export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      containerRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 2
      }deg) rotateX(${y * -2}deg)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
    className={`relative h-screen flex items-center justify-center overflow-hidden geometric-bg ${theme === "light" ? "bg-white" : ""}`}
  >
      <div className="absolute inset-0 grid-pattern"></div>

      <div
        ref={containerRef}
        className="container mx-auto px-4 flex flex-col items-center text-center z-10 transition-transform duration-200 ease-out"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo className="h-40 w-40 mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
            theme === "light" ? "from-zinc-800 via-blue-500 to-red-600" : "from-white via-blue-500 to-red-600"
          }`}
        >
          Backend Developer
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-zinc-400 mb-8 font-mono"
        >
          <span className="text-blue-500">AI Builder</span> |{" "}
          <span className="text-red-500">Sustainability Enthusiast</span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
             className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore My Work
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className={`hover:border-blue-500 ${
              theme === "light"
                ? "border-zinc-300 text-zinc-800 bg-white hover:text-blue-600"
                : "border-zinc-600 text-white hover:text-white"
            }`}
            asChild
            onClick={(e) => {
              e.preventDefault();
              window.open("/Resume.pdf", "_blank");
            }}
          >
            <a href="/Resume.pdf" download>
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-zinc-500" />
      </div>
    </section>
  );
}
