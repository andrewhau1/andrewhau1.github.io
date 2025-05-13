
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Summary />
      <Skills />
      <WorkExperience />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
