import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Văn Huy Luân - Backend Engineer",
  description:
    "Backend Engineer specializing in Golang, PostgreSQL, Docker, and Kubernetes. Computer Science student at UET-VNU with experience in building scalable systems.",
  keywords: [
    "Backend Engineer",
    "Golang",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Vietnam",
    "Software Developer",
  ],
  authors: [{ name: "Văn Huy Luân" }],
  creator: "Văn Huy Luân",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "Văn Huy Luân - Backend Engineer",
    description: "Backend Engineer specializing in Golang, PostgreSQL, Docker, and Kubernetes",
    siteName: "Văn Huy Luân Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Văn Huy Luân - Backend Engineer",
    description: "Backend Engineer specializing in Golang, PostgreSQL, Docker, and Kubernetes",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
