"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "./animations";

export function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      color: "text-blue-600",
      bgGradient: "from-blue-500 to-cyan-500",
      cardGradient: "from-blue-100 to-cyan-100",
      title: t("phone"),
      value: "0392466827",
      href: "tel:0392466827",
    },
    {
      icon: Mail,
      color: "text-emerald-600",
      bgGradient: "from-emerald-500 to-teal-500",
      cardGradient: "from-emerald-100 to-teal-100",
      title: t("email"),
      value: "vanhuyluan2003@gmail.com",
      href: "mailto:vanhuyluan2003@gmail.com",
    },
    {
      icon: MapPin,
      color: "text-rose-600",
      bgGradient: "from-rose-500 to-pink-500",
      cardGradient: "from-rose-100 to-pink-100",
      title: t("location"),
      value: t("locationAddress"),
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden relative"
    >
      <div className="absolute inset-0 contact-gradient opacity-5" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <AnimatedSection>
            <motion.h2
              className="text-3xl font-bold tracking-tight sm:text-4xl gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {t("letsConnect")}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {t("contactDescription")}
            </motion.p>
          </AnimatedSection>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              staggerChildren: 0.2,
              delayChildren: 0.4,
            }}
          >
            {contactInfo.map((info, index) => (
              <AnimatedCard key={info.title} delay={index * 0.2}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 cursor-pointer bg-white/90 backdrop-blur-sm relative overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${info.cardGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    initial={false}
                  />
                  <CardContent className="flex flex-col items-center p-6 relative z-10">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`mb-4 p-3 rounded-full bg-gradient-to-br ${info.bgGradient} shadow-lg`}
                    >
                      <info.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <motion.h3
                      className={`font-semibold text-lg ${info.color}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    >
                      {info.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-muted-foreground text-center mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    >
                      {info.value}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  (window.location.href = "mailto:vanhuyluan2003@gmail.com")
                }
                size="lg"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="mailto:vanhuyluan2003@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span>{t("emailMe")}</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() =>
                  window.open("https://github.com/VanHuyLuan", "_blank")
                }
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white transition-all duration-300 border-2"
              >
                <motion.svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </motion.svg>
                {t("github")}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 border-2"
                asChild
              >
                <Link
                  href="https://www.facebook.com/huy.luan.0712/"
                  target="_blank"
                >
                  <motion.svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </motion.svg>
                  {t("facebook")}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-gradient-to-r from-blue-200 to-purple-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-sm text-muted-foreground">
              {t("availabilityText")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
