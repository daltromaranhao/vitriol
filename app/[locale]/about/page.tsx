import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { VitriolLogo } from "@/components/vitriol-logo";
import { Shield, Globe, HeartHandshake, Users, Star, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const values = [
    { icon: Shield, key: "brotherhood" },
    { icon: Globe, key: "global" },
    { icon: HeartHandshake, key: "solidarity" },
    { icon: Lock, key: "integrity" },
    { icon: Users, key: "inclusion" },
    { icon: Star, key: "excellence" },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-6">
            <VitriolLogo size={72} className="text-accent" />
          </div>
          <h1 className="text-5xl mb-4">{t("title")}</h1>
          <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">{t("mission.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("mission.description")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-xl text-accent">{t("vision.title")}</h3>
                <p className="text-muted-foreground">{t("vision.description")}</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 space-y-3">
                <h3 className="text-xl text-accent">{t("purpose.title")}</h3>
                <p className="text-muted-foreground">{t("purpose.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl text-center mb-8">{t("story.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("story.p1")}</p>
          <p className="text-muted-foreground leading-relaxed">{t("story.p2")}</p>
          <p className="text-muted-foreground leading-relaxed">{t("story.p3")}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl text-center mb-12">{t("values.title")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, key }) => (
              <Card key={key} className="p-6 hover:border-accent/40 transition-colors">
                <CardContent className="p-0 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg">{t(`values.${key}.title` as never)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`values.${key}.description` as never)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {(["countries", "members", "years", "requests"] as const).map((key) => (
              <div key={key} className="space-y-2">
                <div className="text-4xl text-accent">{t(`stats.${key}.value`)}</div>
                <div className="text-sm text-muted-foreground">{t(`stats.${key}.label`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        © 2026 Vitriol — Global Brotherhood
      </footer>
    </div>
  );
}
