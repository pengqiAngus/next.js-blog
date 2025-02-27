"use client";

import { useTranslations } from "@/hooks/useTranslations";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function HeroSection() {
  const { t } = useTranslations();

    return (
      <section className=" min-h-40 bg-background dark:bg-[#0f0f10] text-foreground dark:text-white">
        <BackgroundBeamsWithCollision>
          <div className="container  mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-black text-center leading-tight tracking-tight">
              {t("home.title")}{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
                {t("home.subtitle")}
              </span>
            </h1>
          </div>
        </BackgroundBeamsWithCollision>
      </section>
    );
}
