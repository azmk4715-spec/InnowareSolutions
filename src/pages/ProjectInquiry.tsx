import { useState } from "react";
import { ArrowLeft, Send, Building, User, Mail, Phone, MessageSquare, Calendar, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProjectInquiry = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    features: [] as string[],
    hasExistingSystem: false,
    preferredContact: "email"
  });

  const projectTypes = [
    "Web Development",
    "Mobile App Development", 
    "Cloud Solutions",
    "E-commerce Platform",
    "Corporate Website",
    "Healthcare System",
    "Educational Platform",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000", 
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  const timelineOptions = [
    "ASAP",
    "1-2 months",
    "3-6 months", 
    "6-12 months",
    "Flexible"
  ];

  const availableFeatures = [
    "User Authentication",
    "Payment Integration",
    "Real-time Chat",
    "File Upload/Management",
    "Analytics Dashboard",
    "Mobile Responsive",
    "SEO Optimization",
    "Multi-language Support",
    "API Integration",
    "Admin Panel"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with dummy data
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Log form data (in real app, this would go to backend)
      console.log("Project Inquiry Form Data:", formData);
      
      toast.success("Thank you! Your project inquiry has been submitted successfully. We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
        features: [],
        hasExistingSystem: false,
        preferredContact: "email"
      });
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Start Your <span className="gradient-text">Project</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll create a custom solution that drives results for your business.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-xl bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <User className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Personal Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="John Doe"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@company.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+60 11 2590 7186"
                      className="rounded-xl"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your Company Sdn Bhd"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Target className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Project Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>{range}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelineOptions.map((timeline) => (
                          <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange("preferredContact", value)}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Project Description</h2>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Tell us about your project *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
                    className="rounded-xl min-h-[120px]"
                    required
                  />
                </div>
              </div>

              {/* Features Selection */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Building className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Desired Features</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {availableFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <Label htmlFor={feature} className="text-sm cursor-pointer">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">Additional Information</h2>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasExistingSystem"
                    checked={formData.hasExistingSystem}
                    onCheckedChange={(checked) => handleInputChange("hasExistingSystem", checked as boolean)}
                  />
                  <Label htmlFor="hasExistingSystem" className="cursor-pointer">
                    I have an existing system that needs integration or migration
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="btn-modern px-12 py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Project Inquiry
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your inquiry and get back to you within 24 hours.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectInquiry;
