import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
const Hero = () => {
  return <section className="bg-resume-navy text-white min-h-[50vh] flex items-center">
      <div className="section-container flex flex-col items-center text-center">
        <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-6 border-2 border-white">
          <AvatarImage alt="Andrew H. Au" src="/lovable-uploads/d3070127-bc94-4357-bd13-d2c8b15ec368.jpg" className="object-cover object-center" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Andrew H. Au</h1>
        <h2 className="text-xl md:text-2xl mb-8 text-resume-light">Experience Strategist | Program Manager
AI-Augmented Delivery of Scalable, Human-Centered Solutions

      </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button variant="outline" className="bg-transparent text-white hover:bg-resume-navy-light flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>AndrewHAu@gmail.com</span>
          </Button>
          <Button variant="outline" className="bg-transparent text-white hover:bg-resume-navy-light flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>704.916.9535</span>
          </Button>
          <Button variant="outline" className="bg-transparent text-white hover:bg-resume-navy-light flex items-center gap-2" onClick={() => window.open('https://linkedin.com/in/andrewhau', '_blank')}>
            <Linkedin className="h-4 w-4" />
            <span>linkedin.com/in/andrewhau</span>
          </Button>
        </div>
      </div>
    </section>;
};
export default Hero;