import React from 'react';
import { X, CheckCircle, ArrowRight, Code2, Cloud, Server, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

interface ServiceDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    useCases: string[];
    technologies: string[];
  };
}

const ServiceDetailsPopup: React.FC<ServiceDetailsPopupProps> = ({ isOpen, onClose, service }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  const IconComponent = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl ${
        theme === 'dark' ? 'dark' : ''
      }`}>
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                <p className="text-muted-foreground">Comprehensive service details</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Service Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>

          {/* Features & Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Features */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Benefits */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                <ArrowRight className="h-5 w-5 text-primary mr-2" />
                Business Benefits
              </h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Use Cases & Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Use Cases */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Common Use Cases</h3>
              <div className="space-y-2">
                {service.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-muted-foreground mb-4">
              Ready to get started with {service.title.toLowerCase()}?
            </p>
            <Button size="lg" className="btn-hero">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPopup;
