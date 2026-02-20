import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users } from "lucide-react";

export default function MapPage() {
  const regions = [
    { name: "North America", members: 12500, color: "bg-blue-500" },
    { name: "South America", members: 4200, color: "bg-green-500" },
    { name: "Europe", members: 18300, color: "bg-purple-500" },
    { name: "Asia", members: 10800, color: "bg-red-500" },
    { name: "Africa", members: 2100, color: "bg-yellow-500" },
    { name: "Oceania", members: 2100, color: "bg-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Global Network Map</h1>
          <p className="text-muted-foreground">
            Explore our global community of verified professionals
          </p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
              <MapPin className="w-32 h-32 text-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xl font-semibold mb-2">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <Card key={region.name} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${region.color}`} />
                    <h3 className="font-semibold">{region.name}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-2xl font-bold">{region.members.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <Card className="mt-8">
          <CardContent className="p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">150+</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">50K+</p>
                <p className="text-sm text-muted-foreground">Total Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Verified</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Global Coverage</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
