import { getTranslations, setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, MessageSquare, ThumbsUp, CheckCircle, Bell } from "lucide-react";

export default async function NotificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("notifications");
  const notifications = [
    {
      id: 1,
      type: "connection",
      user: "Maria Santos",
      action: "accepted your connection request",
      time: "5 minutes ago",
      icon: UserPlus,
      read: false,
    },
    {
      id: 2,
      type: "message",
      user: "David Chen",
      action: "sent you a message",
      time: "1 hour ago",
      icon: MessageSquare,
      read: false,
    },
    {
      id: 3,
      type: "like",
      user: "Sophie Martin",
      action: "liked your post",
      time: "3 hours ago",
      icon: ThumbsUp,
      read: true,
    },
    {
      id: 4,
      type: "verification",
      user: "Vitriol",
      action: "Your profile has been verified",
      time: "1 day ago",
      icon: CheckCircle,
      read: true,
    },
    {
      id: 5,
      type: "connection",
      user: "Alexandre Silva",
      action: "wants to connect with you",
      time: "2 days ago",
      icon: UserPlus,
      read: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl mb-2">{t('title')}</h1>
            <p className="text-muted-foreground">Stay updated with your network activity</p>
          </div>
          <Button variant="outline" size="sm">{t('markAllRead')}</Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-6 flex items-start gap-4 transition-colors ${
                      !notification.read ? "bg-accent/5" : "hover:bg-accent/5"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-semibold">{notification.user}</span>{" "}
                        <span className="text-muted-foreground">{notification.action}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Empty state if no notifications */}
        {notifications.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t('noNotifications')}</h3>
              <p className="text-muted-foreground">You're all caught up!</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
