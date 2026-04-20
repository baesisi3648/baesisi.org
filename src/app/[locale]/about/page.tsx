import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

const stack = [
  { label: "Frontend", items: "Next.js · React · TypeScript · Tailwind" },
  { label: "Backend", items: "FastAPI · Python · Node.js" },
  { label: "AI", items: "Claude · GPT-4o · LangGraph" },
  { label: "Infra", items: "Vercel · Cloudflare · Firebase · Supabase" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("about_title"),
    description: t("about_description"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageContent />;
}

function AboutPageContent() {
  const t = useTranslations("about");

  return (
    <main className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 flex-1">
      <section className="mb-16 md:mb-20 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-black tracking-[-0.035em] leading-[1.05]">
          {t("title")}
        </h1>
        <p className="mt-8 text-xl md:text-2xl leading-relaxed">{t("intro")}</p>
        <div className="mt-8 space-y-4 text-lg text-muted leading-relaxed">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </section>

      <section className="mb-16 max-w-3xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-6">
          {t("stack_title")}
        </h2>
        <dl className="divide-y divide-border border-y border-border">
          {stack.map((row) => (
            <div
              key={row.label}
              className="py-4 grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4"
            >
              <dt className="text-sm font-mono text-muted uppercase tracking-wider">
                {row.label}
              </dt>
              <dd className="text-sm md:text-base">{row.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="max-w-3xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.18em] mb-6">
          {t("contact_title")}
        </h2>
        <p className="text-base text-muted leading-relaxed mb-3">
          {t("contact_desc")}
        </p>
        <a
          href="https://github.com/baesisi3648"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-base font-medium underline underline-offset-4 decoration-muted hover:decoration-foreground transition-colors"
        >
          github.com/baesisi3648 →
        </a>
      </section>
    </main>
  );
}
