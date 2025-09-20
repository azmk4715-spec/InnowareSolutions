import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Code2, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ModernNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node) &&
          portfolioRef.current && !portfolioRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Web Development", href: "/services#web", description: "Custom web applications and websites" },
    { name: "Cloud Solutions", href: "/services#cloud", description: "AWS, Azure, and Google Cloud services" },
    { name: "IT Support", href: "/services#support", description: "24/7 technical support and maintenance" },
    { name: "Digital Transformation", href: "/services#digital", description: "Modernize your business processes" },
  ];

  const portfolioCategories = [
    { name: "Web Applications", href: "/portfolio#web", description: "Modern web solutions" },
    { name: "Enterprise Systems", href: "/portfolio#enterprise", description: "Large-scale implementations" },
    { name: "Cloud Migrations", href: "/portfolio#cloud", description: "Successful cloud transitions" },
    { name: "All Projects", href: "/portfolio", description: "View complete portfolio" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 nav-blur">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <Logo size="md" interactive={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center space-x-1 ${
                    activeDropdown === 'services'
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-foreground">{service.name}</div>
                            <div className="text-xs text-muted-foreground">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Portfolio Dropdown */}
              <div className="relative" ref={portfolioRef}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'portfolio' ? null : 'portfolio')}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 flex items-center space-x-1 ${
                    activeDropdown === 'portfolio'
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  <span>Portfolio</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'portfolio' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'portfolio' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-popover border border-border rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {portfolioCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block p-3 rounded-lg hover:bg-accent transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-foreground">{category.name}</div>
                            <div className="text-xs text-muted-foreground">{category.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                className="btn-modern"
                onClick={() => navigate('/project-inquiry')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-xl"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-border/50 mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-2 py-2 text-sm text-foreground hover:text-primary rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Portfolio */}
                <div className="px-4 py-2">
                  <div className="text-sm font-medium text-muted-foreground mb-2">Portfolio</div>
                  {portfolioCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="block px-2 py-2 text-sm text-foreground hover:text-primary rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>

                <div className="px-4 py-2 flex items-center justify-between">
                  <ThemeToggle size="lg" />
                  <Button 
                    className="btn-modern flex-1 ml-4"
                    onClick={() => {
                      navigate('/project-inquiry');
                      setIsOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default ModernNavigation;