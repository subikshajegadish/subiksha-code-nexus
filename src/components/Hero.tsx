import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="absolute inset-0 pixelated-bg opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-neon-cyan text-lg">Hello there, nice to meet you ❤️, I am</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Subiksha</span>
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground typing">
                Full-Stack Developer | System Optimization | ML & Computer Vision
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Subiksha is a Software Engineering grad student at UMD with experience in 
              full-stack development and system optimization. Passionate about solving 
              complex problems and building scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="neon-border hover-glow">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button variant="outline" className="neon-border hover-glow">
                View Portfolio
              </Button>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://github.com/subikshajegadish" 
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/subiksha-jegadish" 
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:subiksha.jegadish@umd.edu" 
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 text-neon-purple float">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 text-neon-cyan float" style={{ animationDelay: '1s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-primary p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src="https://i.postimg.cc/ydcxSvzw/IMG-7979-2.avif"
                      alt="Subiksha Jegadish"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-neon-cyan" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;