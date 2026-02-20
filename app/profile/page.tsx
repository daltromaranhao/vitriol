import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Calendar, Users, CheckCircle, Mail, Phone } from "lucide-react";

export default function ProfilePage() {
  const profile = {
    name: "John Smith",
    profession: "Senior Business Development Manager",
    location: "New York, United States",
    bio: "Experienced professional with 15+ years in international business development. Passionate about building meaningful partnerships across borders and fostering global collaboration.",
    memberSince: "January 2024",
    connections: 248,
    verified: true,
    interests: ["Technology", "Finance", "Real Estate", "Healthcare"],
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
  };

  const recentActivity = [
    { action: "Connected with", target: "Maria Santos", time: "2 days ago" },
    { action: "Posted an update", target: "Business Partnership", time: "5 days ago" },
    { action: "Joined", target: "Global Network", time: "1 month ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <Avatar fallback={profile.name.slice(0, 2)} size="xl" className="w-32 h-32" />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{profile.name}</h1>
                  {profile.verified && <CheckCircle className="w-6 h-6 text-accent" />}
                </div>
                <p className="text-lg text-muted-foreground mb-4">{profile.profession}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {profile.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Member since {profile.memberSince}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {profile.connections} connections
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="accent">Edit Profile</Button>
                  <Button variant="outline">Share Profile</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{profile.bio}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, idx) => (
                    <Badge key={idx} variant="secondary">{interest}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="text-muted-foreground">{activity.action}</span>{" "}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm">{profile.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm">{profile.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold">Verified Member</p>
                    <p className="text-xs text-muted-foreground">Identity confirmed</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">View Certificate</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
