"use client"

import { useLanguage } from "./language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Văn Huy Luân. {t("allRightsReserved")}
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">{t("footerText")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
