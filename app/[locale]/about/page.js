

"use client"

import { useTranslations, useLocale } from 'next-intl';

export default function Home() {
  const locale = useLocale();
  const message = {
    en: "about details",
    jp: "について 詳細",
  }

  const t = useTranslations('Menu');
  const detailsText = locale === 'en' ? message.en : message.jp;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("about")}
      <div className='details'>
        {detailsText}
      </div>
    </main>
  )
}
