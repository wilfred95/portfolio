"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes"

const blogPosts = [
  {
    id: 1,
    title:
      "How to Build a QR Code Generator for URLs with Node.js, Next.js, and Azure Blob Storage",
    excerpt:
      "This tutorial covers the process of building a QR code generator for URLs using Node.js, Next.js, and Azure Blob Storage.",
    date: "April 2024",
    readTime: "5 min read",
    externalUrl:
      "https://www.freecodecamp.org/news/build-a-qr-code-generator-using-nodejs-nextjs-azure-blob-storage/",
    image: "/qr.png",
    alt: "QR Code Generator Tutorial",
  },
  {
    id: 2,
    title: "How to Run a Postgres Database in Azure Kubernetes Service",
    excerpt:
      "This tutorial explains how to run a PostgreSQL database on Azure Kubernetes Service (AKS) and integrate it with a Node.js Express application.",
    date: "May 2024",
    readTime: "40 min read",
    externalUrl:
      "https://www.freecodecamp.org/news/how-to-run-postgres-in-kubernetes/",
    image: "/aks.png",
    alt: "Postgres on Kubernetes Tutorial",
  },
  {
    id: 3,
    title:
      "A Guide to Connecting to PostgreSQL with Supabase and Sequelize ORM",
    excerpt:
      "This tutorial demonstrates how to connect to a PostgreSQL database using Supabase and Sequelize ORM.",
    date: "November 2023",
    readTime: "10 min read",
    externalUrl:
      "https://wilfred9.hashnode.dev/a-guide-to-connecting-to-postgresql-with-supabase-and-sequelize-orm",
    image: "/supabase.png",
    alt: "Supabase and Sequelize Tutorial",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function BlogPreview() {
  const { theme } = useTheme()
  return (
    <section
      id="blog"
      className={`py-20 relative overflow-hidden ${theme === "light" ? "bg-zinc-200" : "bg-zinc-950"}`}
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
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500"
          >
            Blog
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={fadeIn}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            Thoughts, insights, and tutorials on backend development, AI
            integration, and clean architecture.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col h-full"
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full flex flex-col hover:border-blue-500/50 transition-colors duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  <p className="text-zinc-400 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-end mt-auto">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={post.externalUrl}
                      className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                    >
                      Read More →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
