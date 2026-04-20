import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ComingSoonCard } from "@/components/ComingSoonCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("projects_title"),
    description: t("projects_description"),
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProjectsPageContent />;
}

function ProjectsPageContent() {
  const t = useTranslations();
  const liveProjects = projects.filter((p) => p.status === "live");
  const wipProjects = projects.filter((p) => p.status === "wip");

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 flex-1">
      <section className="mb-16 md:mb-20 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-black tracking-[-0.035em] leading-[1.05]">
          {t("projects.title")}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          {t("projects.page_subtitle")}
        </p>
      </section>

      {liveProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-8">
            {t("projects.section_live")}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {liveProjects.map((p) => (
              <li key={p.id}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {wipProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-8">
            {t("projects.section_building")}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wipProjects.map((p) => (
              <li key={p.id}>
                <ProjectCard project={p} />
              </li>
            ))}
            <li>
              <ComingSoonCard />
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}
