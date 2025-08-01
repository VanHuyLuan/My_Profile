"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "./language-provider"

export function EducationSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-500" />
                {t("education")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">{t("bachelorCS")}</h3>
                <p className="text-sm text-muted-foreground">{t("university")}</p>
                <p className="text-sm text-muted-foreground">October 2022 - Present</p>
                <div className="mt-2">
                  <Badge variant="outline">{t("gpa")}</Badge>
                  <Badge variant="outline" className="ml-2">
                    {t("excellentStudent")}
                  </Badge>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>{t("labResearch")}</p>
                <p>{t("codingCompetitions")}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                {t("certificationsSkills")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">{t("officeCert")}</h3>
                <p className="text-sm text-muted-foreground">2023 - 2024</p>
              </div>
              <div>
                <h3 className="font-semibold">{t("softSkillsCert")}</h3>
                <p className="text-sm text-muted-foreground">2023 - 2024</p>
              </div>
              <div className="pt-2">
                <h4 className="font-medium text-sm">{t("softSkillsTitle")}</h4>
                <p className="text-sm text-muted-foreground">{t("teamworkSkills")}</p>
                <p className="text-sm text-muted-foreground">{t("officeSkills")}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
