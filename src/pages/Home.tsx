import { ArrowRight, CheckCircle, Star, Users, Code, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroSlideshow from "@/components/HeroSlideshow";

const Home = () => {
  const navigate = useNavigate();
  
  const stats = [
    { label: "Clients Served", value: "50+" },
    { label: "Projects Completed", value: "100+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "5" },
  ];

  const features = [
    {
      icon: Code,
      title: "Expert Development",
      description: "Custom web and software solutions tailored to your business needs.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions", 
      description: "Scalable cloud infrastructure on AWS, Azure, and Google Cloud.",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock IT support and infrastructure management.",
    },
  ];

  return (
    <div>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">InnoWare Solutions</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver 
              solutions that truly make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="service-card modern-card group p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 service-icon transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Quotes Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Clients & Team</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover insights from our clients and hear the philosophy that drives our team forward.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our IT solutions can help your business grow and succeed 
              in today's digital landscape.
            </p>
            <Button 
              size="lg" 
              className="btn-modern"
              onClick={() => navigate('/contact')}
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;