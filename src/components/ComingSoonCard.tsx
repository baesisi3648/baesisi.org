import { useTranslations } from "next-intl";

export function ComingSoonCard() {
  const t = useTranslations("projects");
  return (
    <div className="h-full rounded-2xl border border-dashed border-border p-7 flex items-center justify-center min-h-[180px]">
      <div className="text-center">
        <h3 className="text-xl font-bold tracking-tight text-muted">
          {t("coming_soon_title")}
        </h3>
        <p className="mt-2 text-sm text-muted">{t("coming_soon_desc")}</p>
      </div>
    </div>
  );
}
