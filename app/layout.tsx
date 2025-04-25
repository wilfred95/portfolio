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
  title: "Ayomide Wilfred Portfolio",
  description: "Backend Developer | AI Builder | Sustainability Enthusiast",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://ayomide-wilfred.vercel.app"),
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
        {/* Add Google Site Verification meta tag here */}
        <Head>
          <meta name="google-site-verification" content="googlec8e94f160f15533e" />
        </Head>
      </body>
    </html>
  );
}
