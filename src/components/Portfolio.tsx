import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';

// Import portfolio images
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';
import portfolio7 from '@/assets/portfolio-7.jpg';
import portfolio8 from '@/assets/portfolio-8.jpg';
import portfolio9 from '@/assets/portfolio-9.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Enterprise Penetration Testing',
      category: 'Penetration Testing',
      description: 'Comprehensive security assessment for a Fortune 500 company involving network infrastructure, web applications, and social engineering tests. Identified critical vulnerabilities and provided detailed remediation strategies.',
      image: portfolio1,
      technologies: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap'],
      link: 'https://docs.google.com/document/d/1LNk74N2IRCHwEJ1F68SD7vmnBDuUY4AXYAliD15ukh8/edit?tab=t.0#heading=h.wsvkl1icwpdi'
    },
    {
      id: 2,
      title: 'SOC Implementation & Monitoring',
      category: 'SOC Operations',
      description: 'Designed and implemented a complete Security Operations Center for a financial institution. Established 24/7 monitoring capabilities, incident response procedures, and threat detection systems.',
      image: portfolio2,
      technologies: ['SIEM', 'Splunk', 'QRadar', 'Incident Response'],
      link: 'https://miro.com/welcomeonboard/L1RaZDlWNGc0MUt0N2dUQzY4RmNyRnY5SWVjWE5tV0JhcUpIeml3QWtVYVhhLzZTTUllTVBPZTVDbXM1cnVnOVcyTk00YjYxbnJveURNazZCcWp0UENOL2FiR2JkcTFXLzBCUG1pOE9Tam5EbE1xdHgzR0c5M0RDYjBDTmNXVkxQdGo1ZEV3bUdPQWRZUHQzSGl6V2NBPT0hdjE=?share_link_id=585928681496'
    },
    {
      id: 3,
      title: 'GDPR Compliance Project',
      category: 'Compliance',
      description: 'Led GDPR implementation for a healthcare organization. Developed comprehensive data protection documentation, conducted privacy impact assessments, and achieved successful compliance audit.',
      image: portfolio3,
      technologies: ['GDPR', 'Risk Assessment', 'Data Protection', 'Compliance'],
      link: 'https://docs.google.com/document/d/1bhM27e7qZAnwZ-0x5AB__wFXF7F_CcONSTAxY9wki9A/edit?tab=t.0#heading=h.wsvkl1icwpdi'
    },
    {
      id: 4,
      title: 'Cybersecurity Training Program',
      category: 'Training & Education',
      description: 'Developed and delivered comprehensive cybersecurity training program for corporate executives and technical teams. Covered threat awareness, best practices, and incident response protocols.',
      image: portfolio4,
      technologies: ['Security Awareness', 'Phishing Simulation', 'Training Design', 'KnowBe4'],
      link: 'https://www.udemy.com/course/cybersecurity-course-for-beginners/'
    },
    {
      id: 5,
      title: 'Network Security Assessment',
      category: 'Infrastructure Security',
      description: 'Conducted thorough network security assessment for a manufacturing company. Evaluated firewall configurations, network segmentation, and implemented advanced threat protection measures.',
      image: portfolio5,
      technologies: ['Network Security', 'Firewall Management', 'IDS/IPS', 'Network Segmentation'],
      link: 'https://atsecur.not'
    },
    {
      id: 6,
      title: 'Vulnerability Management Program',
      category: 'Risk Management',
      description: 'Established enterprise-wide vulnerability management program including automated scanning, risk prioritization, and remediation tracking for a technology company.',
      image: portfolio6,
      technologies: ['Nessus', 'Qualys', 'Risk Assessment', 'Patch Management'],
      link: 'https://drive.google.com/file/d/1f6QHM0nX7Bk5mEEPERlPYvQl1MKpJTR8/view'
    },
    {
      id: 7,
      title: 'Incident Response & Forensics',
      category: 'Digital Forensics',
      description: 'Led critical incident response for a ransomware attack. Conducted digital forensics investigation, contained the threat, and implemented recovery procedures to restore operations.',
      image: portfolio7,
      technologies: ['Digital Forensics', 'Malware Analysis', 'Incident Response', 'Recovery Planning'],
      link: 'https://docs.google.com/document/d/1L6jEA8b6yJzCkd8vXQrabXUUdxG1GMexxgOdXJedXAE/edit?tab=t.0#heading=h.yrp6abpgwuv7'
    },
    {
      id: 8,
      title: 'Security Awareness Campaign',
      category: 'Security Education',
      description: 'Designed and implemented organization-wide security awareness campaign including phishing simulations, training modules, and security culture development initiatives.',
      image: portfolio8,
      technologies: ['Awareness Training', 'Phishing Tests', 'Security Culture', 'Behavioral Analysis'],
      link: 'https://www.knowbe4.com/free-cybersecurity-tools/automated-security-awareness-program'
    },
    {
      id: 9,
      title: 'Cloud Security Architecture',
      category: 'Cloud Security',
      description: 'Architected comprehensive cloud security framework for multi-cloud environment. Implemented identity management, encryption strategies, and continuous monitoring across AWS and Azure platforms.',
      image: portfolio9,
      technologies: ['AWS Security', 'Azure Security', 'IAM', 'Cloud Compliance'],
      link: 'https://miro.com/welcomeonboard/WHVWL2N6dVdXM0Y0VE1uRVhQaVB6RW13TFF1eTZldkt6MnVhSWlSSjNTS25QMTcwTGNSWUZ5dUxoelBXako5bVh3L2FFNzdVbHRvdis5WUpOcWtUbFNOL2FiR2JkcTFXLzBCUG1pOE9TamtKVnZWWW9pcEhCakZtZkROVGt4c2hhWWluRVAxeXRuUUgwWDl3Mk1qRGVRPT0hdjE=?share_link_id=288939204035'
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Portfolio & Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing successful cybersecurity implementations and security assessments across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="bg-gradient-card border-border/50 cyber-glow hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-accent/20 text-accent rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="cyber" size="sm" className="w-full" asChild>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;