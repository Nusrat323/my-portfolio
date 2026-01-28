import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Restaurant Frontend Website",
        description:
          "A modern, fully responsive multi-page restaurant website built using React and Tailwind CSS. Designed with a clean UI, elegant layout, and optimized performance.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind", "Responsive UI/UX"],
        demoUrl: "https://aquamarine-unicorn-6414d3.netlify.app/",
        githubUrl: "https://github.com/Nusrat323/restaurant",
      },
      {
        id: 2,
        title: "E-commerce Frontend Website",
        description:
          "A clean and responsive e-commerce website interface featuring product listings, filtering, shopping cart, checkout page, and dynamic UI components.",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind", "E-commerce UI/UX"],
        demoUrl: "https://gentlify-d55df.web.app/",
        githubUrl: "https://github.com/Nusrat323/menswear",
      },
      {
        id: 3,
        title: "Photography Website with Admin Panel",
        description:
          "A professional photography portfolio website with an admin dashboard to manage galleries and content. Includes smooth animations and a stylish, mobile-friendly UI.",
        image: "/projects/project3.png",
        tags: ["React", "Tailwind CSS", "Admin Panel", "Node.js", "Responsive UI/UX"],
        demoUrl: "https://labidkhan.netlify.app/",
        githubUrl: "https://github.com/Nusrat323/labid-frontend",
        
      },
      {
        id: 4,
        title: "Azaan – Call to Prayer",
        description:
          "A frontend Islamic web application that plays live 5-waqt Azaan automatically based on the user’s country and prayer times. Built with a peaceful, calming UI, smooth animations, daily short duas, and Surah audio playback. Fully responsive and optimized for all devices to provide a serene user experience.",
        image: "/projects/azaan.png",
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
        id: 4,
        title: "Plant Care Website",
        description:
          "A small full-stack plant-care web application featuring plant listings, an upload page, backend APIs, Firebase authentication, and the ability to manage your own uploaded plants.",
        image: "/projects/project4.png",
        tags: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", ],
        demoUrl: "https://green-aura-f6427.web.app/",
        githubUrl: "https://github.com/Nusrat323/assignment10",
      }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                  Featured <span className='text-primary'> Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                  Here are some of my recent projects. Each project was carefully crafted with attention to details, performance, and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className='group bg-card rounded-lg overflow-hidden border shadow-xs card-hover'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={index}
                        variants={cardVariants}
                    >
                        <div className='h-48 overflow-hidden'>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                        </div>

                        <div className='p-6'>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className='px-2 py-1 text-xs font-medium border rounded-full 
                                    bg-primary/20 text-secondary-foreground'>{tag}</span>
                                ))}
                            </div>

                            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                            <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>

                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                  <a href={project.demoUrl} target='_blank' rel="noreferrer"
                                     className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                      <ExternalLink size={20} />
                                  </a>
                                  <a href={project.githubUrl} target='_blank' rel="noreferrer"
                                     className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                      <Github size={20} />
                                  </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
                </div>

                <div className='text-center mt-12'>
                  <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/Nusrat323' target='_blank'>
                    Check My Github <ArrowRight size={16} />
                  </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
