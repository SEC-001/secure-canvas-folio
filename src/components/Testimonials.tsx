import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const clientReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechCorp Solutions',
      rating: 5,
      review: 'Lekan\'s penetration testing services helped us identify critical vulnerabilities we never knew existed. His thorough approach and detailed reporting gave us the confidence to strengthen our security posture significantly.',
      avatar: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CISO',
      company: 'Financial Services Inc.',
      rating: 5,
      review: 'Outstanding SOC implementation! Lekan transformed our security monitoring capabilities and established robust incident response procedures. Our security team is now operating at a completely different level.',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'VP of Operations',
      company: 'Healthcare Systems Ltd.',
      rating: 5,
      review: 'The ISO 27001 compliance project was executed flawlessly. Lekan\'s expertise in information security frameworks helped us achieve certification on our first audit. Truly professional and knowledgeable.',
      avatar: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'IT Director',
      company: 'Manufacturing Corp',
      rating: 5,
      review: 'Lekan\'s vulnerability assessment revealed security gaps we weren\'t aware of. His practical remediation strategies and ongoing support helped us build a much more secure infrastructure.',
      avatar: '👨‍🔧'
    }
  ];

  const videoReviews = [
    {
      id: 1,
      title: 'Enterprise Security Transformation',
      client: 'Global Tech Company',
      duration: '3:24',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80'
    },
    {
      id: 2,
      title: 'SOC Implementation Success Story',
      client: 'Financial Institution',
      duration: '2:45',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80'
    },
    {
      id: 3,
      title: 'ISO 27001 Compliance Journey',
      client: 'Healthcare Organization',
      duration: '4:12',
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=225&q=80'
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Client Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what my clients say about the cybersecurity services and solutions I deliver
          </p>
        </div>

        {/* Written Reviews */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {clientReviews.map((review) => (
            <Card key={review.id} className="bg-gradient-card border-border/50 cyber-glow hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-accent mr-3" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{review.review}"
                </p>
                
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{review.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {review.position} at {review.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Reviews */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="gradient-text">Video Testimonials</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Watch detailed success stories from satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videoReviews.map((video) => (
            <Card key={video.id} className="bg-gradient-card border-border/50 cyber-glow hover:shadow-glow transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="lg" className="rounded-full w-16 h-16 p-0">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {video.client}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;