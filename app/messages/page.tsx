"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Search, Send, MoreVertical, Phone, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 0,
      name: "Maria Santos",
      lastMessage: "That sounds great! Let me know when you arrive.",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      id: 1,
      name: "David Chen",
      lastMessage: "Thanks for the introduction!",
      time: "1h ago",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: "Sophie Martin",
      lastMessage: "I reviewed the documents you sent.",
      time: "3h ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: "Alexandre Silva",
      lastMessage: "Looking forward to our meeting next week.",
      time: "1d ago",
      unread: 0,
      online: false,
    },
  ];

  const currentMessages = [
    {
      id: 1,
      sender: "Maria Santos",
      text: "Hi! I wanted to discuss the partnership opportunity we talked about.",
      time: "10:30 AM",
      isMine: false,
    },
    {
      id: 2,
      sender: "You",
      text: "Hi Maria! Yes, I'd love to hear more about it.",
      time: "10:32 AM",
      isMine: true,
    },
    {
      id: 3,
      sender: "Maria Santos",
      text: "Great! I think there's a lot of potential for collaboration between our companies.",
      time: "10:33 AM",
      isMine: false,
    },
    {
      id: 4,
      sender: "You",
      text: "I agree. Are you available for a call next week?",
      time: "10:35 AM",
      isMine: true,
    },
    {
      id: 5,
      sender: "Maria Santos",
      text: "That sounds great! Let me know when you arrive.",
      time: "10:36 AM",
      isMine: false,
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-4xl mb-2">Messages</h1>
          <p className="text-muted-foreground">Connect with your network</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 overflow-hidden">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-10" />
              </div>
            </div>
            <div className="overflow-y-auto h-full">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv.id)}
                  className={cn(
                    "w-full p-4 flex items-start gap-3 hover:bg-accent/5 transition-colors border-b border-border/50",
                    selectedChat === conv.id && "bg-accent/10"
                  )}
                >
                  <div className="relative">
                    <Avatar
                      fallback={conv.name.slice(0, 2)}
                      size="md"
                      online={conv.online}
                    />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium truncate">{conv.name}</h3>
                      <span className="text-xs text-muted-foreground">{conv.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conv.lastMessage}
                    </p>
                  </div>
                  {conv.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs text-white">
                      {conv.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar
                  fallback={conversations[selectedChat].name.slice(0, 2)}
                  size="md"
                  online={conversations[selectedChat].online}
                />
                <div>
                  <h3 className="font-semibold">{conversations[selectedChat].name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {conversations[selectedChat].online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {currentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex",
                    msg.isMine ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-lg p-3",
                      msg.isMine
                        ? "bg-accent text-white"
                        : "bg-card border border-border"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={cn(
                        "text-xs mt-1",
                        msg.isMine ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button
                  variant="accent"
                  size="icon"
                  onClick={handleSendMessage}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
