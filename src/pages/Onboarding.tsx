import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui/Card";
import { Select } from "../components/ui/Select";
import { Textarea } from "../components/ui/Textarea";
import React, { useState } from "react";
import { ArrowRight, Bubbles } from "lucide-react";
import { Button } from "../components/ui/Button";
import type { UserProfile } from "../types";

const goalOptions = [
  { value: "bulk", label: "Build Muscle (Bulk)" },
  { value: "cut", label: "Lose Fat (Cut)" },
  { value: "recomp", label: "Body Recomposition" },
  { value: "strength", label: "Build Strength" },
  { value: "endurance", label: "Improve Endurance" },
];

const experienceOptions = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (1-3 years)" },
  { value: "advanced", label: "Advanced (3+ years)" },
];

const daysOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "4", label: "4 days per week" },
  { value: "5", label: "5 days per week" },
  { value: "6", label: "6 days per week" },
];

const sessionOptions = [
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "90", label: "90 minutes" },
];

const equipmentOptions = [
  { value: "full_gym", label: "Full Gym Access" },
  { value: "home", label: "Home Gym" },
  { value: "dumbbells", label: "Dumbbells Only" },
];

const splitOptions = [
  { value: "full_body", label: "Full Body" },
  { value: "upper_lower", label: "Upper/Lower Split" },
  { value: "ppl", label: "Push/Pull/Legs" },
  { value: "custom", label: "Let AI Decide" },
];

export default function Onboarding() {
  const { user, saveProfile } = useAuth();
  const [formData, setFormData] = useState({
    goal: "bulk",
    experience: "intermediate",
    daysPerWeek: "4",
    sessionLength: "60",
    equipment: "full_gym",
    injuries: "",
    preferredSplit: "upper_lower",
  });
  function updateForm(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }
  async function handleQuestionnaire(e: React.SubmitEvent) {
    e.preventDefault();
    const profile: Omit<UserProfile, "userId" | "updatedAt"> = {
      goal: formData.goal as UserProfile["goal"],
      experience: formData.experience as UserProfile["experience"],
      daysPerWeek: parseInt(formData.daysPerWeek),
      sessionLength: parseInt(formData.sessionLength),
      equipment: formData.equipment as UserProfile["equipment"],
      injuries: formData.injuries || undefined,
      preferredSplit: formData.preferredSplit as UserProfile["preferredSplit"],
    };
    saveProfile(profile);
  }
  if (!user) {
    return <RedirectToSignIn />;
  }
  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          {/* Progress Indicator */}
          {/* Step1 : Questionare */}
          <Card variant="bordered">
            <h1 className="text-2xl font-bold mb-2">
              Tell us more about yourself
            </h1>
            <p className="text-[var(---color-muted)] mb-6">
              Help us create the perfect plan for you{" "}
            </p>
            <form onSubmit={handleQuestionnaire} className="space-y-5">
              <Select
                id="goal"
                label="What's your primary goal"
                options={goalOptions}
                value={formData.goal}
                onChange={(e) => updateForm("goal", e.target.value)}
              ></Select>
              <Select
                id="experience"
                label="What's your experience"
                options={experienceOptions}
                value={formData.experience}
                onChange={(e) => updateForm("experience", e.target.value)}
              ></Select>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  id="daysPerWeek"
                  label="How many days you exercise per week"
                  options={daysOptions}
                  value={formData.daysPerWeek}
                  onChange={(e) => updateForm("daysPerWeek", e.target.value)}
                ></Select>
                <Select
                  id="sessionLength"
                  label="What is your session's duration"
                  options={sessionOptions}
                  value={formData.sessionLength}
                  onChange={(e) => updateForm("sessionLength", e.target.value)}
                ></Select>
              </div>
              <Textarea
                id="injuries"
                label="Any injuries or limitations"
                placeholder="E.g. Lower Back issue, Shoulder Impingement..."
                rows={3}
                value={formData.injuries}
                onChange={(e) => updateForm("injuries", e.target.value)}
              />
              <div className="flex gap-3 pt-2">
                <Button type="submit" className="flex-1 gap-2">
                  Generate My Plan <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </Card>
          {/* Step2 : Generating */}
        </div>
      </div>
    </SignedIn>
  );
}
