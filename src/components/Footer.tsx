
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-resume-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Andrew H. Au</h3>
            <p className="text-resume-light">Experience Strategist | Program Manager | AI-Augmented Delivery of Scalable, Human-Centered Solutions</p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <a href="mailto:AndrewHAu@gmail.com" className="flex items-center hover:text-resume-accent transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              AndrewHAu@gmail.com
            </a>
            <a href="tel:7049169535" className="flex items-center hover:text-resume-accent transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              704.916.9535
            </a>
            <a 
              href="https://linkedin.com/in/andrewhau" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:text-resume-accent transition-colors"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              linkedin.com/in/andrewhau
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Andrew H. Au. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
