"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Server, Container, GitBranch } from "lucide-react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { AnimatedSection, AnimatedCard } from "./animations"

export function SkillsSection() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      icon: Code,
      title: t("coreLanguages"),
      color: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      skills: ["C++", "Java"],
    },
    {
      icon: Server,
      title: t("backendDev"),
      color: "text-emerald-600",
      gradient: "from-emerald-500 to-teal-500",
      skills: ["Golang", "JavaScript", "GraphQL", "Clean Architecture", "OAuth2", "Keycloak", "REST APIs"],
    },
    {
      icon: Database,
      title: t("databaseStorage"),
      color: "text-purple-600",
      gradient: "from-purple-500 to-indigo-500",
      skills: ["PostgreSQL", "MySQL", "SQLC", "Database Migration", "Query Optimization"],
    },
    {
      icon: Container,
      title: t("devopsDeployment"),
      color: "text-orange-600",
      gradient: "from-orange-500 to-red-500",
      skills: ["Docker", "Kubernetes", "CI/CD", "Container Orchestration", "Service Monitoring"],
    },
    {
      icon: Code,
      title: t("frontendDev"),
      color: "text-rose-600",
      gradient: "from-rose-500 to-pink-500",
      skills: ["React", "Next.js", "TypeScript", "Web Components", "HTML/CSS"],
    },
    {
      icon: GitBranch,
      title: t("mobileAI"),
      color: "text-indigo-600",
      gradient: "from-indigo-500 to-purple-500",
      skills: ["Kotlin", "Jetpack Compose", "Firebase", "Machine Learning", "Deep Learning"],
    },
  ]

  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 opacity-50" />

      <div className="container px-4 mx-auto relative z-10">
        <AnimatedSection className="text-center space-y-8">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("technicalSkills")}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {t("skillsDescription")}
          </motion.p>
        </AnimatedSection>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.3,
          }}
        >
          {skillCategories.map((category, index) => (
            <AnimatedCard key={category.title} delay={index * 0.1}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 relative overflow-hidden bg-white/80 backdrop-blur-sm">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} shadow-lg`}
                    >
                      <category.icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`${category.color} font-semibold`}
                    >
                      {category.title}
                    </motion.span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      staggerChildren: 0.05,
                      delayChildren: index * 0.1 + 0.4,
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.05,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -2, 2, 0],
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Badge
                          className={`cursor-pointer hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${category.gradient} text-white border-0`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
