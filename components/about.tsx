"use client";

import { motion } from "framer-motion";
import { Code2, Server, Leaf, Music, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const { theme } = useTheme()

  return (
    <section id="about" className={`py-20 ${theme === "light" ? "bg-zinc-100" : "bg-zinc-900"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeIn}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={2}
            className="flex flex-col justify-center"
          >
            <p className={`text-lg mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
              I am a back-end software engineer with additional expertise in
              DevOps. With over 4 years of experience, I have worked with{" "}
              <span className="text-blue-400 font-semibold">startups</span> on
              diverse projects, ranging from web RESTful APIs to asynchronous
              microservices and modern cloud-native deployments.
            </p>
            <p className={`text-lg mb-6 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
              I'm proficient in Node.js development using various frameworks, I
              have also led and mentored multiple development teams, helping
              them deliver successful projects while enhancing their software
              engineering practices. I'm particularly interested in AI
              integration and sustainable technology solutions that make a
              positive impact.
            </p>
            <div className="flex justify-start">
              <Button
                variant="outline"
                size="lg"
                className={`hover:border-blue-500 hover:bg-zinc-800 hover:text-white ${
                  theme === "light"
                    ? "border-zinc-300 text-zinc-800 bg-white"
                    : "border-zinc-700 text-zinc-300 bg-zinc-800"
                }`}
                asChild
              >
                <a
                  href="/Resume.pdf"
                  download
                  className="flex items-center"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Download My CV
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={3}
            className="grid grid-cols-2 gap-4"
          >
            <Card
              className={`border-zinc-700 hover:border-blue-500 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-zinc-800"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code2 className="h-10 w-10 text-blue-500 mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-zinc-800" : "text-white"}`}>
                  Clean Code
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                  Building maintainable, well-structured systems
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-zinc-700 hover:border-red-500 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-zinc-800"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Server className="h-10 w-10 text-red-500 mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-zinc-800" : "text-white"}`}>
                  CI/CD Expert
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                  Automating deployment pipelines for efficiency
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-zinc-700 hover:border-green-500 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-zinc-800"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Leaf className="h-10 w-10 text-green-500 mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-zinc-800" : "text-white"}`}>
                  Sustainability
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                  Passionate about clean energy solutions
                </p>
              </CardContent>
            </Card>

            <Card
              className={`border-zinc-700 hover:border-purple-500 transition-colors duration-300 ${
                theme === "light" ? "bg-white" : "bg-zinc-800"
              }`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Music className="h-10 w-10 text-purple-500 mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-zinc-800" : "text-white"}`}>
                  Guitar Player
                </h3>
                <p className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                  Finding harmony in code and music
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
