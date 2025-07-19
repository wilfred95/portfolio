"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useTheme } from "next-themes"

type Experience = {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
};

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 1,
      position: "Backend Developer",
      company: "Luftsocial",
      location: "Remote(Upwork)",
      period: "2025 - Present",
      description:
        "Led the development of a real-time messaging and notification system using NestJS and WebSockets, supporting 10,000+ concurrent connections. Architected a multi-channel notification infrastructure (In-App, Push, Email) that improved user engagement by 65%.",
      responsibilities: [
        "Designed and implemented a real-time notification system using NestJS Gateway and WebSockets, supporting multi-channel delivery (In-App, Push, Email) via a strategy pattern.",
        "Built core messaging features including threaded replies, typing indicators, message reactions, read receipts, and content editing/deletion with live updates.",
        "Integrated Firebase Cloud Messaging (FCM) for mobile push notifications and implemented a queuing system using Bullmq for reliable delivery, even while offline.",
        "Ensured secure, high-performance communication by adding WebSocket auth middleware, rate limiting, content sanitization, and optimized database queries.",
        "Followed SOLID principles, wrote unit tests, and maintained detailed API documentation to support scalability and maintainability.",
       
      ],
      technologies: [
        "Node.js",
        "Nestjs",
        "PostgreSQL",
        "Docker",
        "TypeORM",
        "Redis",
        "Bullmq",
        "Firebase",
        "WebSockets",
        "Socket.IO",
        "AWS S3 Bucket",
      ],
      // companyUrl: "https://vyc-c5zkr.ondigitalocean.app/",
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "Verify Your Customer",
      location: "Remote(Contract)",
      period: "2025 - Present",
      description:
        "Leading backend development for a digital identity verification platform that offers features to authenticate and onboard customers securely, possibly for fintech or KYC-related services.",
      responsibilities: [
        "Developed the Verify Your Customer (VYC) backend application, a document verification system for businesses, and deployed both the backend and frontend on Digital Ocean.",
        "Implemented role-based access control (RBAC) for different user permissions.",
        "Configured Multer for handling business registration documents uploads, and integrated DigitalOcean Spaces (S3) for secure, scalable storage. Implemented functions to upload, update, and delete images/documents in S3 buckets efficiently.",
        "Implemented Stripe payment processing to enable users to purchase subscription plans, supporting multiple models (PAY-AS-YOU-GO, PREMIUM) with automated billing cycles, plan upgrades, and cancellations.",
        "Integrated Nodemailer for sending verification emails, OTPs, and notifications, utilizing the Mustache templating engine for dynamic and customizable email content.",
        "Developed an endpoint to receive NFC data captured by the Verify Your Customer NFC mobile app, process it using integrated AI, and deliver verified, authenticated data to users.",
      ],
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Docker",
        "Digital Ocean",
        "Stripe",
        "Nodemailer",
        "AWS S3 Bucket",
      ],
      companyUrl: "https://vyc-c5zkr.ondigitalocean.app/",
    },
    {
      id: 3,
      position: "Backend Developer",
      company: "Uwana Energy",
      location: "Ikoyi, Lagos (Full - Time)",
      period: "2024 - Present",
      description:
        "Leading backend development for a clean energy platform connecting providers with consumers.",
      responsibilities: [
        "Developed a recommendation algorithm that matches solar packages to customers based on appliance choices, usage hours, and energy requirements, ensuring optimal solutions tailored to their specific needs.",
        "Designed and Built and optimized financing features, including loan history tracking, lender applications, and payment schedules, while integrating Paystack payment APIs with auto-populated email fields for seamless transactions.",
        "Implemented file upload functionality with AWS S3 for secure and scalable media storage, ensuring compliance with access controls and automatically deleting old files before replacements to maintain storage efficiency.",
        "Created comprehensive reporting features, generating analytics for leads, installations, referrals, and packages by owner, location, lender, and source, to support statistical dashboards.",
        "Designed and developed the referral system API, enabling tracking of referrals, reward calculations, and token redemptions.",
        "Integrated backend services with Flowise AI chatbots, enabling automated support and sales recommendations.",
      ],
      technologies: [
        "Node.js",
        "Express",
        "MySQL",
        "Docker",
        "AWS ECS",
        "AWS S3 Bucket",
        "Paystack",
        "Nodemailer",
        "AWS Amplify",
        "Flowise AI",
      ],
      companyUrl: "https://uwanaconnect.com/",
    },
    {
      id: 4,
      position: "Backend Developer",
      company: "Sokozuri Africa",
      location: "Lekki, Lagos (Contract)",
      period: "2024 - 2025",
      description:
        "Worked on full-stack development for web applications. Focused on backend services and database optimization for high-traffic web platforms.",
      responsibilities: [
        "Designed database model for the Sokozuri e-commerce website, including customer, vendor, product, and admin features, ensuring efficient data management and scalability for a multi-role platform",
        "Developed a seamless payment processing system, integrating Paystack payment gateways to facilitate smooth and secure transactions, improving transaction success rates by 25% and reducing payment-related issues by 15%.",
        "Developed a chat application to facilitate seamless communication between customers and vendors, enabling efficient order management and resolving customer inquiries 30% faster, leading to a 20% improvement in overall customer satisfaction.",
        "Developed a robust image upload and management system for customer product images and vendor documents using S3 bucket for scalable storage. The system supports features such as image validation, resizing, and storage optimization, ensuring efficient upload, storage, and retrieval.",
        "Integrated the Kwik API to automate and manage delivery processes, enhancing logistics efficiency and reducing operational overhead by 20%, leading to faster delivery times and a 15% decrease in delivery-related costs.",
        "Implemented Redis caching to optimize API response times, reducing redundant database queries and improving performance.",
        "Collaborated closely with frontend developers to integrate RESTful APIs into the frontend, ensuring a cohesive and user-friendly experience.",
        "Deployed the frontend and backend applications on DigitalOcean, set up and managed the PostgreSQL database, and configured DigitalOcean Spaces for scalable storage.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Digital Ocean",
        "Paystack",
        "Nodemailer",
        "AWS S3 Bucket",
        "Redis",
        "Vite",
        "WebSockets",
      ],
      companyUrl: "https://www.sokozuri.com/",
    },
    {
      id: 5,
      position: "Backend Developer",
      company: "Nupat Technologies",
      location: "Yaba, Lagos (Full - Time)",
      period: "2022 - 2023",
      description:
        "Contributed to the Nupat E-learning platform by designing the database schema and leading backend development, integrating third-party services such as payment gateways and authentication providers.",
      responsibilities: [
        "Contributed to the Nupat E-learning platform by designing the database schema and leading backend development, integrating third-party services such as payment gateways and authentication providers.",
        "Mentored interns at Nupat Technologies, guiding them in setting up codebases, managing databases, configuring cloud environments, implementing DevOps practices, and adhering to software development principles.",
        "Built features and fixed bugs on Ulego Finapp, including integrating secure payment gateways using Vee-bank, developing user authentication and authorization systems, optimizing transaction processing, and implementing financial reporting tools, ensuring high security and regulatory compliance.",
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Docker", "Truehost"],
      companyUrl: "https://nupat.com/",
    },
    {
      id: 6,
      position: "Backend Developer",
      company: "Qoinpal",
      location: "Yaba, Lagos (Full - Time)",
      period: "2022 - 2023",
      description:
        "Contributed to the Nupat E-learning platform by designing the database schema and leading backend development, integrating third-party services such as payment gateways and authentication providers.",
      responsibilities: [
        "Developed and maintained high-performance web applications, implemented robust backend functionalities and APIs.",
        "led a team of engineers in building fiat-to-crypto transactions and accepting crypto payment, handled rewards through staking and database management, optimized database schemas and queries, resulting in a 20% reduction in response time.",
        "Spearheaded a cross-functional engineering team in developing innovative fiat-to-crypto transaction and crypto payment solutions. Optimized database schemas and queries to enhance performance and scalability while overseeing reward distribution through staking and meticulous database management.",
        "Designed and implemented a high-performance microservice for seamless generation and management of Bitcoin and Ethereum wallet addresses. Integrated robust security measures, including encrypted key storage and secure API endpoints, to ensure data integrity and compliance with industry standards. Optimized the service for scalability, enabling support for high transaction volumes and real-time address generation.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "TypeScript",
        "Docker",
        "Supabase",
        "Render",
        "Golang",
        "Solidity",
        "Smart Contract",
      ],
      companyUrl: "https://qoinpal-waitlist.vercel.app/",
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
  const { theme } = useTheme()

  return (
    <section id="experience" className={`py-20 ${theme === "light" ? "bg-zinc-100" : "bg-zinc-900"}`}>
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
            Work Experience
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
            My professional journey and the companies I've had the privilege to
            work with.
          </motion.p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={index + 3}
            >
              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-zinc-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        <Briefcase className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.position}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-zinc-400">
                          <div className="flex items-center">
                            {exp.companyUrl ? (
                              <Link
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-blue-400 transition-colors"
                              >
                                {exp.company}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Link>
                            ) : (
                              exp.company
                            )}
                          </div>
                          <div className="hidden sm:block text-zinc-600">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-zinc-500 md:text-right">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-zinc-300 mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2 pl-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="pl-2">
                            <span className="text-zinc-300">
                              {responsibility}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-zinc-700 text-zinc-300 border-zinc-600"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
