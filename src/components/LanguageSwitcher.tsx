"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "ko" ? "en" : "ko";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="font-mono text-xs hover:text-foreground transition-colors"
      aria-label="Toggle language"
    >
      {locale === "ko" ? "EN" : "KO"}
    </button>
  );
}
