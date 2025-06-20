"use server";

import { cookies } from "next/headers";
import { Locale, defaultLocale } from "@/common/config/i18n";

const COOKIE_NAME = "NEXT_LOCALE";

export const getUserLocale = async () => {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || defaultLocale;
};

// Setting cookies is not supported in server components with next/headers
// export const setUserLocale = async (locale: Locale) => {
//   const cookieStore = cookies();
//   cookieStore.set(COOKIE_NAME, locale);
// };
