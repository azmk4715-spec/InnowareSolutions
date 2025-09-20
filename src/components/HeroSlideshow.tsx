import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  buttonText: string;
  buttonAction: string;
  secondaryButtonText?: string;
  secondaryButtonAction?: string;
  type: 'motto' | 'vision' | 'mission' | 'values' | 'services';
}

const HeroSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "NextGenWare Solutions",
      subtitle: "Empowering SMEs with affordable IT solutions",
      description: "Transform your business with cutting-edge technology solutions. From web development to cloud infrastructure, we deliver comprehensive IT services that drive growth and innovation.",
      backgroundImage: heroImage,
      buttonText: "Get Started",
      buttonAction: "/project-inquiry",
      secondaryButtonText: "View Our Work",
      secondaryButtonAction: "/portfolio",
      type: 'services'
    },
    {
      id: 2,
      title: "Our Vision",
      subtitle: "To be the leading IT solutions provider for SMEs",
      description: "We envision a future where every small and medium enterprise has access to world-class technology solutions that enable them to compete globally and achieve sustainable growth in the digital economy.",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop&auto=format&q=80",
      buttonText: "Learn More",
      buttonAction: "/about",
      type: 'vision'
    },
    {
      id: 3,
      title: "Our Mission",
      subtitle: "Democratizing technology for all businesses",
      description: "Our mission is to make advanced technology accessible and affordable for small and medium enterprises, providing them with the tools and expertise needed to thrive in today's digital landscape.",
      backgroundImage: "/compass-mission.jpg",
      buttonText: "Our Services",
      buttonAction: "/services",
      type: 'mission'
    },
    {
      id: 4,
      title: "Our Motto",
      subtitle: "Innovation Through Collaboration",
      description: "We believe that the best solutions emerge when technology meets human creativity. Our motto reflects our commitment to working closely with clients to understand their unique challenges and craft innovative solutions together.",
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&auto=format&q=80",
      buttonText: "Meet Our Team",
      buttonAction: "/team",
      type: 'motto'
    },
    {
      id: 5,
      title: "Our Values",
      subtitle: "Excellence, Integrity, Innovation",
      description: "We are committed to delivering excellence in every project, maintaining the highest standards of integrity in our business practices, and continuously innovating to stay ahead of technological trends and client needs.",
      backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop&auto=format&q=80",
      buttonText: "Contact Us",
      buttonAction: "/contact",
      type: 'values'
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentSlideData = slides[currentSlide];

  const getSlideTypeColor = (type: string) => {
    switch (type) {
      case 'vision':
        return 'from-blue-600/90 to-purple-600/90';
      case 'mission':
        return 'from-green-600/90 to-teal-600/90';
      case 'motto':
        return 'from-orange-600/90 to-red-600/90';
      case 'values':
        return 'from-purple-600/90 to-pink-600/90';
      default:
        return 'from-primary/90 to-primary-hover/90';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={currentSlideData.backgroundImage} 
          alt={currentSlideData.title}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${getSlideTypeColor(currentSlideData.type)}`} />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-500 ${
              isTransitioning 
                ? 'opacity-0 transform translate-y-8' 
                : 'opacity-100 transform translate-y-0'
            }`}
          >
            {currentSlideData.title}
          </h1>
          <p 
            className={`text-xl md:text-2xl mb-8 opacity-90 transition-all duration-500 delay-100 ${
              isTransitioning 
                ? 'opacity-0 transform translate-y-8' 
                : 'opacity-90 transform translate-y-0'
            }`}
          >
            {currentSlideData.subtitle}
          </p>
          <p 
            className={`text-lg mb-12 opacity-80 max-w-2xl mx-auto transition-all duration-500 delay-200 ${
              isTransitioning 
                ? 'opacity-0 transform translate-y-8' 
                : 'opacity-80 transform translate-y-0'
            }`}
          >
            {currentSlideData.description}
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500 delay-300 ${
              isTransitioning 
                ? 'opacity-0 transform translate-y-8' 
                : 'opacity-100 transform translate-y-0'
            }`}
          >
            <Button 
              size="lg" 
              className="btn-modern"
              onClick={() => window.location.href = currentSlideData.buttonAction}
            >
              {currentSlideData.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {currentSlideData.secondaryButtonText && (
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-modern"
                onClick={() => window.location.href = currentSlideData.secondaryButtonAction!}
              >
                {currentSlideData.secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>

          {/* Auto-play Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors ml-2"
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <Pause className="h-4 w-4 text-white" />
            ) : (
              <Play className="h-4 w-4 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Type Badge */}
      <div className="absolute top-8 right-8 z-20">
        <div 
          className={`bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-500 ${
            isTransitioning 
              ? 'opacity-0 transform scale-95' 
              : 'opacity-100 transform scale-100'
          }`}
        >
          <span className="text-white text-sm font-medium capitalize">
            {currentSlideData.type}
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
