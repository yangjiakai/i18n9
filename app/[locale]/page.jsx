"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import { getAreas } from "@/api/areaApi";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const fetchAreas = async () => {
      const areas = await getAreas({
        payStyle: "buy",
        liveStyle: "house",
      });
    };

    fetchAreas();
  });

  const t = useTranslations("Menu");
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {t("home")}
      </main>
    </>
  );
}
