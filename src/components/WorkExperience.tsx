
import React from 'react';

type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  description?: string;
  achievements: string[];
  subRole?: {
    title: string;
    client: string;
    achievements: string[];
  }[];
};

const experienceData: ExperienceItem[] = [
  {
    company: "StealthX",
    location: "Charlotte, NC",
    role: "Experience Strategist & Program Manager",
    period: "March 2025 – May 2025",
    description: "Contracted through StealthX to lead two high-impact initiatives—one with an EdTech startup and another with a leading orthopedic practice in the Carolinas. Combined experience strategy, program management, and AI-enhanced workflows to deliver scalable, human-centered solutions on accelerated timelines.",
    achievements: [],
    subRole: [
      {
        title: "Patient Experience Transformation",
        client: "Leading Orthopedic Practice in the Carolinas",
        achievements: [
          "Led an 8-week rapid research and strategy engagement to improve patient, practitioner, and staff experiences.",
          "Developed Level-1 personas and journey maps covering key touchpoints (Scheduling, Check-in, Consultation, Follow-up).",
          "Prioritized 45+ experience opportunities and scoped the top 20 for pilot execution, reducing scope by 50% while preserving value.",
          "Co-developed a pilot roadmap including signage improvements, a patient-facing microsite prototype, and standardized staff scripts.",
          "Collaborated with the UX team to design empathy-based hospitality training for frontline staff.",
          "Delivered all engagement artifacts including Experience Catalog, Journey Maps, Pilot Roadmap, Personas, and Training Guide.",
          "Leveraged AI tools (ChatGPT, Fathom) to accelerate synthesis, content creation, and stakeholder alignment."
        ]
      },
      {
        title: "EdTech Platform MVP Launch",
        client: "Early-stage EdTech Startup",
        achievements: [
          "Defined product vision, authored user stories, and led Agile delivery of a profile enrichment and account creation MVP in under 10 weeks.",
          "Served as the primary point of contact for client communications, project documentation, and sprint planning.",
          "Collaborated across design, engineering, and marketing to deliver core functionality and testable features.",
          "Used AI tools to streamline backlog management, internal documentation, and content iteration cycles."
        ]
      }
    ]
  },
  {
    company: "Ernst and Young",
    location: "Charlotte, NC",
    description: "Global innovation center within EY focused on immersive workshops to solve complex business challenges across industries.",
    role: "EY wavespace Experience Designer",
    period: "October 2021 - October 2024",
    achievements: [
      "Designed and facilitated approximately 36 workshops tailored to the unique needs of clients across the Energy, Mobility, and Financial Services sectors, focusing on advancing strategic projects, initiatives, and alliance-building efforts.",
      "Created and implemented innovative processes, including an end-to-end workshop planning checklist, enabling wavespace teams to streamline planning, improve alignment, and collaborate asynchronously, significantly reducing preparation time.",
      "Co-developed an onboarding process for new hires, ensuring seamless integration into the wavespace team and fostering consistent operational understanding across the organization.",
      "Led collaborative activities that utilized advanced facilitation techniques and tools to address client challenges, enhance cross-functional teamwork, and deliver measurable results.",
      "Supported the design of workshops that consistently achieved high client satisfaction, driving alignment between EY stakeholders and client teams to deliver impactful outcomes."
    ]
  },
  {
    company: "Digital Charlotte",
    location: "Charlotte, NC",
    description: "City-wide nonprofit initiative advancing digital equity through internet access, digital literacy, and device distribution.",
    role: "Director of Operations",
    period: "May 2016 - October 2021",
    achievements: [
      "Created and launched the Digital Navigators program, reaching and supporting approximately 750-1,000 residents across Charlotte and Mecklenburg County. The program addressed key barriers such as internet access, device availability, and digital literacy by providing personalized, human-centered guidance to connect residents with the right resources.",
      "Utilized platforms including Twitter, Facebook, Instagram, newsletters, and YouTube to advocate for digital equity and raise awareness about resources. Developed and executed strategic campaigns that amplified community engagement and strengthened partnerships with local organizations.",
      "Designed and implemented digital literacy initiatives that empowered underserved communities, fostering inclusivity and bridging the digital divide.",
      "Leveraged data-driven insights to optimize program effectiveness, ensuring resources were aligned with the evolving needs of the community.",
      "Facilitated ideation sessions using design thinking methodologies, driving collaboration among internal teams and external stakeholders to innovate and expand outreach efforts.",
      "Enhanced Digital Charlotte's visibility as a trusted advocate and resource for digital inclusion, positioning the organization as a leader in addressing systemic digital inequities."
    ]
  },
  {
    company: "Tech Talent South",
    location: "Charlotte, NC",
    description: "Coding bootcamp and grassroots tech education provider focused on expanding STEM access and local talent development.",
    role: "Community Organizer",
    period: "March 2015 - May 2016",
    achievements: [
      "Led student recruitment through organic social media and grassroots channels like Craigslist, Facebook Groups, and online forums, significantly increasing program visibility.",
      "Built relationships across Charlotte's tech scene to enhance access to resources and boost community participation.",
      "Created and led the annual Charlotte Tech Startup Crawl, a city-wide networking event connecting talent with startups and tech companies.",
      "Promoted Tech Talent South as a gateway into tech careers for diverse, underrepresented community members.",
      "Organized quarterly kids' coding classes for ages 6–10, introducing foundational programming logic in fun, engaging formats."
    ]
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="mb-2">
                <h3 className="section-subtitle">{job.company}</h3>
                <p className="text-resume-gray italic mb-2">{job.location}</p>
                {job.description && <p className="text-gray-700 mb-3">{job.description}</p>}
                <div className="mt-2">
                  <h4 className="font-semibold text-resume-navy-light">{job.role}</h4>
                  <p className="text-resume-gray">{job.period}</p>
                </div>
              </div>
              
              {job.achievements.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              )}
              
              {job.subRole && job.subRole.map((subJob, subIndex) => (
                <div key={subIndex} className="mt-6 mb-4 bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold text-lg text-resume-accent">{subJob.title}</h4>
                  <p className="text-resume-gray mb-3">Client: {subJob.client}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {subJob.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          
          <div className="timeline-item">
            <h3 className="section-subtitle">Additional Experience</h3>
            <p className="text-gray-700">
              Roles in web development, digital strategy, and youth programming between 2010–2015 available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
