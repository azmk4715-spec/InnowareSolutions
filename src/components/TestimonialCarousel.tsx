import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  type: 'testimonial' | 'quote' | 'motto';
  content: string;
  author: string;
  role?: string;
  company?: string;
  rating?: number;
}

const TestimonialCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      type: 'testimonial',
      content: "NextGenWare Solutions transformed our digital infrastructure completely. Their cloud solutions helped us scale our business by 300% in just 6 months. The team's expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      rating: 5
    },
    {
      id: 2,
      type: 'quote',
      content: "Innovation is not just about technology; it's about understanding the human element behind every business challenge and crafting solutions that truly make a difference.",
      author: "Abdul Rahman Asmatullah Khan",
      role: "Lead Developer & Project Manager"
    },
    {
      id: 3,
      type: 'testimonial',
      content: "The security solutions provided by NextGenWare Solutions gave us complete peace of mind. Their SOC team is incredibly responsive and proactive in protecting our digital assets.",
      author: "Michael Chen",
      role: "CTO",
      company: "FinanceFlow Ltd.",
      rating: 5
    },
    {
      id: 4,
      type: 'motto',
      content: "Excellence in technology is not a destination, but a continuous journey of learning, adapting, and delivering value to our clients.",
      author: "Rabeea A. R. Al Najjar",
      role: "Security Operations Center Lead"
    },
    {
      id: 5,
      type: 'testimonial',
      content: "Working with NextGenWare Solutions was a game-changer for our business. Their custom web development solutions are robust, scalable, and exactly what we needed to compete in the market.",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "EcoTech Solutions",
      rating: 5
    },
    {
      id: 6,
      type: 'quote',
      content: "The best technology solutions are those that seamlessly integrate with business processes, making complex tasks simple and empowering teams to focus on what matters most.",
      author: "Alamin Mohaddis Hasan",
      role: "Senior Software Engineer"
    },
    {
      id: 7,
      type: 'motto',
      content: "Cloud architecture is not just about infrastructure; it's about building the foundation for tomorrow's innovations today.",
      author: "Abdul Rahman Aloush",
      role: "Cloud Solutions Architect"
    },
    {
      id: 8,
      type: 'testimonial',
      content: "NextGenWare Solutions' consulting services helped us identify and implement the right technology stack for our business. Their strategic approach saved us months of trial and error.",
      author: "David Kim",
      role: "Operations Director",
      company: "RetailMax Corp.",
      rating: 5
    },
    {
      id: 9,
      type: 'quote',
      content: "Digital transformation is not just about adopting new technologies; it's about reimagining business processes and creating value through strategic technology integration.",
      author: "Tan Jun Jie",
      role: "IT Consultant & Systems Analyst"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentSlide];

  const getSlideTypeColor = (type: string) => {
    switch (type) {
      case 'testimonial':
        return 'border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50';
      case 'quote':
        return 'border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50';
      case 'motto':
        return 'border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/50';
      default:
        return 'border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/50';
    }
  };

  const getSlideTypeIcon = (type: string) => {
    switch (type) {
      case 'testimonial':
        return <Star className="h-5 w-5 text-blue-500" />;
      case 'quote':
        return <Quote className="h-5 w-5 text-green-500" />;
      case 'motto':
        return <Quote className="h-5 w-5 text-purple-500" />;
      default:
        return <Quote className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className={`p-8 text-center ${getSlideTypeColor(testimonial.type)}`}>
                <div className="flex justify-center mb-4">
                  {getSlideTypeIcon(testimonial.type)}
                </div>
                
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex justify-center mb-4">
                  {testimonial.rating && (
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  {testimonial.role && (
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  )}
                  {testimonial.company && (
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="flex items-center space-x-2"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? 'bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="flex items-center space-x-2"
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Auto-play Toggle */}
      <div className="flex justify-center mt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-muted-foreground hover:text-foreground"
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Auto-slide
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
