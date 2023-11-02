
"use client"

import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
export default function Home() {
  const t = useTranslations('Menu');
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {t("home")}
      </main>
    </>

  )
}
