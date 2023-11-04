

"use client"
import MDEditor from '@uiw/react-md-editor';
import React from "react";
import { useTranslations, useLocale } from 'next-intl';



export default function Home() {
  const locale = useLocale();
  const message = {
    en: "about details",
    jp: "について 詳細",
  }

  const t = useTranslations('Menu');
  const detailsText = locale === 'en' ? message.en : message.jp;
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("about")}
      <div className='details'>
        {detailsText}
      </div>
      <MDEditor
        className='w-full'
        value={value}
        onChange={setValue}
      />
      {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
    </main>


  )
}
