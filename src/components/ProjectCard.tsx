import { useTranslations, useLocale } from "next-intl";
import type { Project, Locale } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations("projects");
  const locale = useLocale() as Locale;

  return (
    <a
      href={project.url ?? "#"}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noreferrer" : undefined}
      className="group block h-full rounded-2xl border border-border bg-background hover:border-foreground transition-all hover:-translate-y-0.5 p-7"
    >
      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
        <span
          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border ${
            project.status === "live"
              ? "border-foreground text-foreground"
              : "border-border text-muted"
          }`}
        >
          {project.status === "live" ? t("status_live") : t("status_wip")}
        </span>
      </div>
      <p className="text-[15px] text-muted leading-relaxed min-h-[3rem]">
        {project.oneliner[locale]}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-mono text-muted">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.url && (
          <span className="shrink-0 text-sm font-medium text-muted group-hover:text-foreground transition-colors">
            {t("visit")} →
          </span>
        )}
      </div>
    </a>
  );
}
