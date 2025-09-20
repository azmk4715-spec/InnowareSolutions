import React, { useState, useEffect } from 'react';

interface LinkedInProfileImageProps {
  linkedinUrl: string;
  name: string;
  className?: string;
  fallbackClassName?: string;
}

const LinkedInProfileImage: React.FC<LinkedInProfileImageProps> = ({ 
  linkedinUrl, 
  name, 
  className = "w-20 h-20 rounded-lg",
  fallbackClassName = "w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center text-white text-xl font-bold"
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);

  // Function to get specific profile images for team members
  const getSpecificProfileImage = (name: string) => {
    // Check if this is a specific team member with a known image
    if (name.includes("Abdul Rahman Asmatullah Khan")) {
      // Try local image first, fallback to initials if not found
      return "/images/team/abdul-rahman-asmatullah-khan.png";
    }
    
    if (name.includes("Rabeea")) {
      // Try local image first, fallback to initials if not found
      return "/images/team/rabeea-al-najjar.png";
    }
    
    // For other team members, use LinkedIn-style generated avatar
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=0077b5&color=ffffff&bold=true&format=png&font-size=0.4&length=2&rounded=true`;
    return avatarUrl;
  };

  useEffect(() => {
    // Use specific profile images for known team members
    const specificImageUrl = getSpecificProfileImage(name);
    setProfileImageUrl(specificImageUrl);
    setImageLoading(false);
  }, [name]);

  // Fallback to initials if image fails to load
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2);
  };

  // High-quality LinkedIn-style placeholder
  const placeholderImageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=0077b5&color=ffffff&bold=true&format=png&font-size=0.4&length=2&rounded=true`;

  if (imageError || !profileImageUrl) {
    return (
      <div className="relative">
        {imageLoading && (
          <div className={`${fallbackClassName} absolute inset-0 flex items-center justify-center`}>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
        <img
          src={placeholderImageUrl}
          alt={`${name} profile`}
          className={`${className} object-cover ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {imageLoading && (
        <div className={`${fallbackClassName} absolute inset-0 flex items-center justify-center`}>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
      <img
        src={profileImageUrl}
        alt={`${name} profile`}
        className={`${className} object-cover ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setImageLoading(false)}
        onError={() => {
          setImageError(true);
          setImageLoading(false);
        }}
      />
    </div>
  );
};

export default LinkedInProfileImage;