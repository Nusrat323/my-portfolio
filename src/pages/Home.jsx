import React from 'react';

import StarBackgroound from '../components/StarBackgroound';
import { Navbar } from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            
           
            
             <StarBackgroound></StarBackgroound>

              <Navbar></Navbar>

               <main>
                <HeroSection></HeroSection>
                <AboutMe></AboutMe>
                <SkillsSection></SkillsSection>
                <ProjectsSection></ProjectsSection>
                <ContactSection></ContactSection>
               </main>

                
                <Footer></Footer>
        </div>
    );
};

export default Home;