"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Database,
  Server,
  Container,
  Mail,
  Github,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import { AnimatedText, FloatingElement, PulseElement } from "./animations";

export function HeroSection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative container px-4 py-24 mx-auto overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-10 -z-10" />

      <motion.div
        className="flex flex-col items-center text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="relative" variants={itemVariants}>
          <FloatingElement>
            <div className="relative">
              <Image
                src="/avatar.jpg?height=150&width=150"
                alt="Văn Huy Luân"
                width={150}
                height={150}
                className="rounded-full border-4 border-blue-400 shadow-2xl"
              />
            </div>
          </FloatingElement>
          <PulseElement className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full p-2 shadow-lg">
            <Server className="h-4 w-4 text-white" />
          </PulseElement>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Văn Huy Luân
          </motion.h1>
          <AnimatedText delay={0.4}>
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold max-w-2xl">
              {t("backendEngineer")}
            </p>
          </AnimatedText>
          <motion.div
            className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 dark:text-blue-300">
                0392466827
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="h-4 w-4 text-emerald-600" />
              <span className="text-emerald-700 dark:text-emerald-300">
                vanhuyluan2003@gmail.com
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="h-4 w-4 text-rose-600" />
              <span className="text-rose-700 dark:text-rose-300">
                Hanoi, Vietnam
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        <AnimatedText delay={0.6} className="max-w-4xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("heroDescription")}
          </p>
        </AnimatedText>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: Code, text: "Golang", color: "from-cyan-400 to-blue-500" },
            {
              icon: Database,
              text: "PostgreSQL",
              color: "from-blue-500 to-indigo-600",
            },
            {
              icon: Container,
              text: "Docker",
              color: "from-blue-400 to-cyan-500",
            },
            {
              icon: Server,
              text: "Kubernetes",
              color: "from-indigo-500 to-purple-600",
            },
            { icon: null, text: "GraphQL", color: "from-pink-500 to-rose-500" },
            {
              icon: null,
              text: "Keycloak",
              color: "from-purple-500 to-indigo-500",
            },
          ].map((skill, index) => (
            <motion.div
              key={skill.text}
              variants={badgeVariants}
              whileHover={{
                scale: 1.1,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className={`px-4 py-2 cursor-pointer bg-gradient-to-r ${skill.color} text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {skill.icon && <skill.icon className="mr-2 h-4 w-4" />}
                {skill.text}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() =>
                (window.location.href = "mailto:vanhuyluan2003@gmail.com")
              }
              className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-4 w-4 relative z-10" />
              <span className="relative z-10">{t("getInTouch")}</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() =>
                window.open("https://github.com/VanHuyLuan", "_blank")
              }
              variant="outline"
              size="lg"
              className="group bg-gradient-to-r from-slate-100 to-gray-100 hover:from-gray-200 hover:to-slate-200 border-2 border-gradient-to-r from-blue-400 to-purple-400"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="mr-2"
              >
                <Github className="h-4 w-4" />
              </motion.div>
              {t("viewGithub")}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
