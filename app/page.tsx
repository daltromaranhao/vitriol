import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  Briefcase,
  Lock,
  ArrowRight,
  CheckCircle,
  Users,
  MessageSquare,
  Map,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";

export default function Home() {
  const features = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with verified professionals across 150+ countries worldwide.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Members",
      description: "Every member goes through our rigorous verification process.",
    },
    {
      icon: Briefcase,
      title: "Professional Focus",
      description: "Build meaningful business relationships and collaborations.",
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "Your data and conversations are protected with enterprise-grade security.",
    },
  ];

  const stats = [
    { value: "150+", label: "Countries" },
    { value: "50K+", label: "Members" },
    { value: "98%", label: "Satisfaction" },
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
              <Badge variant="accent" className="text-sm px-4 py-1">
                Premium Global Network
              </Badge>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  Connect with{" "}
                  <span className="text-accent">Verified Professionals</span>{" "}
                  Worldwide
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  Join an exclusive network of trusted business leaders, entrepreneurs, and professionals building meaningful connections across borders.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/register">
                  <Button variant="accent" size="lg" className="gap-2">
                    Join the Brotherhood
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" size="lg">
                    Sign In
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

            {/* Hero Image Placeholder */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 flex items-center justify-center">
                <Users className="w-48 h-48 text-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Join Vitriol?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of a truly global professional network built on trust and verification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-border/50 hover:border-accent/50 transition-all">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Expand Your Network?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who trust Vitriol to connect, collaborate, and grow their businesses globally.
              </p>
              <Link href="/auth/register">
                <Button variant="accent" size="lg" className="gap-2">
                  Get Started Now
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
              <span className="text-sm text-muted-foreground">© 2024 Global Brotherhood</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
