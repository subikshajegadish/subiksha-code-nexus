import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
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

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-gradient-card border-border hover-glow transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {/* Project Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            {project.icon}
                            <span className={`text-${project.color} text-sm font-medium bg-secondary px-3 py-1 rounded-full`}>
                              {project.category}
                            </span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, featureIndex) => (
                              <li 
                                key={featureIndex}
                                className="flex items-start space-x-2 text-muted-foreground"
                              >
                                <div className={`w-1.5 h-1.5 bg-${project.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                                <span className="leading-relaxed text-xs">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-2">
                          <Button variant="outline" size="sm" className="neon-border hover-glow">
                            <Github className="mr-1 h-3 w-3" />
                            View Code
                          </Button>
                          <Button variant="outline" size="sm" className="neon-border hover-glow">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;