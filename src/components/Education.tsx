
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      school: "Ohio Wesleyan University",
      degree: "Bachelors of Science in Economics Management",
      period: "2004 - 2008",
      location: "Delaware, OH"
    },
    {
      school: "Tech Talent South",
      degree: "Completed coursework in Ruby on Rails, HTML/CSS, HTTP and RESTful Design",
      period: "2014",
      location: "Charlotte, NC"
    }
  ];

  const certificates = [
    "EY Bronze Badges: Innovation, Strategy, Product Management, Change Management, Client Centricity, AI, Cybersecurity (2023–2024)",
    "IDEO U: Foundations & Advanced Design Thinking (2018, 2020)"
  ];

  return (
    <section id="education" className="bg-resume-light">
      <div className="section-container">
        <h2 className="section-title">Education & Certificates</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Book className="h-6 w-6 text-resume-accent mr-2" />
              <h3 className="section-subtitle mb-0">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-resume-navy">{edu.school}</h4>
                    <p className="text-gray-700">{edu.degree}</p>
                    <div className="flex justify-between items-center mt-2 text-resume-gray text-sm">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Award className="h-6 w-6 text-resume-accent mr-2" />
              <h3 className="section-subtitle mb-0">Certificates</h3>
            </div>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {certificates.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 rounded-full bg-resume-accent mt-2 mr-3"></div>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
