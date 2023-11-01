
"use client"

import { useTranslations } from 'next-intl';
export default function Home() {
  const t = useTranslations('Menu');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {t("home")}
    </main>
  )
}
