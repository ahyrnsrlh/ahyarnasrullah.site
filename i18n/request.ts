import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { defaultLocale } from "@/common/config/i18n";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get("X-NEXT-INTL-LOCALE") || defaultLocale;

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
