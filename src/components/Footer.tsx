import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Subiksha Jegadish. Made with{' '}
              <Heart className="inline w-4 h-4 text-neon-pink" />{' '}
              and lots of coffee.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/subikshajegadish" 
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/subiksha-jegadish" 
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:subiksha.jegadish@umd.edu" 
              className="text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS. Hosted with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;