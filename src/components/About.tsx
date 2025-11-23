import { Card, CardContent } from '@/components/ui/card';
import { Shield, Target, Award, Users } from 'lucide-react';
import aboutImage from '@/assets/about-section.jpg';

const About = () => {
  const stats = [
    { icon: Shield, label: 'Security Projects', value: '50+' },
    { icon: Target, label: 'Vulnerabilities Found', value: '100+' },
    { icon: Award, label: 'Certifications', value: '10+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden cyber-glow bg-gradient-card">
              <img
                src={aboutImage}
                alt="Cybersecurity Professional at Work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full opacity-60 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-accent rounded-full opacity-40 blur-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <div className="text-lg text-muted-foreground mb-8 space-y-4">
              <p>
                I'm a dedicated Cybersecurity Engineer with extensive experience in penetration testing, 
                ethical hacking, and security operations. My passion for protecting digital infrastructure 
                drives me to stay ahead of emerging threats and implement robust security solutions.
              </p>
              
              <p>
                Specializing in Security Operations Center (SOC) management, Information Security frameworks, 
                and ISO 27001/IEC compliance, I help organizations build comprehensive security programs 
                that protect their most valuable assets.
              </p>
              
              <p>
                With certifications including CEH, CompTIA Security+, and OSCP, I combine theoretical 
                knowledge with hands-on experience to deliver exceptional security assessments and solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-card border-border/50 cyber-glow">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
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
