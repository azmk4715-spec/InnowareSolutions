import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, User, ExternalLink } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";

const Footer = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const teamMembers = [
    {
      id: "SUKD2302094",
      email: "SUKD2302094@segi4u.my",
      name: "Abdul Rahman Asmatullah Khan",
      role: "Lead Developer & Project Manager",
      initials: "AK"
    },
    {
      id: "SUKD2302289",
      email: "SUKD2302289@segi4u.my",
      name: "Alamin Mohaddis Hasan",
      role: "Senior Software Engineer",
      initials: "AH"
    },
    {
      id: "SUKD2202388",
      email: "SUKD2202388@segi4u.my",
      name: "Rabeea A. R. Al Najjar",
      role: "Security Operations Center Lead",
      initials: "RA"
    },
    {
      id: "SUKD2301786",
      email: "SUKD2301786@segi4u.my",
      name: "Abdul Rahman Aloush",
      role: "Cloud Solutions Architect",
      initials: "AA"
    },
    {
      id: "SUKD2401217",
      email: "SUKD2401217@segi4u.my",
      name: "Tan Jun Jie",
      role: "IT Consultant & Systems Analyst",
      initials: "TJ"
    },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/">
              <Logo size="md" interactive={true} />
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering SMEs with affordable IT solutions. Professional consulting 
              and digital transformation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block bg-card border border-border rounded-lg p-3 hover:bg-accent transition-all duration-200 hover:shadow-md group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              {/* Location */}
              <a
                href="https://maps.google.com/?q=SEGi+University+Kota+Damansara"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-3 hover:bg-accent transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      SEGi University, Malaysia
                    </p>
                    <p className="text-xs text-muted-foreground">Click to view on map</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+601125907186"
                className="block bg-card border border-border rounded-lg p-3 hover:bg-accent transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      +60 11 2590 7186
                    </p>
                    <p className="text-xs text-muted-foreground">Click to call</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@innoware-solutions.com"
                className="block bg-card border border-border rounded-lg p-3 hover:bg-accent transition-all duration-200 hover:shadow-md group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      info@innoware-solutions.com
                    </p>
                    <p className="text-xs text-muted-foreground">Click to email</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Team</h3>
            <div className="grid grid-cols-2 gap-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredMember(member.id)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  {/* Team Member Box */}
                  <div className="bg-card border border-border rounded-lg p-3 cursor-pointer hover:bg-accent transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{member.initials}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">{member.name.split(' ')[0]}</p>
                        <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Popup Tooltip */}
                  {hoveredMember === member.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
                      <div className="bg-popover border border-border rounded-lg p-4 shadow-lg min-w-64">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-primary">{member.initials}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm text-foreground">{member.name}</h4>
                            <p className="text-xs text-muted-foreground mb-2">{member.role}</p>
                            <div className="flex items-center space-x-2">
                              <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center space-x-1 text-xs text-primary hover:text-primary-hover transition-colors"
                              >
                                <Mail className="h-3 w-3" />
                                <span>Email</span>
                              </a>
                              <Link
                                to="/team"
                                className="inline-flex items-center space-x-1 text-xs text-primary hover:text-primary-hover transition-colors"
                              >
                                <ExternalLink className="h-3 w-3" />
                                <span>Profile</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InnoWare Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;