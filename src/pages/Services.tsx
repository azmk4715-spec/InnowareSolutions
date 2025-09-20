import { Code2, Cloud, Server, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDetailsPopup from "@/components/ServiceDetailsPopup";
import { useState, useEffect } from "react";

const Services = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  
  // Service mapping for URL hash filtering
  const serviceMapping: { [key: string]: string } = {
    'web': 'Web & Software Development',
    'cloud': 'Cloud Solutions',
    'infrastructure': 'IT Infrastructure & Support',
    'consulting': 'Digital Transformation Consulting',
    'training': 'International Standards Training'
  };
  
  const services = [
    {
      icon: Code2,
      title: "Web & Software Development",
      description: "Custom web applications, mobile apps, and enterprise software solutions built with modern technologies.",
      features: [
        "Responsive Web Applications",
        "Mobile App Development", 
        "E-commerce Solutions",
        "API Development & Integration",
        "Database Design & Optimization",
      ],
      benefits: [
        "Increased operational efficiency",
        "Better customer experience",
        "Scalable business solutions",
        "Competitive advantage",
        "Reduced manual processes"
      ],
      useCases: [
        "E-commerce platforms for retail businesses",
        "Customer management systems",
        "Inventory tracking applications",
        "Mobile apps for customer engagement",
        "Internal workflow automation"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Docker", "MongoDB"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services across AWS, Azure, and Google Cloud platforms for scalable business growth.",
      features: [
        "Cloud Migration & Strategy",
        "Infrastructure as Code",
        "DevOps & CI/CD Pipelines",
        "Cloud Security Implementation",
        "Cost Optimization",
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "Better disaster recovery",
        "Global accessibility"
      ],
      useCases: [
        "Migrating on-premise systems to cloud",
        "Building scalable web applications",
        "Setting up disaster recovery solutions",
        "Implementing DevOps practices",
        "Creating hybrid cloud environments"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"]
    },
    {
      icon: Server,
      title: "IT Infrastructure & Support",
      description: "Complete IT infrastructure management and 24/7 support services to keep your business running smoothly.",
      features: [
        "Network Design & Management",
        "System Administration",
        "Security Monitoring",
        "Backup & Disaster Recovery",
        "Help Desk Support",
      ],
      benefits: [
        "Minimized downtime",
        "Enhanced security posture",
        "Reduced IT management burden",
        "Improved system performance",
        "24/7 technical support"
      ],
      useCases: [
        "Setting up secure office networks",
        "Managing server infrastructure",
        "Implementing backup solutions",
        "Providing ongoing IT support",
        "Security monitoring and compliance"
      ],
      technologies: ["Windows Server", "Linux", "Cisco", "Fortinet", "VMware", "Backup Solutions"]
    },
    {
      icon: Briefcase,
      title: "Digital Transformation Consulting",
      description: "Strategic consulting to help businesses modernize their operations and embrace digital technologies.",
      features: [
        "Digital Strategy Development",
        "Process Automation",
        "Technology Assessment",
        "Change Management",
        "ROI Analysis & Planning",
      ],
      benefits: [
        "Streamlined business processes",
        "Improved decision making",
        "Enhanced customer experience",
        "Increased operational efficiency",
        "Future-proofed technology stack"
      ],
      useCases: [
        "Modernizing legacy systems",
        "Implementing automation solutions",
        "Digital customer experience design",
        "Data analytics and reporting",
        "Workflow optimization"
      ],
      technologies: ["Process Mining", "RPA", "Analytics", "CRM", "ERP", "AI/ML"]
    },
    {
      icon: GraduationCap,
      title: "International Standards Training",
      description: "Professional training programs on international IT standards, best practices, and emerging technologies.",
      features: [
        "ISO/IEC Standards Training",
        "Cybersecurity Awareness",
        "Cloud Certification Prep",
        "Agile & DevOps Methodologies",
        "Custom Training Programs",
      ],
      benefits: [
        "Improved team capabilities",
        "Industry-standard practices",
        "Enhanced security awareness",
        "Better project management",
        "Certified professionals"
      ],
      useCases: [
        "Preparing teams for cloud certifications",
        "Cybersecurity awareness training",
        "Agile methodology implementation",
        "ISO compliance training",
        "Custom technology training"
      ],
      technologies: ["ISO 27001", "AWS Certification", "Azure Certification", "Agile", "DevOps", "Security"]
    },
  ];

  // Filter services based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    
    if (hash && serviceMapping[hash]) {
      const targetService = serviceMapping[hash];
      const filtered = services.filter(service => service.title === targetService);
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  }, [location.hash, services]);

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {filteredServices.length === 1 ? (
              <>
                {filteredServices[0].title} <span className="gradient-text">Service</span>
              </>
            ) : (
              <>
                Our <span className="gradient-text">Services</span>
              </>
            )}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {filteredServices.length === 1 ? (
              filteredServices[0].description
            ) : (
              "Comprehensive IT solutions designed to empower your business with cutting-edge technology and expert guidance."
            )}
          </p>
          {filteredServices.length === 1 && (
            <div className="mt-6">
              <Button 
                variant="outline" 
                onClick={() => navigate('/services')}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                ← View All Services
              </Button>
            </div>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <Card key={index} className="service-card p-8 card-hover">
              <div className="flex items-start space-x-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="group"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
              { step: "02", title: "Strategy", description: "Developing a tailored solution strategy" },
              { step: "03", title: "Implementation", description: "Building and deploying your solution" },
              { step: "04", title: "Support", description: "Ongoing maintenance and optimization" },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business 
            and drive growth through technology.
          </p>
          <Button 
            size="lg" 
            className="btn-hero"
            onClick={() => navigate('/contact')}
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Service Details Popup */}
      {selectedService && (
        <ServiceDetailsPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Services;