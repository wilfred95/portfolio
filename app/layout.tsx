import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head"; // Import Head component from next/head

export const metadata: Metadata = {
  title: "Ayomide Wilfred | Backend Developer in Lagos, Nigeria",
  description: "Expert Backend Developer & AI Builder in Lagos, Nigeria. Specializing in Node.js, NestJS, and scalable web applications for Nigerian startups and businesses.",
  keywords: "backend developer nigeria, node.js developer lagos, software engineer nigeria, nestjs developer, web developer nigeria, API developer, backend development lagos, javascript developer nigeria, typescript developer, full stack developer nigeria",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://ayomide-wilfred.vercel.app"),
  alternates: {
    canonical: "https://ayomide-wilfred.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        {/* Google Site Verification and Structured Data */}
        <Head>
          <meta name="google-site-verification" content="googlec8e94f160f15533e" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Ayomide Wilfred",
                "jobTitle": "Backend Developer",
                "description": "Expert Backend Developer & AI Builder specializing in Node.js, NestJS, and scalable web applications",
                "url": "https://ayomide-wilfred.vercel.app",
                "image": "https://ayomide-wilfred.vercel.app/my-headshot.jpg",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lagos",
                  "addressCountry": "Nigeria"
                },
                "knowsAbout": [
                  "Backend Development",
                  "Node.js",
                  "NestJS",
                  "JavaScript",
                  "TypeScript",
                  "API Development",
                  "Microservices",
                  "DevOps",
                  "AI Integration",
                  "Sustainable Technology"
                ],
                "offers": {
                  "@type": "Service",
                  "serviceType": "Backend Development Services",
                  "description": "Professional backend development services for startups and businesses in Nigeria",
                  "areasServed": "Nigeria",
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://ayomide-wilfred.vercel.app"
                  }
                },
                "sameAs": [
                  "https://twitter.com/ayomidewilfred9"
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Ayomide Wilfred Portfolio",
                "url": "https://ayomide-wilfred.vercel.app",
                "description": "Portfolio of Ayomide Wilfred, a backend developer based in Lagos, Nigeria",
                "inLanguage": "en",
                "isAccessibleForFree": true,
                "publisher": {
                  "@type": "Person",
                  "name": "Ayomide Wilfred"
                }
              })
            }}
          />
        </Head>
      </body>
    </html>
  );
}
