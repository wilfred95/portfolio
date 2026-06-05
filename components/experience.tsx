"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useTheme } from "next-themes";

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
      company: "Independent Purchasing Company (IPC-Africa)",
      location: "Lekki Phase 1, Lagos",
      period: "Sep 2025 - Present",
      description:
        "Took ownership of the backend platform for <a href='https://relaypilot.com' target='_blank' rel='noopener noreferrer' style='color: #3b82f6; text-decoration: underline; font-weight: 500; text-decoration-color: #3b82f6;' onMouseOver=\"this.style.color='#60a5fa'\" onMouseOut=\"this.style.color='#3b82f6'\">Relay Pilot</a>, a multi-sided logistics dispatch platform connecting logistics companies, riders, businesses, and third-party integrators across Nigeria. Owned the architecture, data model, deployment shape, and failure modes from day one.",
      responsibilities: [
        "Designed and shipped the B2B Integration Platform — a self-serve REST API that lets external platforms (food aggregators, marketplaces, e-commerce stores) push real delivery orders into Relay Pilot. Includes signup with sandbox + live API keys, quote-based dispatch, HMAC-signed webhook delivery, and pre-paid wallet billing.",
        "Architected a two-deployment sandbox/production split with HMAC-SHA256 cross-backend partner mirroring — test data is physically isolated from live data while the same Mongo _id on both sides keeps cross-environment lookups as clean findById calls. Self-healing via login-triggered lazy mirroring when the boot-time backfill misses a partner.",
        "Built a pre-paid wallet and settlement engine with env-scoped balances, atomic delivery-fee debits inside Mongoose transactions, refund-on-cancel, 9JaPay virtual-account topups, and configurable rider settlement schedules (percentage or flat fee; daily / weekly / monthly) processed via BullMQ workers.",
        "Enforced strict repository pattern across 50+ domain modules — Controller → Service → Repository → Mongoose Model — with a generic BaseRepository<T> for shared CRUD and a withTransaction utility wrapping every multi-document write. Business logic stays free of Mongoose internals; transactions are atomic by default.",
        "Architected a modular backend system with 50+ domain modules using NestJS, implementing clean architecture principles across logistics, payments, authentication, orders, and notifications",
        "Set up a distributed queue system using BullMQ and Redis to process 10+ specialized job queues for financial transactions, settlements, and notifications with exponential backoff retry logic and 99.9% uptime",
        "Built multi-provider payment processing system integrating Paystack and 9JaPay with webhook signature verification, virtual account management, idempotency controls, and MongoDB ACID-compliant transactions — processing millions in financial transactions at 99.99% data consistency",
        "Scaled real-time logistics tracking using Redis-backed Socket.IO adapter with Redis geospatial indexing, enabling multi-instance WebSocket deployments with 100MB payload optimization for live rider location updates across 1000+ concurrent connections",
        "Led development of enterprise real-time messaging platform with Socket.IO featuring multi-device support, distributed conversation management, multi-channel notifications, and custom WebSocket decorator framework — serving 10,000+ concurrent users with sub-second latency",
      ],
      technologies: [
        "NestJS",
        "TypeScript",
        "MongoDB",
        "Mongoose",
        "Redis",
        "BullMQ",
        "Next.js",
        "WebSockets",
        "Socket.IO",
        "AWS S3",
        "HMAC-SHA256",
        "9JaPay",
      ],
      companyUrl: "https://www.ipc-africa.com/",
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "Luftsocial",
      location: "Remote(Upwork)",
      period: "May 2025 - Sep 2025",
      description:
        "Led the development of a real-time messaging and notification system using NestJS and WebSockets, supporting 10,000+ concurrent connections. Architected a multi-channel notification infrastructure (In-App, Push, Email) that improved user engagement by 65%.",
      responsibilities: [
        "Architected scalable microservice-ready backend with 20+ domain modules using NestJS, implementing Domain-Driven Design principles and maintaining 95% code modularity across subscription, AI, and platform integration domains.",
        "Integrated a multi-provider payment abstraction layer unifying Stripe and Paystack with a single webhook processing pipeline, handling 15+ payment event types and achieving 99.95% transaction reliability",
        "Configured an enterprise-grade queue processing system handling 10+ specialized queues with BullMQ, implementing exponential backoff retry strategies and reducing webhook processing failures by 85%.",
        "Built real-time messaging system using Socket.IO with 20+ typed event handlers, room-based broadcasting, multi-device support (8 concurrent connections per user), offline message sync, and full message lifecycle features including typing indicators, read receipts, and emoji reactions — supporting 10,000+ concurrent users",
        "Contributed to containerized deployment workflows using Docker-based deployment pipeline with multi-environment configurations, implementing health checks and reducing deployment time by 75% across dev/staging/prod.",
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
      id: 3,
      position: "Backend Developer",
      company: "Verify Your Customer",
      location: "Remote(Contract)",
      period: "Feb 2025 - Present",
      description:
        "Leading backend development for a digital identity verification platform that offers features to authenticate and onboard customers securely, possibly for fintech or KYC-related services.",
      responsibilities: [
        "Architected event-driven webhook delivery system using Bull Queue and Redis, processing 1000+ asynchronous jobs with 99.9% delivery reliability through exponential backoff retry logic.",
        "Engineered advanced TLS certificate pinning system with public key verification and custom CA chain validation, eliminating man-in-the-middle attack vectors for critical webhook communications.",
        "Designed and implemented comprehensive database abstraction layer with dynamic query building, reducing code duplication by 60% across 12+ data models while improving query performance.",
        "Integrated Stripe Payment Intents API processing $10K+ in monthly transactions with metadata tracking and automated subscription activation",
        "Implemented authentication covering JWT tokens, role-based access, and Google OAuth — handling secure login for 10,000+ users",
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
        "Redis",
        "Bullmq",
      ],
      companyUrl: "https://vyc-c5zkr.ondigitalocean.app/",
    },
    {
      id: 4,
      position: "Backend Developer",
      company: "Uwana Energy",
      location: "Ikoyi, Lagos (Full - Time)",
      period: "June 2024 - January 2025",
      description:
        "Leading backend development for a clean energy platform connecting providers with consumers.",
      responsibilities: [
        "Architected scalable Node.js REST API using clean layered architecture (Controllers, Services, DAO), organising 45+ controllers across domain-driven business modules and enabling parallel development across teams",
        "Implemented multi-database architecture supporting MySQL, PostgreSQL, and SQLite using Sequelize ORM, enabling flexible deployment across development, staging, and production environments.",
        "Integrated Paystack payment gateway with webhook signature verification, dynamic fee calculation, and escrow management, processing $50K+ in transactions at 99.9% uptime",
        "Architected scalable email service with template engine supporting 15+ transactional emails, processing 5,000+ daily emails with 98% delivery rate using Nodemailer and Mustache.",
        "Built end-to-end GitLab CI/CD pipeline using GitLab CI with Docker containerization, automated deployments to AWS ECS, and image cleanup, reducing deployment time by 75%",
        "Developed BaseDAO abstraction layer with dynamic query building, pagination, and transaction support, reducing database code duplication by 70% across 40+ models",
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
      id: 5,
      position: "Backend Developer",
      company: "Sokozuri Africa",
      location: "Lekki, Lagos (Contract)",
      period: "Aug 2024 - May 2025",
      description:
        "Worked on full-stack development for web applications. Focused on backend services and database optimization for high-traffic web platforms.",
      responsibilities: [
        "Designed and implemented scalable MVC architecture with layered separation of concerns, improving code maintainability and enabling parallel development across team members",
        "Developed a seamless payment processing system, integrating Paystack payment gateways to facilitate smooth and secure transactions, improving transaction success rates by 25% and reducing payment-related issues by 15%.",
        "Developed real-time messaging system using Socket.io with user presence tracking and online status management, enabling instant communication for thousands of concurrent users",
        "Engineered Redis caching layer with automatic response interception and 1-hour TTL, reducing database load by 60% and improving API response times from 500ms to 150ms",
        "Architected and managed 36+ database migrations with complex relational schemas supporting multi-vendor e-commerce operations, ensuring data integrity across 15+ interconnected entities",
        "Integrated cloud storage solutions (AWS S3 / DigitalOcean Spaces) with secure file upload handling using pre-signed URLs, supporting 30 MB uploads and managing 10,000+ product images at scale.",
        "Built transactional email system with template engine and OTP generation, sending 5,000+ emails daily for user verification and notifications with 98% deliverability rate",
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
      id: 6,
      position: "Backend Developer",
      company: "Nupat Technologies",
      location: "Yaba, Lagos (Full - Time)",
      period: "Sep 2023 - June 2024",
      description:
        "Contributed to the Nupat E-learning platform by designing the database schema and leading backend development, integrating third-party services such as payment gateways and authentication providers.",
      responsibilities: [
        "Architected a modular Node.js/Express backend using MVC pattern with clear separation of routes, controllers, and models for improved maintainability and scalability.",
        "Mentored interns at Nupat Technologies, guiding them in setting up codebases, managing databases, configuring cloud environments, implementing DevOps practices, and adhering to software development principles.",
        "Designed and implemented database schema using Sequelize ORM with PostgreSQL, establishing proper model relationships and implementing database migrations for schema evolution.",
        "Implemented comprehensive API documentation using Swagger/OpenAPI standards with automated endpoint documentation and interactive API explorer.",
        "Integrated Paystack payment gateway for secure online payment processing with proper error handling and transaction verification.",
        "Containerized application using Docker with docker-compose for database services and environment-based configuration management.",
        "Implemented comprehensive security measures including bcrypt password hashing, JWT authentication, environment variable management, and CORS protection.",
        "Developed sophisticated business logic for automatic matriculation number generation with class-based sequential numbering and course grade calculation system.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Truehost",
        "Paystack",
        "Sequelize",
      ],
      companyUrl: "https://nupat.com/",
    },
    {
      id: 7,
      position: "Backend Developer",
      company: "Qoinpal",
      location: "Remote",
      period: "May 2023 - Nov 2024",
      description:
        "Contributed to the Nupat E-learning platform by designing the database schema and leading backend development, integrating third-party services such as payment gateways and authentication providers.",
      responsibilities: [
        "Architected a multi-blockchain cryptocurrency service using modular Go packages, implementing clean separation between blockchain-specific logic, database operations, and API layers for enhanced maintainability.",
        "Developed secure cryptocurrency wallet generation system implementing ECDSA key pairs, multi-stage hashing algorithms (SHA256, RIPEMD160, Keccak256), and proper address encoding for Bitcoin and Ethereum networks.",
        "Designed and implemented RESTful API endpoints with proper HTTP status codes, structured JSON responses, and comprehensive error handling for multi-blockchain wallet generation services.",
        "Integrated BadgerDB embedded database for persistent wallet storage, implementing transaction-based operations with proper error handling and data consistency guarantees.",
        "Established production-ready development environment with environment variable management, structured logging systems, and automated build processes using Makefile for streamlined deployment.",
        "Integrated specialized blockchain libraries (btcsuite, go-ethereum) and Gin HTTP framework to build comprehensive cryptocurrency wallet generation system with minimal external dependencies.",
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
  const { theme } = useTheme();

  return (
    <section
      id="experience"
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
                    <p
                      className="text-zinc-300 mb-6"
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                    ></p>

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
