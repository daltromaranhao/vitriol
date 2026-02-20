"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon, CheckCircle } from "lucide-react";

export default function FeedPage() {
  const [postContent, setPostContent] = useState("");

  const posts = [
    {
      id: 1,
      author: "Maria Santos",
      profession: "Investment Director",
      location: "Lisbon, Portugal",
      time: "2 hours ago",
      content: "Excited to announce that our firm has just completed a successful partnership with emerging markets in Southeast Asia. Looking forward to new opportunities! 🌏",
      likes: 47,
      comments: 12,
      shares: 5,
      verified: true,
    },
    {
      id: 2,
      author: "David Chen",
      profession: "Tech Entrepreneur",
      location: "Singapore",
      time: "5 hours ago",
      content: "Just returned from the Global Innovation Summit. Amazing to see how technology is connecting professionals worldwide. The future of networking is here.",
      likes: 93,
      comments: 28,
      shares: 15,
      verified: true,
    },
    {
      id: 3,
      author: "Sophie Martin",
      profession: "Legal Counsel",
      location: "Paris, France",
      time: "1 day ago",
      content: "Proud to share insights from our latest legal framework for international partnerships. Feel free to connect if you are interested in cross-border business law.",
      likes: 56,
      comments: 19,
      shares: 8,
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl mb-2">Community Feed</h1>
          <p className="text-muted-foreground">Share updates and connect with your network</p>
        </div>

        {/* Post Composer */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Avatar fallback="JS" size="md" />
              <div className="flex-1">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full min-h-24 rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-none"
                />
                <div className="flex items-center justify-between mt-4">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ImageIcon className="w-4 h-4" />
                    Add Image
                  </Button>
                  <Button variant="accent" size="sm">Post</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feed Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <Avatar fallback={post.author.slice(0, 2)} size="md" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{post.author}</h3>
                        {post.verified && <CheckCircle className="w-4 h-4 text-accent" />}
                      </div>
                      <p className="text-sm text-muted-foreground">{post.profession}</p>
                      <p className="text-xs text-accent">{post.location}</p>
                      <p className="text-xs text-muted-foreground mt-1">{post.time}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm mb-4 leading-relaxed">{post.content}</p>
                <div className="flex items-center gap-6 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-accent">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-accent">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-accent">
                    <Share2 className="w-4 h-4" />
                    <span>{post.shares}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
