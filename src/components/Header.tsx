import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Avatar } from "./Avatar";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("nav");
  return (
    <header className="w-full px-6 md:px-12 lg:px-20 pt-8 pb-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2.5">
        <Avatar size={36} />
        <span className="text-lg font-bold tracking-tight">baesisi</span>
      </Link>
      <nav className="flex items-center gap-7 text-sm font-medium text-muted">
        <Link
          href="/projects"
          className="hover:text-foreground transition-colors"
        >
          {t("projects")}
        </Link>
        <Link
          href="/about"
          className="hover:text-foreground transition-colors"
        >
          {t("about")}
        </Link>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
