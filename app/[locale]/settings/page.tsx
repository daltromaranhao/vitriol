"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { User, Lock, Bell, Globe, Moon, Sun, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const t = useTranslations('settings');
  const tCommon = useTranslations('common');
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: t('profile'), icon: User },
    { id: "account", label: t('account'), icon: Shield },
    { id: "privacy", label: t('privacy'), icon: Lock },
    { id: "notifications", label: t('notifications'), icon: Bell },
    { id: "language", label: t('languageTheme'), icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">{t('title')}</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                          activeTab === tab.id
                            ? "bg-accent text-white"
                            : "hover:bg-accent/10"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="md:col-span-3 space-y-6">
            {activeTab === "profile" && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar fallback="JS" size="xl" />
                      <Button variant="outline" size="sm">Change Photo</Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input defaultValue="Smith" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Profession</label>
                      <Input defaultValue="Senior Business Development Manager" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Bio</label>
                      <textarea
                        className="w-full min-h-24 rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-none"
                        defaultValue="Experienced professional with 15+ years in international business development."
                      />
                    </div>
                    <Button variant="accent">{tCommon('save')}</Button>
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === "account" && (
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" defaultValue="john.smith@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Current Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">New Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                  <Button variant="accent">Update Password</Button>
                </CardContent>
              </Card>
            )}

            {activeTab === "privacy" && (
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Control your privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Who can see your profile</p>
                    </div>
                    <select className="px-4 py-2 rounded-lg border border-border bg-card">
                      <option>Everyone</option>
                      <option>Connections Only</option>
                      <option>Private</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Location</p>
                      <p className="text-sm text-muted-foreground">Display your location on profile</p>
                    </div>
                    <Button variant="outline" size="sm">Enabled</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Connection Requests</p>
                      <p className="text-sm text-muted-foreground">Who can send you requests</p>
                    </div>
                    <Button variant="outline" size="sm">Everyone</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Choose what updates you receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Connection Requests", "Messages", "Post Activity", "Network Updates"].map((item) => (
                    <div key={item} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                      <p className="font-medium">{item}</p>
                      <Button variant="accent" size="sm">Enabled</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {activeTab === "language" && (
              <Card>
                <CardHeader>
                  <CardTitle>Language & Theme</CardTitle>
                  <CardDescription>Customize your experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('language')}</label>
                    <select className="w-full px-4 py-2 rounded-lg border border-border bg-card">
                      <option>English</option>
                      <option>Português</option>
                      <option>Español</option>
                      <option>Français</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t('theme')}</label>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="gap-2">
                        <Sun className="w-4 h-4" />
                        {t('lightMode')}
                      </Button>
                      <Button variant="accent" className="gap-2">
                        <Moon className="w-4 h-4" />
                        {t('darkMode')}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
