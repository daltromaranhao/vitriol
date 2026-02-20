import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, CheckCircle } from "lucide-react";

export default async function MembersDirectoryPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const members = [
    {
      name: "Maria Santos",
      profession: "Investment Director",
      location: "Lisbon, Portugal",
      verified: true,
      interests: ["Finance", "Real Estate"],
    },
    {
      name: "David Chen",
      profession: "Tech Entrepreneur",
      location: "Singapore",
      verified: true,
      interests: ["Technology", "Healthcare"],
    },
    {
      name: "Sophie Martin",
      profession: "Legal Counsel",
      location: "Paris, France",
      verified: true,
      interests: ["Legal", "Consulting"],
    },
    {
      name: "Alexandre Silva",
      profession: "CEO, Tech Solutions",
      location: "São Paulo, Brazil",
      verified: true,
      interests: ["Technology", "Manufacturing"],
    },
    {
      name: "Emma Johnson",
      profession: "Marketing Director",
      location: "London, United Kingdom",
      verified: true,
      interests: ["Marketing", "Education"],
    },
    {
      name: "Carlos Mendez",
      profession: "Entrepreneur",
      location: "Madrid, Spain",
      verified: true,
      interests: ["Real Estate", "Architecture"],
    },
    {
      name: "Yuki Tanaka",
      profession: "Financial Advisor",
      location: "Tokyo, Japan",
      verified: true,
      interests: ["Finance", "Consulting"],
    },
    {
      name: "Michael Schmidt",
      profession: "Innovation Director",
      location: "Berlin, Germany",
      verified: false,
      interests: ["Technology", "Healthcare"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={session.user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Member Directory</h1>
          <p className="text-muted-foreground">
            Discover and connect with verified professionals worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search members..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
                <select className="px-4 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Sort by</option>
                  <option>Relevance</option>
                  <option>Newest</option>
                  <option>Name</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all group">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-col items-center text-center">
                  <Avatar
                    fallback={member.name.slice(0, 2).toUpperCase()}
                    size="xl"
                    className="mb-3"
                  />

                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="font-semibold">{member.name}</h3>
                      {member.verified && (
                        <CheckCircle className="w-4 h-4 text-accent" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{member.profession}</p>
                    <div className="flex items-center justify-center gap-1 text-xs text-accent">
                      <MapPin className="w-3 h-3" />
                      {member.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.interests.map((interest, idx) => (
                      <Badge key={idx} variant="default" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 w-full">
                    <Button variant="accent" size="sm" className="flex-1">
                      Connect
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Members
          </Button>
        </div>
      </main>
    </div>
  );
}
