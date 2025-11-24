"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"

export default function Contact() {
  const { theme } = useTheme()
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

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/ayowilfred95",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/ayomide-adeyemi-95083a104/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/AyomideWilfred9",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className={`py-20 ${theme === "light" ? "bg-zinc-100" : "bg-zinc-900"}`}>
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
            Get In Touch
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            custom={2}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss collaboration
            opportunities? Book a call with me!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={3}
          >
            <Card className="bg-zinc-800 border-zinc-700 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Connect With Me
                </h3>
                <p className="text-zinc-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-4">
                      {socialLinks.map((link, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="icon"
                          className="border-zinc-700 hover:border-blue-500 hover:bg-zinc-700/50"
                          asChild
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                          >
                            {link.icon}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={4}
          >
            <Card className="bg-zinc-800 border-zinc-700 h-full">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <Calendar className="h-16 w-16 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Book a Call
                </h3>
                <p className="text-zinc-400 text-center mb-8">
                  Schedule a 30-minute call with me to discuss your project,
                  answer questions, or explore collaboration opportunities.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white"
                  asChild
                >
                  <a
                    href="https://cal.com/ayomide-wilfred/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Book a Time Slot <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
