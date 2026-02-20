import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  const sections = [
    "collection", "use", "sharing", "security", "cookies", "rights", "contact",
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="mb-12">
          <h1 className="text-4xl mb-3">{t("title")}</h1>
          <p className="text-muted-foreground">{t("lastUpdated")}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-12">{t("intro")}</p>

        <div className="space-y-12">
          {sections.map((key) => (
            <section key={key} className="space-y-3">
              <h2 className="text-xl text-accent border-b border-border/50 pb-2">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(`sections.${key}.content`)}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-card border border-border/50">
          <h2 className="text-lg mb-2">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-sm">{t("contact.description")}</p>
          <p className="text-accent text-sm mt-2">privacy@vitriol.global</p>
        </div>
      </div>

      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © 2026 Vitriol — Global Brotherhood
      </footer>
    </div>
  );
}
