import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

const frontendProjects = [
  {
    id: 1,
    title: "FluxFame AI Automation Agency Website",
    description:
      "A modern agency website featuring premium glassmorphism UI, responsive layouts, smooth animations, reusable components, and a conversion-focused user experience.",
    image: "/projects/project8.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Custom CSS",
      "Responsive Design",
      "Swiper.js"
    ],
    demoUrl: "https://www.fluxfame.site",
    githubUrl: "https://github.com/Nusrat323/fluxfame"
  },
  {
    id: 2,
    title: "Photography Website with Admin Panel",
    description:
      "A professional photography portfolio website with an admin dashboard to manage galleries and content. Includes smooth animations and a stylish, mobile-friendly UI.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Admin Panel", "Node.js", "Responsive UI/UX"],
    demoUrl: "https://labidkhan.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/labid-frontend",
    
  },
  {
    id: 3,
    title: "Restaurant Frontend Website",
    description:
      "A modern, fully responsive multi-page restaurant website built using React and Tailwind CSS. Designed with a clean UI, elegant layout, and optimized performance.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Responsive UI/UX"],
    demoUrl: "https://aquamarine-unicorn-6414d3.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/restaurant",
  },
  {
    id: 4,
    title: "Plant Care Website",
    description:
      "A small full-stack plant-care web application featuring plant listings, an upload page, backend APIs, Firebase authentication, and the ability to manage your own uploaded plants.",
    image: "/projects/project5.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", ],
    demoUrl: "https://green-aura-f6427.web.app/",
    githubUrl: "https://github.com/Nusrat323/assignment10",
  },
  {
    id: 5,
    title: "Azaan – Call to Prayer",
    description:
      "A frontend Islamic web application that plays live 5-waqt Azaan automatically based on the user’s country and prayer times. Built with a peaceful, calming UI, smooth animations, daily short duas, and Surah audio playback. Fully responsive and optimized for all devices to provide a serene user experience.",
    image: "/projects/project4.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Islamic Audio",
      "Responsive Design"
    ],
    demoUrl: "https://azaan1.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/azaan"
  },
      {
        id: 6,
        title: "E-commerce Frontend Website",
        description:
          "A clean and responsive e-commerce website interface featuring product listings, filtering, shopping cart, checkout page, and dynamic UI components.",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind", "E-commerce UI/UX"],
        demoUrl: "https://gentlify-d55df.web.app/",
        githubUrl: "https://github.com/Nusrat323/menswear",
      },
      
      
      {
        id: 7,
        title: "SwiftCart E-commerce Website",
        description:
          "A responsive frontend e-commerce website with dynamic product fetching from Fake Store API, interactive product modals, category filters, and a cart sidebar. Features multiple pages including Home, Products, About, and Contact with responsive design.",
        image: "/projects/project6.png",
        tags: ["HTML", "Tailwind CSS", "JavaScript", "API Integration", "Responsive Design"],
        demoUrl: "https://swiftcart01.netlify.app/",
        githubUrl: "https://github.com/Nusrat323/swiftcart",
      },
      {
        id: 8,
        title: "BeatWave Music Player",
        description:
          "A modern, responsive web-based music player built with HTML, CSS, and JavaScript. Features include play/pause, next/previous track, shuffle and repeat, dynamic playlist, volume control, and a sleek glassmorphic UI. The background dynamically adapts to the currently playing song's album cover for a premium experience.",
        image: "/projects/project7.png",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Audio Player", "UI/UX"],
        demoUrl: "https://beatwave01.netlify.app/",
        githubUrl: "https://github.com/Nusrat323/CodeAlpha_music-player"
      },
      
];

const automationProjects = [
  {
    id: 1,
    title: "DentalFlow - Full Dental Clinic Automation System",
    description:
      "A complete GoHighLevel automation system built for a dental clinic, including landing pages, booking flow, CRM setup, AI receptionist, and advanced patient re-engagement workflows to increase bookings and reduce no-shows.",
    image: "/projects/dentalflow.png",
    tags: [
      "GoHighLevel",
      "CRM Automation",
      "Funnels",
      "AI Receptionist",
      "Email/SMS Automation",
      "Appointment System"
    ],
    demoUrl: "https://dental.fluxfame.site/"
  },
  {
    id: 2,
    title: "YourHome - Real Estate CRM & Automation System",
    description:
      "A complete GoHighLevel real estate automation system designed for agencies to capture, qualify, and convert leads efficiently through AI-driven workflows, automated follow-ups, and smart appointment management.",
    image: "/projects/yourhome.png",
    tags: [
      "GoHighLevel",
      "Real Estate CRM",
      "Lead Automation",
      "AI Chat Assistant",
      "Funnels",
      "Email/SMS Automation",
      "Appointment Scheduling",
      "Pipeline Management"
    ],
  
    features: [
      "Custom Real Estate Landing Page",
      "Lead Capture & Qualification System",
      "AI Live Chat Assistant",
      "Automated Lead Nurturing",
      "Calendar & Property Viewing Scheduling",
      "AI Appointment Booking & Rescheduling",
      "Appointment Confirmation & Reminder Workflows",
      "Opportunity Pipeline Management",
      "Lead Tagging & Segmentation",
      "No-Show Recovery Automation",
      "Email Marketing Automation",
      "CRM Contact Management",
      "Trigger Link & Workflow Automation",
      "Post-Viewing Follow-Up System"
    ],
  
    demoUrl: "https://home.fluxfame.site/"
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const data =
    activeTab === "frontend" ? frontendProjects : automationProjects;

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10">
          Showcasing my frontend development work and business automation systems.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === "frontend"
                ? "bg-primary text-white"
                : "bg-transparent border-primary/30"
            }`}
          >
            Frontend Projects
          </button>

          <button
            onClick={() => setActiveTab("automation")}
            className={`px-5 py-2 rounded-full border transition ${
              activeTab === "automation"
                ? "bg-primary text-white"
                : "bg-transparent border-primary/30"
            }`}
          >
            Automation Projects
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank">
                      <ExternalLink size={18} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank">
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button flex items-center mx-auto gap-2 w-fit"
            href="https://github.com/Nusrat323"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;