import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import FloatingContactForm from './FloatingContactForm';

const FloatingContactButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Floating Button */}
        <button
          onClick={handleToggleForm}
          className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
            isFormOpen 
              ? 'bg-primary-hover' 
              : 'bg-primary hover:bg-primary-hover'
          }`}
          title="Contact Us"
        >
          <Phone className="h-6 w-6 text-white" />
        </button>

        {/* Pulse Animation for Main Button - only when form is closed */}
        {!isFormOpen && (
          <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none"></div>
        )}
      </div>

      {/* Floating Contact Form */}
      <FloatingContactForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </>
  );
};

export default FloatingContactButton;