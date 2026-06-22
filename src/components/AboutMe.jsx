import { Briefcase, Bot, Code } from 'lucide-react';
import React from 'react';

const AboutMe = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'>
                            Frontend Developer & AI Automation Specialist
                        </h3>

                        <p className='text-muted-foreground'>
                            I'm a Frontend Developer and AI Automation Specialist with
                            over 2 years of experience building modern web applications
                            and business automation systems. I help businesses create
                            high-performing websites while streamlining their operations
                            through intelligent automation.
                        </p>

                        <p className='text-muted-foreground'>
                            My expertise includes developing responsive and user-friendly
                            web applications using modern technologies, as well as
                            designing automated workflows, CRM systems, lead management
                            pipelines, appointment booking systems, and AI-powered
                            solutions using GoHighLevel and other automation tools.
                        </p>

                        <p className='text-muted-foreground'>
                            I enjoy transforming ideas into scalable digital solutions
                            that not only look great but also improve efficiency,
                            increase conversions, and save valuable time for businesses.
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
                                    <h4 className='font-semibold text-lg'>
                                        Frontend Development
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Building modern, responsive, and high-performance
                                        websites and web applications using React,
                                        JavaScript, and modern frontend technologies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Bot className='h-5 w-5 text-primary' />
                                </div>

                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>
                                        AI Automation & GoHighLevel
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Creating automated workflows, CRM systems,
                                        appointment booking, lead nurturing, follow-up
                                        sequences, and AI-powered business solutions.
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
                                    <h4 className='font-semibold text-lg'>
                                        Business Solutions
                                    </h4>
                                    <p className='text-muted-foreground'>
                                        Helping businesses improve efficiency, generate
                                        more leads, increase conversions, and scale their
                                        operations through technology and automation.
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
