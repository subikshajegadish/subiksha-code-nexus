import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Code, Zap } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Masters in Software Engineering",
      school: "University of Maryland, College Park",
      period: "2025 – 2027 (Expected)",
      icon: <GraduationCap className="w-6 h-6 text-neon-purple" />
    },
    {
      degree: "BTech in Computer Science and Engineering",
      school: "Vellore Institute of Technology",
      period: "2020 – 2024",
      icon: <GraduationCap className="w-6 h-6 text-neon-cyan" />
    }
  ];

  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "C/C++", "JavaScript", "HTML/CSS", "R", "SQL"],
      icon: <Code className="w-6 h-6 text-neon-purple" />
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: <Zap className="w-6 h-6 text-neon-cyan" />
    },
    {
      category: "Frameworks and Libraries",
      items: ["React", "Node.js", "Django", "ExpressJS", "Bootstrap", "Pandas", "NumPy", "Matplotlib", "OpenCV", "Scikit-learn"],
      icon: <Award className="w-6 h-6 text-neon-pink" />
    },
    {
      category: "Tools and Platforms",
      items: ["Git", "JIRA", "Microsoft Azure", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"],
      icon: <Code className="w-6 h-6 text-tech-blue" />
    },
    {
      category: "Operating Systems",
      items: ["Windows", "Linux (Ubuntu)"],
      icon: <Zap className="w-6 h-6 text-neon-cyan" />
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Software Engineering graduate student with a strong foundation in 
            full-stack development, system optimization, and cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neon-cyan">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey in technology began with a fascination for solving complex problems 
                through code. During my BTech at VIT, I discovered my passion for full-stack 
                development and system optimization, which led me to pursue advanced studies 
                at the University of Maryland.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through my experiences at ION Group and ISRO LPSC, I've learned that the most 
                impactful solutions come from understanding both the technical challenges and 
                the human needs behind them. I'm particularly drawn to projects that combine 
                machine learning with practical applications.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-neon-purple">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-gradient-card border-border hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        {edu.icon}
                        <div>
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-neon-cyan">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-neon-cyan">Technical Expertise</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-gradient-card border-border hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {skill.icon}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-3">{skill.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item, itemIndex) => (
                            <span 
                              key={itemIndex}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;