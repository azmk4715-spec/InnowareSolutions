import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import GoogleMap from "@/components/GoogleMap";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@nextgenware-solutions.com",
      link: "mailto:info@nextgenware-solutions.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+60 11 2590 7186",
      link: "tel:+601125907186",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "SEGi University, Kota Damansara, Malaysia",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative IT solutions? 
            Contact us today to discuss your project and discover how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="service-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {/* Newsletter Signup */}
            <Card className="service-card p-6">
              <h3 className="font-semibold mb-3">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Enter email" className="flex-1" />
                <Button size="sm" className="btn-hero">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="service-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="it-support">IT Support</SelectItem>
                        <SelectItem value="consulting">Digital Transformation</SelectItem>
                        <SelectItem value="training">Training Programs</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="btn-hero w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Find <span className="gradient-text">Our Office</span>
          </h2>
          <Card className="service-card overflow-hidden">
            <div className="aspect-video relative">
              <GoogleMap
                center={{
                  lat: 3.1579, // SEGI University Kota Damansara coordinates
                  lng: 101.5926
                }}
                zoom={15}
                className="w-full h-full rounded-lg"
              />
              {/* Overlay with office info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">SEGi University</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Kota Damansara, Malaysia</p>
                <p className="text-xs text-muted-foreground">NextGenWare Solutions Office</p>
                <Button 
                  size="sm" 
                  className="mt-3 w-full"
                  onClick={() => window.open('https://maps.google.com/?q=SEGi+University+Kota+Damansara', '_blank')}
                >
                  View on Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most web development projects take 4-8 weeks, while larger enterprise solutions may take 3-6 months."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and 24/7 technical support for all our solutions."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We specialize in system integration and can work with your existing infrastructure to enhance and modernize your technology stack."
              },
              {
                question: "What industries do you serve?",
                answer: "We work with SMEs across various industries including healthcare, finance, retail, manufacturing, and professional services."
              }
            ].map((faq, index) => (
              <Card key={index} className="service-card p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;