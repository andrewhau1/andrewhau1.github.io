
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, Video, Headphones } from 'lucide-react';

const Projects = () => {
  const youtubeProjects = [
    {
      name: "Digital Charlotte Digest",
      description: "Weekly video series",
      link: "https://www.youtube.com/playlist?list=PLR8Tivt9UirChfzXuqDrAdDmi4JJ8cKLc"
    },
    {
      name: "Season 3 Vlogs",
      link: "https://www.youtube.com/playlist?list=PLNhjMf5P4f5cJe2JpypAFMWJJWiQr6ewA"
    },
    {
      name: "Bowflex C6 Bike series",
      link: "https://www.youtube.com/playlist?list=PLNhjMf5P4f5caYvXwtp-zvSUMY37fOZdo"
    },
    {
      name: "Season 2 Vlogs",
      link: "https://www.youtube.com/playlist?list=PLNhjMf5P4f5fW6w8mTepQKXNtUsZuoNrU"
    },
    {
      name: "Paternity Leave with Noah!",
      description: "Video series",
      link: "https://www.youtube.com/playlist?list=PLNhjMf5P4f5f4RKtAtKwpeJzqSCF-T748"
    }
  ];

  const podcastProjects = [
    {
      name: "First Time Dad Podcast",
      platforms: [
        { name: "Spotify", link: "https://open.spotify.com/show/5IWENYnpft5ksV3GdT1UGS" },
        { name: "Anchor", link: "https://anchor.fm/andrewhau" },
        { name: "Google Podcasts", link: "https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xODc5YjJjL3BvZGNhc3QvcnNz" }
      ]
    },
    {
      name: "First Time Dad Interviews",
      link: "https://www.youtube.com/playlist?list=PLNhjMf5P4f5dPWN_nQZb-g5Hy7Wnyguuq"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Personal Projects</h2>
        
        <div className="space-y-10">
          <div>
            <div className="flex items-center mb-6">
              <Youtube className="h-6 w-6 text-resume-accent mr-2" />
              <h3 className="section-subtitle mb-0">YouTube Content</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {youtubeProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg text-resume-navy mb-2">{project.name}</h4>
                    {project.description && (
                      <p className="text-resume-gray mb-3 text-sm">{project.description}</p>
                    )}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-resume-accent hover:underline inline-flex items-center"
                    >
                      <Video className="h-4 w-4 mr-1" />
                      Watch Series
                    </a>
                  </CardContent>
                </Card>
              ))}
              <Card className="hover:shadow-lg transition-shadow border-resume-accent border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg text-resume-navy mb-2">My YouTube Channel</h4>
                  <a 
                    href="https://www.youtube.com/channel/UC3LoQLO3BO3DSLxRHMdm4TA?sub_confirmation=1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-resume-accent hover:underline inline-flex items-center"
                  >
                    <Youtube className="h-4 w-4 mr-1" />
                    Subscribe
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <Headphones className="h-6 w-6 text-resume-accent mr-2" />
              <h3 className="section-subtitle mb-0">First Time Dad</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-resume-navy">Podcast</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {podcastProjects[0].platforms.map((platform, index) => (
                      <li key={index}>
                        <a 
                          href={platform.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-resume-accent hover:underline"
                        >
                          {platform.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-resume-navy">Video Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href={podcastProjects[1].link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-resume-accent hover:underline inline-flex items-center"
                  >
                    <Video className="h-4 w-4 mr-1" />
                    Watch Interviews
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
