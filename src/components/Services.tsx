import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  SearchCheck, 
  Monitor, 
  FileCheck, 
  Lock, 
  AlertTriangle,
  Network,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: SearchCheck,
      title: 'Penetration Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do. Complete testing methodology following industry standards.',
      features: ['Network Penetration Testing', 'Web Application Testing', 'Mobile App Security', 'Social Engineering Tests']
    },
    {
      icon: Monitor,
      title: 'SOC Operations',
      description: 'Professional Security Operations Center services including 24/7 monitoring, incident response, and threat detection.',
      features: ['24/7 Security Monitoring', 'Incident Response', 'Threat Hunting', 'SIEM Management']
    },
    {
      icon: FileCheck,
      title: 'ISO 27001 Compliance',
      description: 'Complete Information Security Management System implementation and compliance consulting for international standards.',
      features: ['ISMS Implementation', 'Risk Assessments', 'Policy Development', 'Compliance Audits']
    },
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Systematic evaluation of security weaknesses in your infrastructure with detailed remediation guidance.',
      features: ['Infrastructure Scanning', 'Risk Prioritization', 'Remediation Planning', 'Compliance Mapping']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response to security incidents with professional containment, investigation, and recovery procedures.',
      features: ['Emergency Response', 'Digital Forensics', 'Malware Analysis', 'Recovery Planning']
    },
    {
      icon: GraduationCap,
      title: 'Security Training',
      description: 'Comprehensive cybersecurity training programs for teams and individuals to build security awareness.',
      features: ['Security Awareness', 'Technical Training', 'Certification Prep', 'Custom Workshops']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Security Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your organization from evolving threats
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 cyber-glow hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <ArrowRight className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;