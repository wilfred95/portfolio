"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, BookOpen, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type Publication = {
  title: string
  url: string
}

type Education = {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  description: string
  publications?: Publication[]
  courses?: string[]
}

export default function Education() {
  const educationList: Education[] = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
      institution: "Kwara State University",
      location: "Kwara, Nigeria",
      period: "2018 - 2022",
      description: "Focused on a blend of hardware and software disciplines, with hands-on experience in systems design, embedded programming, and emerging technologies like IoT and robotics.",
      publications: [
        {
          title: "Gas Monitoring and Leakages Detection Using IoT",
          url: "https://aujet.adelekeuniversity.edu.ng/index.php/aujet/article/view/299",
        },
      ],
      courses: [
        "Circuit Design", 
        "Power System", 
        "Telecommunication", 
        "Nanotechnology", 
        "Electronics", 
        "Programming", 
        "Robotics", 
        "Internet of Things (IoT)", 
        "Control and Signal Processing",
      ],
    },
    {
        id: 2,
        degree: "Associate Degree in Electrical/Electronics Engineering",
        institution: "Abraham Adesanya Polytechnic",
        location: "Ogun State, Nigeria",
        period: "2013 - 2015",
        description: "Focused on understanding of complex systems and hands-on experience in embedded programming and emerging technologies.",
        // publications: [],
        courses: [
            "Programmable Logic Controller (PLC)", 
            "Power System Engineering", 
            "Telecommunication", 
            "Engineering Drawing", 
            "Electronics", 
            "Programming", 
            "Microcontroller", 
            "Measurement and Instrumentation", 
            "Engineering Machines and Technology",
        ],
      },
  ]

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
  }

  return (
    <section id="education" className="py-20 bg-zinc-950 relative overflow-hidden">
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
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500"
          >
            Education
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
          <motion.p variants={fadeIn} custom={2} className="text-zinc-400 max-w-2xl mx-auto">
            My academic journey and qualifications that have shaped my expertise in technology.
          </motion.p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={index + 3}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-zinc-400">
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center text-zinc-500 md:text-right">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-zinc-300 mb-6">{edu.description}</p>

                    {edu.publications && edu.publications.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <FileText className="h-5 w-5 text-red-500 mr-2" />
                          <h4 className="text-lg font-semibold text-white">Publications</h4>
                        </div>
                        <ul className="list-disc list-inside text-zinc-400 space-y-2 pl-2">
                          {edu.publications.map((publication, i) => (
                            <li key={i} className="hover:text-zinc-300 transition-colors">
                              <Link
                                href={publication.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors"
                              >
                                {publication.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.courses && (
                      <div>
                        <div className="flex items-center mb-3">
                          <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                          <h4 className="text-lg font-semibold text-white">Key Courses</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <Badge key={i} variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
