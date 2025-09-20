import React from 'react';

interface GoogleMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ center, zoom, className = '' }) => {
  // SEGI University Kota Damansara coordinates
  const lat = center.lat;
  const lng = center.lng;
  
  // Create OpenStreetMap embed URL (no API key required)
  const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.01},${lat-0.01},${lng+0.01},${lat+0.01}&layer=mapnik&marker=${lat},${lng}`;
  
  // Direct Google Maps link for the button
  const googleMapsUrl = `https://maps.google.com/?q=SEGi+University+Kota+Damansara&ll=${lat},${lng}&z=${zoom}`;

  return (
    <div className={`w-full h-full ${className}`} style={{ minHeight: '400px' }}>
      <iframe
        src={osmUrl}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '8px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="SEGi University Location"
      />
      
      {/* Overlay with additional info and Google Maps link */}
      <div className="absolute bottom-4 right-4">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-white/95 backdrop-blur-sm text-primary text-sm font-medium rounded-lg shadow-lg hover:bg-white transition-colors"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
