import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, HeartHandshake, MapPin, Clock, MessageCircle } from "lucide-react";

export default async function HelpRequestsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('helpRequests');

  const categories = [
    t('categories.all'), t('categories.medical'), t('categories.professional'),
    t('categories.housing'), t('categories.travel'), t('categories.legal'), t('categories.other'),
  ];

  const helpRequests = [
    {
      id: 1,
      author: "Carlos Mendez",
      location: "Madrid, Spain",
      category: "Professional",
      title: "Looking for business mentor in tech industry",
      description: "Seeking guidance from experienced entrepreneurs in the technology sector for my startup venture.",
      time: "2 hours ago",
      responses: 5,
    },
    {
      id: 2,
      author: "Yuki Tanaka",
      location: "Tokyo, Japan",
      category: "Medical",
      title: "Healthcare recommendations needed in London",
      description: "Traveling to London next month and need recommendations for reliable healthcare facilities.",
      time: "5 hours ago",
      responses: 12,
    },
    {
      id: 3,
      author: "Emma Johnson",
      location: "London, UK",
      category: "Travel",
      title: "Local contact needed in São Paulo",
      description: "First time visiting Brazil for business. Would appreciate local insights and recommendations.",
      time: "1 day ago",
      responses: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">{t('title')}</h1>
          <p className="text-muted-foreground">Global support network for members in need</p>
        </div>

        {/* Info Banner */}
        <Card className="mb-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <HeartHandshake className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">About Help Requests</h3>
                <p className="text-sm text-muted-foreground">
                  All help requests are reviewed and approved by administrators before being visible to the community. 
                  This ensures quality and prevents abuse of the system.
                </p>
              </div>
              <Button variant="accent">{t('createRequest')}</Button>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search help requests..."
                  className="pl-10"
                />
              </div>
              <select className="px-4 py-2 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                {categories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Help Requests List */}
        <div className="space-y-6">
          {helpRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar fallback={request.author.slice(0, 2)} size="md" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{request.author}</h3>
                      <Badge variant="secondary" className="text-xs">{request.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {request.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {request.time}
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2">{request.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{request.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageCircle className="w-4 h-4" />
                    <span>{request.responses} {t('responses')}</span>
                  </div>
                  <Button variant="accent" size="sm">{t('offerHelp')}</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">Load More Requests</Button>
        </div>
      </main>
    </div>
  );
}
