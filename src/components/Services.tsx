import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Eye, Server, Database, Brain } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Building responsive, scalable web applications using modern technologies like React, Node.js, Django, and ExpressJS.",
      features: [
        "Responsive UI/UX Design",
        "RESTful API Development", 
        "Database Integration",
        "Authentication Systems"
      ],
      icon: <Code className="w-8 h-8 text-neon-purple" />,
      color: "neon-purple"
    },
    {
      title: "System Optimization & Automation",
      description: "Streamlining workflows and automating processes to improve efficiency and reduce manual work.",
      features: [
        "Python Scripting",
        "Database Management",
        "Process Automation",
        "Performance Optimization"
      ],
      icon: <Zap className="w-8 h-8 text-neon-cyan" />,
      color: "neon-cyan"
    },
    {
      title: "Computer Vision Solutions",
      description: "Developing intelligent systems for image processing, defect detection, and visual analysis applications.",
      features: [
        "Image Enhancement",
        "Defect Detection",
        "OpenCV Integration",
        "Real-time Processing"
      ],
      icon: <Eye className="w-8 h-8 text-neon-pink" />,
      color: "neon-pink"
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with efficient data handling and secure API endpoints.",
      features: [
        "API Design & Development",
        "Database Architecture",
        "Security Implementation",
        "Cloud Integration"
      ],
      icon: <Server className="w-8 h-8 text-tech-blue" />,
      color: "tech-blue"
    },
    {
      title: "Database Solutions",
      description: "Designing and optimizing database systems for improved performance and data integrity.",
      features: [
        "Database Design",
        "Query Optimization",
        "Data Migration",
        "Backup & Recovery"
      ],
      icon: <Database className="w-8 h-8 text-neon-purple" />,
      color: "neon-purple"
    },
    {
      title: "Machine Learning Applications",
      description: "Implementing ML algorithms and AI solutions for data analysis and predictive modeling.",
      features: [
        "Algorithm Implementation",
        "Model Training",
        "Data Analysis",
        "Predictive Systems"
      ],
      icon: <Brain className="w-8 h-8 text-neon-cyan" />,
      color: "neon-cyan"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical solutions spanning full-stack development, 
            system optimization, and cutting-edge AI applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover-glow transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div className="flex justify-center">
                  <div className="p-4 bg-secondary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-center text-foreground">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-center">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center space-x-3 text-sm text-muted-foreground"
                      >
                        <div className={`w-2 h-2 bg-${service.color} rounded-full flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;