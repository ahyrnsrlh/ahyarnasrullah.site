"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  // Detect current locale from pathname
  const pathSegments = pathname.split('/');
  const currentLocale = pathSegments[1] === 'id' ? 'id' : 'en';

  // Static translations (tidak menggunakan useTranslations)
  const localeLabels = {
    en: "English",
    id: "Indonesia",
    label: "Language"
  };

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      // Replace the locale in the current pathname
      const segments = pathname.split('/');
      if (segments[1] === 'en' || segments[1] === 'id') {
        segments[1] = newLocale;
      } else {
        // If no locale in URL, add it
        segments.splice(1, 0, newLocale);
      }
      const newPathname = segments.join('/');
      router.push(newPathname);
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
