"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { AnimatedSection, AnimatedCard } from "./animations"

export function ProjectsSection() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("qairlineTitle"),
      description: t("qairlineDesc"),
      period: "Sep 2024 - Dec 2024",
      technologies: ["React", "TypeScript", "Golang", "Docker", "MySQL"],
      details: [t("qairline1"), t("qairline2"), t("qairline3")],
      role: t("coderDesigner"),
      roleColor: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
      cardGradient: "from-blue-100 to-cyan-100",
      github: "https://github.com/nalgnaohel/INT3306-54---QAirline",
      demo: "https://int3306-54-qairline.vercel.app/",
    },
    {
      title: t("listenVisionTitle"),
      description: t("listenVisionDesc"),
      period: "Aug 2024 - Dec 2024",
      technologies: ["React", "JavaScript", "AI/ML", "Speech Recognition", "Accessibility"],
      details: [t("listenvision1"), t("listenvision2"), t("listenvision3")],
      role: t("teamLeaderCoder"),
      roleColor: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
      cardGradient: "from-emerald-100 to-teal-100",
      github: "https://github.com/shinyEazy/ListenVision",
      demo: "https://listenvision-git-main-vanhuyluans-projects.vercel.app/",
    },
    {
      title: t("cosmeaTitle"),
      description: t("cosmeaDesc"),
      period: "Mar 2024 - Jun 2024",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Image Processing", "Content Moderation"],
      details: [t("cosmea1"), t("cosmea2"), t("cosmea3")],
      role: t("mobileDeveloper"),
      roleColor: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
      cardGradient: "from-purple-100 to-pink-100",
      github: "https://github.com/windbow27/cosmea",
      demo: null,
    },
  ]

  return (
    <section id="projects" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-slate-900 dark:via-rose-900 dark:to-purple-900 opacity-50" />

      <div className="container px-4 mx-auto relative z-10">
        <AnimatedSection className="text-center space-y-8">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text-purple"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("personalProjects")}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {t("projectsDescription")}
          </motion.p>
        </AnimatedSection>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            staggerChildren: 0.2,
            delayChildren: 0.3,
          }}
        >
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 0.2}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 relative overflow-hidden bg-white/90 backdrop-blur-sm">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.cardGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  initial={false}
                />
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <motion.div
                      whileHover={{ rotate: 45, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink className="h-4 w-4 text-white" />
                    </motion.div>
                  </div>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {project.period}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        staggerChildren: 0.05,
                        delayChildren: index * 0.2 + 0.4,
                      }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      className="text-sm text-muted-foreground space-y-1"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    >
                      {project.details.map((detail, detailIndex) => (
                        <motion.p
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.7 + detailIndex * 0.1,
                          }}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white transition-all duration-300 bg-transparent"
                        >
                          <Link href={project.github} target="_blank">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </Button>
                      </motion.div>
                      {project.demo && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 bg-transparent"
                          >
                            <Link href={project.demo} target="_blank">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              {t("liveDemo")}
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.9 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge className={`${project.roleColor} cursor-pointer shadow-lg border-0`}>{project.role}</Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
