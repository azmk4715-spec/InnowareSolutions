import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModernPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModernPopup = ({ isOpen, onClose }: ModernPopupProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                We'll be in touch with exclusive IT solutions just for you.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <span>Exclusive IT Solutions Offer</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-primary bg-primary/5 rounded-lg p-3">
            <Clock className="h-4 w-4" />
            <span className="font-medium">Limited Time: Free Consultation Worth RM500</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Get a personalized IT assessment and discover how we can transform your business with cutting-edge solutions.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl"
            />
            
            <Button type="submit" className="btn-modern w-full">
              Claim Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="text-xs text-muted-foreground text-center">
            🔒 Your information is secure and will never be shared
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Auto-popup hook
export const useAutoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user has seen popup before
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("hasSeenPopup", "true");
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return { showPopup, closePopup };
};

export default ModernPopup;