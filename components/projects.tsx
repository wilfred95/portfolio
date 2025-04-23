"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Uwana Connect",
      description:
        "A platform connecting clean energy providers with consumers, built with Node.js and MySQL using Clean Architecture principles.",
      image: "/uwana-packages.png",
      tags: [
        "Node.js",
        "MySQL",
        "Docker",
        "Gitlab",
        "ECS",
        "AWS Amplify",
        "AWS S3 Bucket",
      ],
      demoUrl: "https://uwanaconnect.com/packages?page=1",
      repoUrl: "https://uwanaconnect.com/packages?page=1",
    },
    {
      id: 2,
      title: "Sokozuri Africa",
      description:
        "Sokozuri Africa is an online e-commerce platform designed to empower African vendors, artisans, and entrepreneurs by providing them with a digital marketplace to showcase and sell their products and services across the continent.",
      image: "/Sokozuri-Home.png",
      tags: [
        "Node.js",
        "PostgreSQL",
        "Express",
        "Docker",
        "WebSockets",
        "Redis",
      ],
      demoUrl: "https://www.sokozuri.com/",
      repoUrl: "https://www.sokozuri.com/",
    },
    {
      id: 3,
      title: "Verify Your Customer",
      description:
        "Verify Your Customers (VYC) is a digital identity verification solution. It offers features to authenticate and onboard customers securely, possibly for fintech or KYC-related services.",
      image: "/verify1.png",
      tags: [
        "Node.js",
        "PostgreSQL",
        "Express",
        "NFC Chip Reader SDK",
        "AWS S3 Bucket",
        "Docker",
        "Digital Ocean",
      ],
      demoUrl: "https://vyc-c5zkr.ondigitalocean.app/",
      repoUrl: "https://vyc-c5zkr.ondigitalocean.app/",
    },
    {
      id: 4,
      title: "Verify Your Customer",
      description:
        "Verify Your Customers (VYC) is a digital identity verification solution. It offers features to authenticate and onboard customers securely, possibly for fintech or KYC-related services.",
      image: "/verify4.png",
      tags: [
        "Node.js",
        "PostgreSQL",
        "Express",
        "NFC Chip Reader SDK",
        "AWS S3 Bucket",
        "Docker",
        "Digital Ocean",
      ],
      demoUrl: "https://vyc-c5zkr.ondigitalocean.app/",
      repoUrl: "https://vyc-c5zkr.ondigitalocean.app/",
    },
  ]);

  const fadeInUp = {
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

  return (
    <section
      id="projects"
      className="py-20 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500"
          >
            Projects
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Explore my latest work showcasing clean architecture, scalable
            systems, and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              custom={index + 3}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full flex flex-col hover:border-blue-500/50 transition-colors duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <div
                    className="w-full h-full bg-gradient-to-br from-blue-900/20 to-red-900/20"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                </div>

                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-zinc-800 text-zinc-300 border-zinc-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between">
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
