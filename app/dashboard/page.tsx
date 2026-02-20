import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  MapPin,
  MessageSquare,
  TrendingUp,
  Globe,
  UserPlus,
  CheckCircle,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  const stats = [
    {
      title: "Total Connections",
      value: "48",
      change: "+12%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Network Reach",
      value: "23 Countries",
      change: "+3",
      icon: Globe,
      trend: "up",
    },
    {
      title: "Active Conversations",
      value: "8",
      change: "2 new",
      icon: MessageSquare,
      trend: "up",
    },
    {
      title: "Profile Views",
      value: "124",
      change: "+24%",
      icon: TrendingUp,
      trend: "up",
    },
  ];

  const suggestedConnections = [
    {
      name: "Michael Chen",
      title: "CEO at TechVentures",
      location: "Singapore",
      verified: true,
    },
    {
      name: "Sarah Williams",
      title: "CFO at Global Finance",
      location: "London, UK",
      verified: true,
    },
    {
      name: "Carlos Rodriguez",
      title: "Founder at StartupHub",
      location: "Madrid, Spain",
      verified: false,
    },
  ];

  const recentActivity = [
    {
      user: "James Anderson",
      action: "accepted your connection request",
      time: "2 hours ago",
    },
    {
      user: "Lisa Wang",
      action: "viewed your profile",
      time: "5 hours ago",
    },
    {
      user: "Robert Miller",
      action: "sent you a message",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar user={session.user} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {session.user?.name || "Guest"}!
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening in your network today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-accent mt-1">{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card/50 hover:bg-accent/5 transition-colors"
                    >
                      <Avatar
                        fallback={activity.user.slice(0, 2).toUpperCase()}
                        size="md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>{" "}
                          <span className="text-muted-foreground">{activity.action}</span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Suggested Connections */}
          <div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Suggested Connections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestedConnections.map((connection, index) => (
                    <div key={index} className="p-4 rounded-lg bg-card/50 space-y-3">
                      <div className="flex items-start gap-3">
                        <Avatar
                          fallback={connection.name.slice(0, 2).toUpperCase()}
                          size="md"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-sm truncate">
                              {connection.name}
                            </h4>
                            {connection.verified && (
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {connection.title}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">{connection.location}</p>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Connect
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
