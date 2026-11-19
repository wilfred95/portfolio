"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type TechItem = {
  name: string;
  icon: string;
  category: "languages" | "frameworks" | "tools" | "ai" | "databases" | "engineering";
  // Optional: Engineering Tools entries have no proficiency score yet.
  proficiency?: number;
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("languages");
  const { theme } = useTheme();

  const techItems: TechItem[] = [
    // Languages
    { name: "JavaScript", icon: "⚡", category: "languages", proficiency: 95 },
    { name: "TypeScript", icon: "🔷", category: "languages", proficiency: 90 },
    { name: "Python", icon: "🐍", category: "languages", proficiency: 80 },
    { name: "SQL", icon: "🗃️", category: "languages", proficiency: 85 },

    // Frameworks & Libraries
    { name: "Node.js", icon: "🟢", category: "frameworks", proficiency: 95 },
    { name: "Express", icon: "🚂", category: "frameworks", proficiency: 90 },
    { name: "NestJS", icon: "🐈", category: "frameworks", proficiency: 95 },
    { name: "React", icon: "⚛️", category: "frameworks", proficiency: 75 },
    { name: "TypeORM", icon: "", category: "frameworks", proficiency: 85 },
    { name: "Sequelize", icon: "", category: "frameworks", proficiency: 85 },
    { name: "Firebase", icon: "", category: "frameworks", proficiency: 90 },
    { name: "Clerk", icon: "", category: "frameworks", proficiency: 90 },

    // Tools & Deployment
    { name: "Docker", icon: "🐳", category: "tools", proficiency: 90 },
    { name: "AWS ECS", icon: "☁️", category: "tools", proficiency: 85 },
    { name: "GitHub Actions", icon: "🔄", category: "tools", proficiency: 80 },
    { name: "Redis", icon: "🔴", category: "tools", proficiency: 85 },
    { name: "BullMQ", icon: "", category: "tools", proficiency: 85 },
    { name: "Digital Ocean", icon: "🌊", category: "tools", proficiency: 90 },
    { name: "AWS", icon: "☁️", category: "tools", proficiency: 90 },
    { name: "Paystack", icon: "", category: "tools", proficiency: 90 },
    { name: "Stripe", icon: "", category: "tools", proficiency: 90 },

    // Databases
    { name: "PostgreSQL", icon: "🐘", category: "databases", proficiency: 95 },
    { name: "MySQL", icon: "🐬", category: "databases", proficiency: 95 },
    { name: "MongoDB", icon: "🍃", category: "databases", proficiency: 90 },

    // AI & ML
    { name: "Flowise AI", icon: "🧠", category: "ai", proficiency: 85 },
    { name: "TensorFlow", icon: "📊", category: "ai", proficiency: 70 },
    { name: "OpenAI API", icon: "🤖", category: "ai", proficiency: 80 },

    // Engineering Tools
    // TODO(Ayomide): add icons and proficiency % for these if you want the
    // progress bar shown like the other tabs (left blank rather than guessed).
    { name: "MATLAB/Simulink", icon: "", category: "engineering" },
    { name: "RSLogix 500/5000 (Studio 5000)", icon: "", category: "engineering" },
    { name: "PLCs (Allen-Bradley, Siemens, Schneider)", icon: "", category: "engineering" },
    { name: "HMI", icon: "", category: "engineering" },
    { name: "AutoCAD", icon: "", category: "engineering" },
    { name: "Elmer FEM", icon: "", category: "engineering" },
  ];

  const categories = [
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks" },
    { id: "databases", name: "Databases" },
    { id: "tools", name: "Tools" },
    { id: "ai", name: "AI & ML" },
    { id: "engineering", name: "Engineering Tools" },
  ];

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
  };

  return (
    <section
      id="tech-stack"
      className={`py-20 ${theme === "light" ? "bg-zinc-200" : "bg-zinc-950"}`}
    >
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
          <motion.p
            variants={fadeIn}
            custom={2}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            The technologies, tools, and languages I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Custom Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`py-3 px-4 rounded-md text-center transition-colors ${
                  activeCategory === category.id
                    ? "bg-zinc-800 text-white"
                    : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800/70 hover:text-zinc-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Tech Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techItems
              .filter((item) => item.category === activeCategory)
              .map((item, index) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  custom={index + 1}
                  className="bg-zinc-900 border border-zinc-800 rounded-lg p-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className={`text-xl font-bold text-center ${item.proficiency !== undefined ? "mb-4" : ""}`}>{item.name}</h3>
                    {item.proficiency !== undefined && (
                      <>
                        <div className="w-full bg-zinc-800 rounded-full h-2.5 mb-2">
                          <div
                            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-red-500"
                            style={{ width: `${item.proficiency}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-zinc-400">
                          {item.proficiency}%
                        </span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
