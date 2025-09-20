import { useState } from "react";
import { ExternalLink, Github, Filter, Heart, Users, Calendar, Stethoscope, ShoppingCart, Cloud, Smartphone, Building, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HealthTrackerLogo from "@/components/HealthTrackerLogo";
import { EcommerceLogo, CloudLogo, MobileAppLogo, CorporateLogo, MarketplaceLogo } from "@/components/ProjectLogos";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filters = ["All", "Web Development", "Cloud Solutions", "Mobile Apps", "E-commerce"];

  const projects = [
    {
      title: "ShopMaster - E-Commerce Platform",
      category: "E-commerce",
      description: "Full-featured e-commerce solution with inventory management, payment processing, and customer analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      status: "Completed",
      isEcommerce: true,
      features: [
        { icon: ShoppingCart, text: "Shopping Cart" },
        { icon: Users, text: "User Management" },
        { icon: ExternalLink, text: "Payment Gateway" },
        { icon: Calendar, text: "Order Tracking" }
      ]
    },
    {
      title: "HealthTracker - Healthcare Management System", 
      category: "Web Development",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine features.",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      status: "Completed",
      isHealthTracker: true,
      features: [
        { icon: Users, text: "Patient Management" },
        { icon: Calendar, text: "Appointment Scheduling" },
        { icon: Stethoscope, text: "Telemedicine" },
        { icon: Heart, text: "Health Monitoring" }
      ]
    },
    {
      title: "CloudShift - Migration Project",
      category: "Cloud Solutions", 
      description: "Enterprise cloud migration from on-premises infrastructure to AWS with 99.9% uptime and 40% cost reduction.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      status: "Completed",
      isCloud: true,
      features: [
        { icon: Cloud, text: "Cloud Migration" },
        { icon: ExternalLink, text: "Infrastructure" },
        { icon: Users, text: "DevOps Pipeline" },
        { icon: Calendar, text: "Monitoring" }
      ]
    },
    {
      title: "FoodieGo - Mobile App",
      category: "Mobile Apps",
      description: "Cross-platform mobile app for food delivery with real-time tracking, payment integration, and user reviews.",
      technologies: ["React Native", "Firebase", "Google Maps API", "PayPal"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      status: "In Progress",
      isMobile: true,
      features: [
        { icon: Smartphone, text: "Mobile App" },
        { icon: ExternalLink, text: "Real-time Tracking" },
        { icon: Users, text: "User Reviews" },
        { icon: Calendar, text: "Order History" }
      ]
    },
    {
      title: "BrandCraft - Corporate Website",
      category: "Web Development",
      description: "Modern, responsive corporate website with CMS integration and SEO optimization for improved online presence.",
      technologies: ["Next.js", "Strapi", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      status: "Completed",
      isCorporate: true,
      features: [
        { icon: Building, text: "Corporate Design" },
        { icon: ExternalLink, text: "CMS Integration" },
        { icon: Users, text: "SEO Optimized" },
        { icon: Calendar, text: "Analytics" }
      ]
    },
    {
      title: "VendorHub - Marketplace",
      category: "E-commerce",
      description: "Complex marketplace platform supporting multiple vendors with advanced analytics and commission management.",
      technologies: ["Django", "PostgreSQL", "Redis", "Celery"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop",
      status: "In Progress",
      isMarketplace: true,
      features: [
        { icon: Network, text: "Multi-vendor" },
        { icon: Users, text: "Vendor Management" },
        { icon: ExternalLink, text: "Analytics" },
        { icon: Calendar, text: "Commission" }
      ]
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const statusColors = {
    "Completed": "bg-green-100 text-green-800",
    "In Progress": "bg-blue-100 text-blue-800",
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and case studies showcasing innovative 
            solutions delivered for clients across various industries.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>{filter}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const getCardClass = () => {
              if (project.isHealthTracker) return 'healthcare-card';
              if (project.isEcommerce) return 'ecommerce-card';
              if (project.isCloud) return 'cloud-card';
              if (project.isMobile) return 'mobile-card';
              if (project.isCorporate) return 'corporate-card';
              if (project.isMarketplace) return 'marketplace-card';
              return '';
            };

            const getLogo = () => {
              if (project.isHealthTracker) return <HealthTrackerLogo size="xl" className="mx-auto mb-4" />;
              if (project.isEcommerce) return <EcommerceLogo size="xl" className="mx-auto mb-4" />;
              if (project.isCloud) return <CloudLogo size="xl" className="mx-auto mb-4" />;
              if (project.isMobile) return <MobileAppLogo size="xl" className="mx-auto mb-4" />;
              if (project.isCorporate) return <CorporateLogo size="xl" className="mx-auto mb-4" />;
              if (project.isMarketplace) return <MarketplaceLogo size="xl" className="mx-auto mb-4" />;
              return null;
            };

            const getTitle = () => {
              if (project.isHealthTracker) return 'HealthTracker';
              if (project.isEcommerce) return 'ShopMaster';
              if (project.isCloud) return 'CloudShift';
              if (project.isMobile) return 'FoodieGo';
              if (project.isCorporate) return 'BrandCraft';
              if (project.isMarketplace) return 'VendorHub';
              return project.title;
            };

            const getSubtitle = () => {
              if (project.isHealthTracker) return 'Healthcare Management System';
              if (project.isEcommerce) return 'E-Commerce Platform';
              if (project.isCloud) return 'Cloud Migration Project';
              if (project.isMobile) return 'Food Delivery Mobile App';
              if (project.isCorporate) return 'Corporate Website Redesign';
              if (project.isMarketplace) return 'Multi-vendor Marketplace';
              return project.category;
            };

            const getGradientClass = () => {
              if (project.isEcommerce) return 'from-orange-50 to-amber-100';
              if (project.isCloud) return 'from-blue-50 to-cyan-100';
              if (project.isMobile) return 'from-green-50 to-emerald-100';
              if (project.isCorporate) return 'from-purple-50 to-violet-100';
              if (project.isMarketplace) return 'from-pink-50 to-rose-100';
              return 'from-blue-50 to-indigo-100';
            };

            return (
              <Card key={index} className={`service-card card-hover overflow-hidden ${getCardClass()}`}>
                {(project.isHealthTracker || project.isEcommerce || project.isCloud || project.isMobile || project.isCorporate || project.isMarketplace) ? (
                // Special Project Card Design
                <>
                  <div className={`aspect-video relative overflow-hidden bg-gradient-to-br ${getGradientClass()}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        {getLogo()}
                        <h3 className="text-2xl font-bold text-primary mb-2">{getTitle()}</h3>
                        <p className="text-sm text-muted-foreground">{getSubtitle()}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                        {project.status}
                      </span>
                    </div>
                    {/* Floating project icons */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {project.features?.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Project Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="project-feature flex items-center space-x-2 p-2 bg-muted/50 rounded-lg">
                          <feature.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>View Live</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                // Standard Card Design
                <>
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <ExternalLink className="h-4 w-4" />
                        <span>View Live</span>
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center space-x-1">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Project <span className="gradient-text">Impact</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
              { value: "99.9%", label: "Uptime Average" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a custom solution 
            that drives results for your business.
          </p>
          <Button 
            size="lg" 
            className="btn-hero"
            onClick={() => navigate('/project-inquiry')}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;