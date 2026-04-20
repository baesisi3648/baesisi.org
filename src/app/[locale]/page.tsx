import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ComingSoonCard } from "@/components/ComingSoonCard";

export default function Home() {
  const t = useTranslations();
  const liveCount = projects.filter((p) => p.status === "live").length;
  const wipCount = projects.filter((p) => p.status === "wip").length;

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 flex-1">
      <section className="mb-24 md:mb-32 max-w-5xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.035em] leading-[1.02]">
          {t("hero.line1")}
          <br />
          <span className="text-muted">{t("hero.line2")}</span>
        </h1>
        <p className="mt-10 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
          {t("hero.description")}
        </p>
        <div className="mt-10 flex items-center gap-4 text-sm font-mono text-muted">
          <span>
            {liveCount} {t("stats.live")}
          </span>
          <span className="text-border">·</span>
          <span>
            {wipCount} {t("stats.building")}
          </span>
          <span className="text-border">·</span>
          <span>{t("hero.since")}</span>
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
            {t("projects.title")}
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            {t("projects.see_all")}
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} />
            </li>
          ))}
          <li>
            <ComingSoonCard />
          </li>
        </ul>
      </section>
    </main>
  );
}
