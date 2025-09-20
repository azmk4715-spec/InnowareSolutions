import React from 'react';
import { Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingContactButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Floating Button */}
      <button
        onClick={() => navigate('/contact')}
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center bg-primary hover:bg-primary-hover"
        title="Contact Us"
      >
        <Phone className="h-6 w-6 text-white" />
      </button>

      {/* Pulse Animation for Main Button */}
      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
    </div>
  );
};

export default FloatingContactButton;
