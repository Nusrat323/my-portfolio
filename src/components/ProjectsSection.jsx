import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const frontendProjects = [
  {
    id: "frontend-1",
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
    id: "frontend-2",
    title: "Nest&Key - Premium Real Estate Frontend Website",
    description:
      "A fully responsive premium real estate frontend website featuring property listings, detailed property pages, agent profiles, blog pages, saved properties, FAQ, contact, privacy policy, and smooth page transitions. Built with reusable React components, modern UI design, responsive layouts, and interactive animations to deliver a seamless user experience across all devices.",
    image: "/projects/realestate.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "Framer Motion",
      "Lucide React",
      "Component Architecture",
      "Responsive Design",
      "Modern UI/UX"
    ],
    demoUrl: "https://nestandkey1.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/realestate1"
  },
  {
    id: "frontend-3",
    title: "FreshCart - Modern Grocery E-Commerce Frontend Website",
    description:
      "A fully responsive modern grocery e-commerce frontend website featuring product listings, category browsing, product search, product details, shopping cart, secure checkout, Cash on Delivery (COD), order history, order details, user authentication, and a protected admin dashboard. The admin panel allows product management (add, edit, delete) and store settings management. Built with reusable React components, Context API for global state management, Local Storage for data persistence, and a scalable architecture ready for backend/API integration.",
    image: "/projects/freshcart.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "Context API",
      "Local Storage",
      "Lucide React",
      "Component Architecture",
      "Admin Dashboard",
      "Authentication",
      "Responsive Design",
      "Modern UI/UX",
      "E-Commerce"
    ],
    demoUrl: "https://fresh-cart01.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/freshcart"
  },
  {
    id: "frontend-4",
    title: "Photography Website with Admin Panel",
    description:
      "A professional photography portfolio website with an admin dashboard to manage galleries and content. Includes smooth animations and a stylish, mobile-friendly UI.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind CSS", "Admin Panel", "Node.js", "Responsive UI/UX"],
    demoUrl: "https://labidkhan.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/labid-frontend"
  },
  {
    id: "frontend-5",
    title: "Restaurant Frontend Website",
    description:
      "A modern, fully responsive multi-page restaurant website built using React and Tailwind CSS. Designed with a clean UI, elegant layout, and optimized performance.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Responsive UI/UX"],
    demoUrl: "https://aquamarine-unicorn-6414d3.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/restaurant"
  },
  {
    id: "frontend-6",
    title: "Plant Care Website",
    description:
      "A small full-stack plant-care web application featuring plant listings, an upload page, backend APIs, Firebase authentication, and the ability to manage your own uploaded plants.",
    image: "/projects/project5.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
    demoUrl: "https://green-aura-f6427.web.app/",
    githubUrl: "https://github.com/Nusrat323/assignment10"
  },
  {
    id: "frontend-7",
    title: "CleanFlow Cleaning Services Landing Page",
    description:
      "A fully responsive cleaning-services landing page with a scroll-aware navbar, animated hero with video modal, testimonial carousel, FAQ accordion, and a fully functional booking form with validation and a confirmation modal — built as a component-driven single-page site with smooth-scroll navigation between sections.",
    image: "/projects/cleanflow.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Lucide React",
      "React Icons",
      "Component Architecture",
      "Form Validation",
      "Responsive Design",
      "Smooth Scroll Navigation"
    ],
    demoUrl: "https://cleanflow12.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/cleanflow"
  },
  {
    id: "frontend-8",
    title: "Azaan – Call to Prayer",
    description:
      "A frontend Islamic web application that plays live 5-waqt Azaan automatically based on the user's country and prayer times. Built with a peaceful, calming UI, smooth animations, daily short duas, and Surah audio playback. Fully responsive and optimized for all devices to provide a serene user experience.",
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
    id: "frontend-9",
    title: "E-commerce Frontend Website",
    description:
      "A clean and responsive e-commerce website interface featuring product listings, filtering, shopping cart, checkout page, and dynamic UI components.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "E-commerce UI/UX"],
    demoUrl: "https://gentlify-d55df.web.app/",
    githubUrl: "https://github.com/Nusrat323/menswear"
  },
  {
    id: "frontend-10",
    title: "SwiftCart E-commerce Website",
    description:
      "A responsive frontend e-commerce website with dynamic product fetching from Fake Store API, interactive product modals, category filters, and a cart sidebar. Features multiple pages including Home, Products, About, and Contact with responsive design.",
    image: "/projects/project6.png",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "API Integration", "Responsive Design"],
    demoUrl: "https://swiftcart01.netlify.app/",
    githubUrl: "https://github.com/Nusrat323/swiftcart"
  }
];

const automationProjects = [
  {
    id: "automation-1",
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
    id: "automation-2",
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
  }
];


const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: (i % 3) * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const data = activeTab === "frontend" ? frontendProjects : automationProjects;

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      
      <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative">
        
        <p className="text-center text-xs tracking-[0.3em] uppercase text-primary/70 mb-3 font-semibold">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Showcasing my frontend development work and business automation systems.
        </p>

        
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
              activeTab === "frontend"
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105"
                : "bg-transparent border-primary/30 hover:border-primary/60 hover:bg-primary/5"
            }`}
          >
            Frontend Projects
          </button>

          <button
            onClick={() => setActiveTab("automation")}
            className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
              activeTab === "automation"
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/30 scale-105"
                : "bg-transparent border-primary/30 hover:border-primary/60 hover:bg-primary/5"
            }`}
          >
            Automation Projects
          </button>
        </div>

        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
                className="group bg-card rounded-2xl overflow-hidden border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40"
                style={{ willChange: "opacity, transform" }}
              >
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-3 pt-3 border-t border-border/50">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/5 hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/5 hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        
        <div className="text-center mt-12">
          <a
            className="cosmic-button flex items-center mx-auto gap-2 w-fit hover:gap-3 transition-all duration-300"
            href="https://github.com/Nusrat323"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;