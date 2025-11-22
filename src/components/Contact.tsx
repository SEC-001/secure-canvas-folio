import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink, 
  MapPin,
  Globe,
  Youtube,
  Briefcase
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'lekan@cybersecpro.com',
      href: 'mailto:lekan@cybersecpro.com',
      description: 'Get in touch for security consultations'
    }
  ];

  const professionalLinks = [
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect professionally',
      href: 'https://linkedin.com/in/lekan-cybersec',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my security tools',
      href: 'https://github.com/lekan-cybersec',
      color: 'text-gray-400'
    },
    {
      icon: Globe,
      title: 'Website',
      value: 'Personal portfolio',
      href: 'https://lekancybersec.com',
      color: 'text-primary'
    },
    {
      icon: Youtube,
      title: 'YouTube',
      value: 'Security tutorials',
      href: 'https://youtube.com/@lekancybersec',
      color: 'text-red-400'
    },
    {
      icon: Briefcase,
      title: 'Upwork',
      value: 'Hire me for projects',
      href: 'https://upwork.com/freelancers/lekancybersec',
      color: 'text-green-400'
    },
    {
      icon: Download,
      title: 'Resume',
      value: 'Download CV',
      href: '/resume-lekan-cybersec.pdf',
      color: 'text-accent'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your digital infrastructure? Let's discuss your cybersecurity needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 cyber-glow hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                        <a
                          href={method.href}
                          className="text-primary hover:text-accent transition-colors text-lg font-medium block"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                        <p className="text-muted-foreground text-sm mt-1">{method.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Links & Map */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Professional Profiles</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {professionalLinks.map((link, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 cyber-glow hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-4">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 group-hover:scale-105 transition-transform"
                    >
                      <link.icon className={`h-6 w-6 ${link.color}`} />
                      <div>
                        <div className="font-semibold">{link.title}</div>
                        <div className="text-sm text-muted-foreground">{link.value}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Map Embed */}
            <Card className="bg-gradient-card border-border/50 cyber-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="New York, United States Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-card border-border/50 cyber-glow inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Ready to Secure Your Business?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Let's discuss your cybersecurity challenges and create a tailored security solution for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <a href="mailto:aaa@gamil.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me Now
                  </a>
                </Button>
                <Button variant="cyber" size="lg" asChild>
                  <a href="https://www.upwork.com/lekan" target="_blank" rel="noopener noreferrer">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Upwork
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;