"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale from pathname with safety check
  const pathSegments = pathname?.split("/") || [];
  const currentLocale = pathSegments[1] === "id" ? "id" : "en";

  // Static translations (tidak menggunakan useTranslations)
  const localeLabels = {
    en: "en",
    id: "id",
    label: "Language",
  };

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return;
    
    startTransition(() => {
      try {
        // Don't handle locale switching for API routes
        if (pathname.includes('/api/')) {
          return;
        }
        
        // Replace the locale in the current pathname
        const segments = pathname.split("/");
        
        if (segments[1] === "en" || segments[1] === "id") {
          segments[1] = newLocale;
        } else {
          // If no locale in URL, add it
          segments.splice(1, 0, newLocale);
        }
        
        const newPathname = segments.join("/");
        
        // Safety check before navigation
        if (newPathname && newPathname !== pathname && !newPathname.includes('/api/')) {
          router.push(newPathname);
        }
      } catch (error) {
        console.error("Locale switch error:", error);
        // Fallback navigation
        router.push(`/${newLocale}`);
      }
    });
  };

  return (
    <LocaleSwitcherSelect
      defaultValue={currentLocale}
      items={[
        {
          value: "en",
          label: localeLabels.en,
        },
        {
          value: "id",
          label: localeLabels.id,
        },
      ]}
      label={localeLabels.label}
      onChange={handleLocaleChange}
      disabled={isPending}
    />
  );
};

export default LocaleSwitcher;
