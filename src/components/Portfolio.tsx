import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Image, Database } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Food Waste Management System",
      description: "Full-stack web application connecting restaurants and NGOs to reduce food waste through efficient resource distribution.",
      image: "/lovable-uploads/food-waste-project.jpg", // Placeholder
      techStack: ["React", "Node.js", "MongoDB", "Google Maps API", "Express.js"],
      features: [
        "RESTful APIs for user authentication and inventory management",
        "Google Maps API integration for route optimization",
        "Role-based access control for different user types",
        "Real-time inventory tracking and notifications"
      ],
      icon: <Database className="w-6 h-6 text-neon-purple" />,
      color: "neon-purple",
      category: "Full-Stack Development"
    },
    {
      title: "Image Enhancement Framework",
      description: "Python-based computer vision solution for enhancing low-light images using advanced exposure fusion techniques.",
      image: "/lovable-uploads/image-enhancement-project.jpg", // Placeholder
      techStack: ["Python", "OpenCV", "NumPy", "Scikit-learn", "Matplotlib"],
      features: [
        "3.7% PSNR boost in image quality metrics",
        "3% SSIM improvement in structural similarity",
        "Modular and configurable framework design",
        "Real-time processing capabilities"
      ],
      icon: <Image className="w-6 h-6 text-neon-cyan" />,
      color: "neon-cyan",
      category: "Computer Vision"
    },
    {
      title: "Database Automation System",
      description: "Python automation scripts that revolutionized database restoration processes at ION Group.",
      image: "/lovable-uploads/automation-project.jpg", // Placeholder
      techStack: ["Python", "SQL", "Shell Scripting", "Cron Jobs", "PostgreSQL"],
      features: [
        "Reduced manual work from days to hours",
        "Automated backup and restoration processes",
        "Error handling and logging mechanisms",
        "Improved operational efficiency by 85%"
      ],
      icon: <Zap className="w-6 h-6 text-neon-pink" />,
      color: "neon-pink",
      category: "System Automation"
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      <div className="absolute inset-0 pixelated-bg opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects demonstrating expertise in full-stack development, 
            computer vision, and system automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover-glow transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-auto bg-gradient-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        {project.icon}
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`text-${project.color} text-sm font-medium bg-secondary px-3 py-1 rounded-full`}>
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className={`w-2 h-2 bg-${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="leading-relaxed text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <Button variant="outline" className="neon-border hover-glow">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button variant="outline" className="neon-border hover-glow">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
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

export default Portfolio;