"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Briefcase, Heart, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    profession: "",
    bio: "",
    interests: [] as string[],
  });

  const totalSteps = 4;

  const interests = [
    "Technology", "Finance", "Real Estate", "Healthcare", "Education",
    "Manufacturing", "Consulting", "Legal", "Architecture", "Marketing"
  ];

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else router.push("/dashboard");
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar showFull={false} />
      <div className="flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
              <span className="text-sm text-muted-foreground">{step} / {totalSteps}</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl">Basic Information</h3>
                    <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm mb-2 block">First Name</label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Last Name</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl">Location</h3>
                    <p className="text-sm text-muted-foreground">Where are you based?</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm mb-2 block">Country</label>
                    <Input
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">City</label>
                    <Input
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="New York"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Professional Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl">Professional Details</h3>
                    <p className="text-sm text-muted-foreground">What do you do?</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm mb-2 block">Profession</label>
                    <Input
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      placeholder="Business Development Manager"
                    />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Biography</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      placeholder="Tell us about your professional background..."
                      className="w-full min-h-32 rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Interests */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl">Interests</h3>
                    <p className="text-sm text-muted-foreground">What are you interested in?</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={cn(
                        "px-4 py-2 rounded-lg border transition-all",
                        formData.interests.includes(interest)
                          ? "bg-accent text-white border-accent"
                          : "border-border hover:border-accent"
                      )}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <Button
                variant="accent"
                onClick={handleNext}
                className="gap-2"
              >
                {step === totalSteps ? "Complete" : "Next"}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
