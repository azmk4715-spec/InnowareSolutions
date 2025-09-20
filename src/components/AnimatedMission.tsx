import React, { useState, useEffect } from 'react';
import { Target, Handshake, TrendingUp, Settings, Rocket, Sparkles } from 'lucide-react';

const AnimatedMission = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [sparklePositions, setSparklePositions] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  // Generate sparkle positions
  useEffect(() => {
    const generateSparkles = () => {
      const sparkles = [];
      for (let i = 0; i < 20; i++) {
        sparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2
        });
      }
      setSparklePositions(sparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  const icons = [
    { Icon: Target, x: 20, y: 30, delay: 0 },
    { Icon: Handshake, x: 80, y: 25, delay: 0.5 },
    { Icon: TrendingUp, x: 75, y: 70, delay: 1 },
    { Icon: Settings, x: 25, y: 75, delay: 1.5 }
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Sparkles */}
      {sparklePositions.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full sparkle-animated"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: '2s'
          }}
        >
          <Sparkles className="w-2 h-2 text-yellow-400" />
        </div>
      ))}

      {/* Hand */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
          isHovered ? 'scale-110 rotate-2' : 'scale-100 rotate-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {/* Hand Shadow */}
          <div className="absolute inset-0 bg-black/20 rounded-full blur-sm scale-110"></div>
          
          {/* Hand */}
          <div className={`relative w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-lg hand-animated ${
            isHovered ? 'hand-animated' : ''
          }`}>
            {/* Palm */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
              {/* Fingers */}
              <div className="flex space-x-1">
                <div className="w-2 h-6 bg-blue-200 rounded-full"></div>
                <div className="w-2 h-6 bg-blue-200 rounded-full"></div>
                <div className="w-2 h-6 bg-blue-200 rounded-full"></div>
                <div className="w-2 h-6 bg-blue-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Energy Lines */}
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isHovered ? 'opacity-100 scale-110' : 'opacity-60 scale-100'
          }`}>
            <div className="flex flex-col space-y-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-1 h-8 bg-gradient-to-t from-transparent via-yellow-400 to-transparent animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rocket */}
      <div 
        className={`absolute top-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 rocket-animated ${
          isHovered ? 'scale-110 -translate-y-2' : 'scale-100 translate-y-0'
        }`}
      >
        <div className="relative">
          {/* Rocket Glow */}
          <div className={`absolute inset-0 bg-white/30 rounded-full blur-lg transition-all duration-1000 ${
            isHovered ? 'scale-150 opacity-80' : 'scale-100 opacity-40'
          }`}></div>
          
          {/* Rocket Body */}
          <div className="relative w-16 h-20 bg-gradient-to-b from-white to-gray-100 rounded-t-full shadow-lg">
            {/* Rocket Window */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
            
            {/* Rocket Fins */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-3 h-4 bg-gradient-to-t from-gray-300 to-gray-400 rounded-sm"></div>
              <div className="w-3 h-4 bg-gradient-to-t from-gray-300 to-gray-400 rounded-sm"></div>
              <div className="w-3 h-4 bg-gradient-to-t from-gray-300 to-gray-400 rounded-sm"></div>
            </div>
          </div>

          {/* Rocket Flame */}
          <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isHovered ? 'scale-125 opacity-100' : 'scale-100 opacity-80'
          }`}>
            <div className="flex flex-col items-center space-y-1">
              <div className="w-2 h-6 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-4 bg-gradient-to-t from-red-500 to-orange-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-3 bg-gradient-to-t from-red-600 to-red-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      {icons.map(({ Icon, x, y, delay }, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 icon-animated ${
            isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-80'
          }`}
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animationDelay: `${delay}s`
          }}
        >
          <div className="relative">
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-sm scale-110"></div>
            
            {/* Icon Circle */}
            <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}

      {/* Mission Text Overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-center">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
          <h3 className="text-white text-sm font-semibold mb-1">Launch Your Vision</h3>
          <p className="text-white/80 text-xs">Innovation • Growth • Success</p>
        </div>
      </div>

      {/* Interactive Hover Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/10 transition-all duration-1000 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default AnimatedMission;
