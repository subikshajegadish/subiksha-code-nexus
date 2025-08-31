import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Technical Analyst",
      company: "ION Group",
      location: "Chennai, India",
      period: "Jan 2024 – Jul 2025",
      type: "Full-time",
      description: "Optimized system workflows and automated critical processes to improve operational efficiency.",
      achievements: [
        "Resolved 200+ client issues through systematic troubleshooting and optimization",
        "Automated database restoration processes, reducing manual work from days to hours",
        "Improved system reliability and performance through process optimization",
        "Collaborated with cross-functional teams to implement scalable solutions"
      ],
      color: "neon-purple"
    },
    {
      title: "Software Development Intern",
      company: "ISRO LPSC",
      location: "Thiruvananthapuram, India",
      period: "May 2023 – Jul 2023",
      type: "Internship",
      description: "Developed cutting-edge computer vision solutions for aerospace applications.",
      achievements: [
        "Developed computer vision solutions for defect detection in critical systems",
        "Implemented ML algorithms achieving 94% accuracy in defect identification",
        "Improved overall system reliability by 40% through automated detection",
        "Created comprehensive documentation and testing frameworks"
      ],
      color: "neon-cyan"
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute inset-0 pixelated-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey spanning system optimization, automation, and 
            cutting-edge computer vision applications.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Briefcase className={`w-5 h-5 text-${exp.color}`} />
                        <span className="text-sm font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className={`font-semibold text-${exp.color}`}>{exp.company}</p>
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="md:col-span-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;