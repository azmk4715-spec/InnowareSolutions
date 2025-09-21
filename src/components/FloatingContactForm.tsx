import { useState } from "react";
import { Send, X, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FloatingContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FloatingContactForm: React.FC<FloatingContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        description: "Please fill in all fields.",
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
        message: "",
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-96 bg-background border border-border rounded-lg shadow-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="rounded-full w-6 h-6 p-0 hover:bg-muted"
        >
          <X className="h-3 w-3" />
        </Button>
      </div>

      {/* Quick Contact Info */}
      <div className="flex space-x-4 mb-6 text-sm text-muted-foreground">
        <a href="tel:+601125907186" className="flex items-center space-x-1 hover:text-primary transition-colors">
          <Phone className="h-4 w-4" />
          <span>+60 11 2590 7186</span>
        </a>
        <a href="mailto:info@nextgenware-solutions.com" className="flex items-center space-x-1 hover:text-primary transition-colors">
          <Mail className="h-4 w-4" />
          <span>Email</span>
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="h-10 text-sm"
            required
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-10 text-sm"
            required
          />
        </div>
        <div>
          <Textarea
            placeholder="Your message..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="h-20 text-sm resize-none"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full h-10 text-sm btn-hero"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-3 h-3 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default FloatingContactForm;
