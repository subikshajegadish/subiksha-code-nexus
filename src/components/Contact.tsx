import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-neon-purple" />,
      label: "Email",
      value: "subiksha.jegadish@umd.edu",
      link: "mailto:subiksha.jegadish@umd.edu"
    },
    {
      icon: <Phone className="w-6 h-6 text-neon-cyan" />,
      label: "Phone",
      value: "+1 (240) 960-8226",
      link: "tel:+12409608226"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-neon-pink" />,
      label: "LinkedIn",
      value: "Subiksha Jegadish",
      link: "https://linkedin.com/in/subiksha-jegadish"
    },
    {
      icon: <Github className="w-6 h-6 text-tech-blue" />,
      label: "GitHub",
      value: "subikshajegadish",
      link: "https://github.com/subikshajegadish"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can 
            bring your ideas to life with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-cyan">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on 
                innovative projects, or simply chat about technology. Feel free 
                to reach out through any of the following channels.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="bg-gradient-card border-border hover-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        {info.icon}
                        <div>
                          <p className="font-semibold text-foreground">{info.label}</p>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* Location */}
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-neon-purple" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      College Park, Maryland, USA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="bg-secondary border-border focus:border-neon-purple"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-secondary border-border focus:border-neon-purple"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-secondary border-border focus:border-neon-purple"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      className="bg-secondary border-border focus:border-neon-purple min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;