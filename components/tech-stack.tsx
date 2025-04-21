"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type TechItem = {
  name: string
  icon: string
  category: "languages" | "frameworks" | "tools" | "ai" | "databases"
  proficiency: number
}

export default function TechStack() {
  const techItems: TechItem[] = [
    // Languages
    { name: "JavaScript", icon: "⚡", category: "languages", proficiency: 95 },
    { name: "TypeScript", icon: "🔷", category: "languages", proficiency: 90 },
    { name: "Python", icon: "🐍", category: "languages", proficiency: 80 },
    { name: "SQL", icon: "🗃️", category: "languages", proficiency: 85 },

    // Frameworks & Libraries
    { name: "Node.js", icon: "🟢", category: "frameworks", proficiency: 95 },
    { name: "Express", icon: "🚂", category: "frameworks", proficiency: 90 },
    { name: "NestJS", icon: "🐈", category: "frameworks", proficiency: 85 },
    { name: "React", icon: "⚛️", category: "frameworks", proficiency: 75 },

    // Tools & Deployment
    { name: "Docker", icon: "🐳", category: "tools", proficiency: 90 },
    { name: "AWS ECS", icon: "☁️", category: "tools", proficiency: 85 },
    { name: "GitHub Actions", icon: "🔄", category: "tools", proficiency: 80 },
    { name: "Redis", icon: "🔴", category: "tools", proficiency: 85 },
    { name: "Digital Ocean", icon: "🌊", category: "tools", proficiency: 90 },
    { name: "AWS", icon: "☁️", category: "tools", proficiency: 90 },

    // Databases
    { name: "PostgreSQL", icon: "🐘", category: "databases", proficiency: 95 },
    { name: "MySQL", icon: "🐬", category: "databases", proficiency: 95 },
    { name: "MongoDB", icon: "🍃", category: "databases", proficiency: 90 },

    // AI & ML
    { name: "Flowise AI", icon: "🧠", category: "ai", proficiency: 85 },
    { name: "TensorFlow", icon: "📊", category: "ai", proficiency: 70 },
    { name: "OpenAI API", icon: "🤖", category: "ai", proficiency: 80 },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="tech-stack" className="py-20 bg-zinc-900">
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
            Tech Stack
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
          <motion.p variants={fadeIn} custom={2} className="text-zinc-400 max-w-2xl mx-auto">
            The technologies, tools, and languages I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="grid grid-cols-5 max-w-3xl mx-auto mb-8">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="ai">AI & ML</TabsTrigger>
          </TabsList>

          {(["languages", "frameworks", "databases", "tools", "ai"] as const).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {techItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeIn}
                      custom={index + 3}
                    >
                      <Card className="tech-item bg-zinc-800 border-zinc-700 overflow-hidden h-full">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                          <div className="w-full bg-zinc-700 rounded-full h-2.5 mb-1">
                            <div
                              className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-red-500"
                              style={{ width: `${item.proficiency}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-zinc-400">{item.proficiency}%</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
