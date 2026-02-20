"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Map,
  MessageSquare,
  Settings,
  Globe,
  Link2,
  HeartHandshake,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar } from "./ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { VitriolLogo } from "./vitriol-logo";
import { cn } from "@/lib/utils";

interface NavbarProps {
  showFull?: boolean;
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export function Navbar({ showFull = true, user }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/members", icon: Users, label: "Members" },
    { path: "/map", icon: Map, label: "Map" },
    { path: "/messages", icon: MessageSquare, label: "Messages" },
    { path: "/connections", icon: Link2, label: "Connections" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 border-b border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <VitriolLogo size={40} className="text-accent" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight">Vitriol</span>
              <span className="text-xs text-muted-foreground">Global Brotherhood</span>
            </div>
          </Link>

          {/* Center Navigation */}
          {showFull && user && (
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn("gap-2", isActive && "bg-accent/20 text-accent")}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {user ? (
              <Link href="/settings">
                <Avatar
                  src={user.image || undefined}
                  alt={user.name || undefined}
                  fallback={user.name?.slice(0, 2).toUpperCase()}
                  size="md"
                  className="cursor-pointer hover:ring-2 hover:ring-accent transition-all"
                />
              </Link>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="accent" size="sm">
                    Join Now
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
