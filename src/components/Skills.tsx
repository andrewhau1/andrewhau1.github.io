
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillsList = [
    {
      title: "Experience Strategy & Service Design",
      description: "Journey mapping, persona development, experience backlogs, pilot planning, and qualitative research using tools like Figma and Miro"
    },
    {
      title: "Program & Project Leadership",
      description: "Agile sprints, cross-functional team management, stakeholder engagement, and operational execution"
    },
    {
      title: "AI-Augmented Workflows",
      description: "Research synthesis, documentation, and content creation using tools like ChatGPT, Claude, and Notion AI"
    },
    {
      title: "Human-Centered Innovation",
      description: "Design thinking, collaborative facilitation, inclusive co-creation, and community-based strategy"
    },
    {
      title: "Digital Transformation",
      description: "MVP delivery, CRM/analytics integration, process optimization, and scalable program design"
    },
    {
      title: "Communication & Engagement",
      description: "Executive storytelling, client facilitation, strategic alignment, and internal/external communications"
    }
  ];

  return (
    <section id="skills" className="bg-resume-light">
      <div className="section-container">
        <h2 className="section-title">Key Skills & Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList.map((skill, index) => (
            <Card key={index} className="border-l-4 border-l-resume-accent">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 text-resume-navy">{skill.title}</h3>
                <p className="text-gray-700">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
