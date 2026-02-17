import { Briefcase, Code, User } from 'lucide-react';
import React from 'react';

const AboutMe = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'> Frontend Developer</h3>
                        <p className='text-muted-foreground'>
                            Passionate Frontend Developer & Tech Creator with 1+ year of experience, building modern, responsive, and accessible web applications. I specialize in creating polished, user-friendly interfaces that deliver seamless web experiences.
                        </p>

                        <p className='text-muted-foreground'>
                            I enjoy solving complex problems and turning ideas into functional web solutions. Using my frontend expertise, I’ve built numerous responsive websites and several small fullstack applications that combine design and functionality.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'>
                                Get In Touch
                            </a>

                            
                            <a
                                href='/Cv.pdf' 
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-5 w-5 text-primary' />
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Frontend Development</h4>
                                    <p className='text-muted-foreground'>
                                        Creating responsive website and web applications with modern framework.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-5 w-5 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>UI/UX & Visual Design</h4>
                                    <p className='text-muted-foreground'>
                                        Designing clean, intuitive, and visually appealing interfaces that enhance user experience and engagement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Briefcase className='h-5 w-5 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Problem Solving & Project Building</h4>
                                    <p className='text-muted-foreground'>
                                        Turning ideas into functional projects by solving challenges and bringing modern web solutions to life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

