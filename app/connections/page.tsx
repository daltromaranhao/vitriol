"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserPlus, UserCheck, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConnectionsPage() {
  const [activeTab, setActiveTab] = useState<"connections" | "requests" | "suggestions">("connections");

  const myConnections = [
    { name: "Maria Santos", profession: "Investment Director", location: "Lisbon, Portugal", connectedDate: "2 months ago" },
    { name: "David Chen", profession: "Tech Entrepreneur", location: "Singapore", connectedDate: "3 months ago" },
    { name: "Sophie Martin", profession: "Legal Counsel", location: "Paris, France", connectedDate: "1 month ago" },
  ];

  const connectionRequests = [
    { name: "Alex Rivera", profession: "Marketing Director", location: "Madrid, Spain", mutualConnections: 8 },
    { name: "Yuki Tanaka", profession: "Financial Advisor", location: "Tokyo, Japan", mutualConnections: 5 },
  ];

  const suggestions = [
    { name: "Michael Schmidt", profession: "Innovation Director", location: "Berlin, Germany", mutualConnections: 15, reason: "Works in Technology" },
    { name: "Emma Johnson", profession: "Marketing Director", location: "London, UK", mutualConnections: 12, reason: "Based in Europe" },
    { name: "Carlos Mendez", profession: "Entrepreneur", location: "Madrid, Spain", mutualConnections: 10, reason: "Similar interests" },
  ];

  const tabs = [
    { id: "connections" as const, label: "My Connections", icon: Users, count: myConnections.length },
    { id: "requests" as const, label: "Requests", icon: UserCheck, count: connectionRequests.length },
    { id: "suggestions" as const, label: "Suggestions", icon: UserPlus, count: suggestions.length },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Connections</h1>
          <p className="text-muted-foreground">Manage your professional network</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap",
                  activeTab === tab.id
                    ? "bg-accent text-white"
                    : "bg-card hover:bg-accent/10"
                )}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
                <Badge variant={activeTab === tab.id ? "default" : "secondary"} className="text-xs">
                  {tab.count}
                </Badge>
              </button>
            );
          })}
        </div>

        {/* My Connections */}
        {activeTab === "connections" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myConnections.map((conn, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar fallback={conn.name.slice(0, 2)} size="lg" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold mb-1">{conn.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{conn.profession}</p>
                      <div className="flex items-center gap-1 text-xs text-accent mb-2">
                        <MapPin className="w-3 h-3" />
                        {conn.location}
                      </div>
                      <p className="text-xs text-muted-foreground">Connected {conn.connectedDate}</p>
                    </div>
                    <Button variant="outline" size="sm">Message</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Connection Requests */}
        {activeTab === "requests" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {connectionRequests.map((req, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar fallback={req.name.slice(0, 2)} size="lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{req.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{req.profession}</p>
                      <div className="flex items-center gap-1 text-xs text-accent">
                        <MapPin className="w-3 h-3" />
                        {req.location}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{req.mutualConnections} mutual connections</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="accent" size="sm" className="flex-1">Accept</Button>
                    <Button variant="outline" size="sm" className="flex-1">Decline</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Suggestions */}
        {activeTab === "suggestions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.map((sug, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar fallback={sug.name.slice(0, 2)} size="lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{sug.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{sug.profession}</p>
                      <div className="flex items-center gap-1 text-xs text-accent mb-2">
                        <MapPin className="w-3 h-3" />
                        {sug.location}
                      </div>
                      <Badge variant="secondary" className="text-xs mb-2">{sug.reason}</Badge>
                      <p className="text-xs text-muted-foreground">{sug.mutualConnections} mutual connections</p>
                    </div>
                  </div>
                  <Button variant="accent" size="sm" className="w-full">Connect</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
