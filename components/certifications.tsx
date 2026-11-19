"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useTheme } from "next-themes";

type Certification = {
  id: number;
  title: string;
  issuer: string;
  detail?: string;
  year: string;
  url?: string;
};

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Graduate Member (GMNSE)",
      issuer: "Nigerian Society of Engineers",
      detail: "No. G94894",
      year: "2026",
      url: "https://drive.google.com/file/d/1syUBacu-zoEemryRHRKo1iMiiACUOtkL/view",
    },
    {
      id: 2,
      title:
        "Studio 5000 Logix Designer Level 1 and Level 2; EtherNet/IP Configuration and Troubleshooting",
      issuer: "Rockwell Automation",
      year: "2020",
      // Links to the Level 1 certificate only.
      // TODO(Ayomide): optionally add links for Level 2 and EtherNet/IP.
      url: "https://drive.google.com/file/d/1ViTqrGwY_mHSvldaEU3PrMaDRTN9WRo2/view",
    },
    {
      id: 3,
      title: "Robotics and Controls Job Simulation",
      issuer: "Johnson & Johnson MedTech (Forage)",
      year: "2026",
      url: "https://www.theforage.com/completion-certificates/3w79S9RRBtn9noDWZ/q8m3gpN4ETXnjapPq_3w79S9RRBtn9noDWZ_PPMRCuhqwmHfg2ZBD_1792093714506_completion_certificate.pdf",
    },
    {
      id: 4,
      title: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      year: "2020",
      url: "https://www.credly.com/badges/9fe9b4ef-4b64-4b47-8256-203eeb9f679c",
    },
  ];

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
  const { theme } = useTheme();

  return (
    <section
      id="certifications"
      className={`py-20 ${theme === "light" ? "bg-zinc-100" : "bg-zinc-900"}`}
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
            Certifications
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={index + 2}
            >
              <Card className="h-full bg-zinc-800 border-zinc-700 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {cert.url ? (
                        <Link
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors"
                        >
                          {cert.title}
                          <ExternalLink className="inline-block h-3.5 w-3.5 ml-1.5 shrink-0 align-[-0.05em]" />
                        </Link>
                      ) : (
                        cert.title
                      )}
                    </h3>
                    <p className="text-zinc-400">{cert.issuer}</p>
                    {cert.detail && (
                      <p className="text-zinc-400 text-sm">{cert.detail}</p>
                    )}
                    <div className="flex items-center text-zinc-500 mt-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{cert.year}</span>
                    </div>
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
