"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, GraduationCap, Calendar } from "lucide-react"
import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { AnimatedSection, AnimatedCard } from "./animations"

export function ExperienceSection() {
  const { t } = useLanguage()

  const experiences = [
    {
      icon: Building,
      iconColor: "text-blue-500",
      title: t("fullstackIntern"),
      company: t("mobifoneCompany"),
      period: "Apr 2025 - Jul 2025",
      project: t("digitalSchoolProject"),
      details: [t("exp1"), t("exp2"), t("exp3"), t("exp4"), t("exp5"), t("exp6"), t("exp7")],
      technologies: ["Golang", "PostgreSQL", "Keycloak", "GraphQL", "Docker", "Kubernetes", "SQLC", "OAuth2", "Hasura"],
    },
    {
      icon: GraduationCap,
      iconColor: "text-green-500",
      title: t("labResearchActivities"),
      company: t("labResearchDesc"),
      period: "Aug 2024 - Dec 2024",
      project: null,
      details: [t("lab1"), t("lab2"), t("lab3"), t("lab4")],
      technologies: [],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container px-4 mx-auto">
        <AnimatedSection className="text-center space-y-8">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t("workExperience")}
          </motion.h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mt-16 space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.title} delay={index * 0.3}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-300">
                        <motion.div
                          whileHover={{
                            rotate: 360,
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <exp.icon className={`h-5 w-5 ${exp.iconColor}`} />
                        </motion.div>
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                        >
                          {exp.title}
                        </motion.span>
                      </CardTitle>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                      >
                        <CardDescription className="mt-1">{exp.company}</CardDescription>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.3 + 0.4 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    {exp.project && (
                      <motion.h4
                        className="font-semibold text-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                      >
                        {exp.project}
                      </motion.h4>
                    )}

                    <motion.div
                      className="space-y-2 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        staggerChildren: 0.1,
                        delayChildren: index * 0.3 + 0.6,
                      }}
                    >
                      {exp.details.map((detail, detailIndex) => (
                        <motion.p
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: detailIndex * 0.1,
                          }}
                          whileHover={{ x: 5 }}
                          className="hover:text-blue-600 transition-colors duration-200"
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </motion.div>

                    {exp.technologies.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          staggerChildren: 0.05,
                          delayChildren: index * 0.3 + 0.8,
                        }}
                      >
                        {exp.technologies.map((tech, techIndex) => (
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
                              rotate: [0, -3, 3, 0],
                              transition: { duration: 0.3 },
                            }}
                          >
                            <Badge variant="outline" className="cursor-pointer hover:shadow-md transition-shadow">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
