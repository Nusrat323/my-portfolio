import React, { useState } from "react";
import { cn } from "../lib/utils";
import { Code2, Server, Wrench, Bot } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  

  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "Express", level: 35, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },
  { name: "Firebase", level: 55, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Photoshop", level: 60, category: "tools" },
  { name: "Canva", level: 85, category: "tools" },

  // GHL + Business Growth 
{ name: "GoHighLevel CRM Setup", level: 90, category: "automation" },
{ name: "Sales Funnel & Landing Page Design", level: 90, category: "automation" },
{ name: "Lead Management & CRM Automation", level: 85, category: "automation" },
{ name: "Email & SMS Marketing Workflows", level: 85, category: "automation" },
{ name: "WhatsApp Automation & Bot Setup", level: 80, category: "automation" },
{ name: "AI Chatbot Integration", level: 80, category: "automation" },
{ name: "Stripe Payment Integration", level: 80, category: "automation" },
{ name: "Facebook / Instagram Ads Management", level: 85, category: "automation" },
];

const categories = [
  { key: "all", label: "All", icon: null },
  { key: "frontend", label: "Frontend", icon: Code2 },
  { key: "backend", label: "Backend", icon: Server },
  { key: "tools", label: "Tools", icon: Wrench },
  { key: "automation", label: "Business Automation & Growth", icon: Bot },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Frontend Development + GoHighLevel CRM Automation + AI Chatbot & Payment Systems
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2 rounded-full text-sm transition-all duration-300 border",
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-background/60 hover:bg-background border-primary/20 hover:border-primary/50"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-card border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg group-hover:text-primary transition">
                  {skill.name}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-2 bg-secondary/40 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-primary rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-primary/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;