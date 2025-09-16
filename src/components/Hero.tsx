import { Button } from '@/components/ui/button';
import { Shield, Download, ExternalLink } from 'lucide-react';
import professionalHeadshot from '@/assets/professional-headshot.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-12 w-12 text-primary mr-4" />
              <span className="text-2xl font-bold gradient-text">Cybersecurity Expert</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Securing Digital</span><br />
              <span className="text-foreground">Infrastructure</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Penetration Testing • SOC Operations • ISO 27001 Compliance • Ethical Hacking
            </p>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">CEH</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">CompTIA Security+</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">OSCP</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                View Portfolio
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cyber" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Professional Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden cyber-glow bg-gradient-card">
                <img
                  src={professionalHeadshot}
                  alt="Lekan - Cybersecurity Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-accent rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;