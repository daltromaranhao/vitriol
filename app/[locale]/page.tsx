import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Briefcase,
  Lock,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { HeroIllustration } from "@/components/hero-illustration";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('landing');
  const tNav = await getTranslations('nav');
  const tFooter = await getTranslations('footer');

  const features = [
    {
      icon: Globe,
      title: t('features.global.title'),
      description: t('features.global.description'),
    },
    {
      icon: ShieldCheck,
      title: t('features.verified.title'),
      description: t('features.verified.description'),
    },
    {
      icon: Briefcase,
      title: t('features.professional.title'),
      description: t('features.professional.description'),
    },
    {
      icon: Lock,
      title: t('features.private.title'),
      description: t('features.private.description'),
    },
  ];

  const stats = [
    { value: t('stats.countries'), label: t('stats.countriesLabel') },
    { value: t('stats.members'), label: t('stats.membersLabel') },
    { value: t('stats.verified'), label: t('stats.verifiedLabel') },
  ];

  const testimonials = [
    {
      name: "Alexandre Silva",
      role: "CEO, Tech Solutions",
      location: "São Paulo, Brazil",
      content: "This network has opened doors to partnerships I never imagined possible.",
    },
    {
      name: "Marie Dubois",
      role: "Investment Director",
      location: "Paris, France",
      content: "The quality of connections and trust level here is unmatched.",
    },
    {
      name: "Carlos Mendez",
      role: "Entrepreneur",
      location: "Madrid, Spain",
      content: "A truly global community of professionals who understand collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar showFull={false} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl tracking-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-xl text-accent">{t('hero.subtitle')}</p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  {t('hero.tagline')}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={`/${locale}/auth/register`}>
                  <Button variant="accent" size="lg" className="gap-2">
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href={`/${locale}/auth/login`}>
                  <Button variant="outline" size="lg">
                    {t('hero.login')}
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 shadow-2xl flex items-center justify-center overflow-hidden">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Help Network Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
                <HeartHandshake className="w-5 h-5" />
                <span className="font-medium">{t('help.title')}</span>
              </div>
              <h2 className="text-4xl">{t('help.subtitle')}</h2>
              <p className="text-lg text-muted-foreground">
                {t('help.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <HeartHandshake className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="font-medium">{t('help.medical.title')}</div>
                    <div className="text-sm text-muted-foreground">
                      {t('help.medical.description')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="font-medium">{t('help.professional.title')}</div>
                    <div className="text-sm text-muted-foreground">
                      {t('help.professional.description')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-medium">{t('help.global.title')}</div>
                    <div className="text-sm text-muted-foreground">
                      {t('help.global.description')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-2xl font-bold text-accent">{t('help.stats.coverage')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.stats.coverageLabel')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{t('help.stats.response')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.stats.responseLabel')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{t('help.stats.helped')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.stats.helpedLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center">
                    <HeartHandshake className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl">{tNav('helpRequests')}</h3>
                    <p className="text-muted-foreground">{t('help.tagline')}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {t('help.systemDescription')}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-card">
                    <div className="text-lg font-bold text-accent">{t('help.medical.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.medical.subtitle')}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <div className="text-lg font-bold text-accent">{t('help.professional.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.professional.subtitle')}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <div className="text-lg font-bold text-accent">{t('help.legal.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.legal.subtitle')}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card">
                    <div className="text-lg font-bold text-accent">{t('help.travel.title')}</div>
                    <div className="text-sm text-muted-foreground">{t('help.travel.subtitle')}</div>
                  </div>
                </div>
                <Link href={`/${locale}/auth/register`}>
                  <Button variant="accent" className="w-full gap-2">
                    {t('hero.cta')}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t('testimonials.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <CardContent className="p-0 space-y-4">
                  <p className="text-muted-foreground italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('cta.description')}
              </p>
              <Link href={`/${locale}/auth/register`}>
                <Button variant="accent" size="lg" className="gap-2">
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold">Vitriol</span>
              <span className="text-sm text-muted-foreground">{tFooter('copyright')}</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href={`/${locale}/about`} className="hover:text-accent transition-colors">
                {tFooter('about')}
              </Link>
              <Link href={`/${locale}/privacy`} className="hover:text-accent transition-colors">
                {tFooter('privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-accent transition-colors">
                {tFooter('terms')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
