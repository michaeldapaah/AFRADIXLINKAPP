import React, { useState, useEffect } from 'react';
import { Brain, Shield, Zap, Users } from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Smart algorithms connect diaspora professionals with perfect opportunities based on skills, interests, and impact goals."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Trust Network",
      description: "Every professional and organization goes through our rigorous verification process ensuring authentic connections."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Flexible Engagement",
      description: "Choose from remote work, mentorship, advisory roles, or project-based collaborations that fit your schedule."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Community",
      description: "Join a thriving network of diaspora professionals making meaningful impact across Africa."
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How AfradixLink Works</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with deep understanding of African diaspora needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                activeFeature === index 
                  ? 'bg-gradient-to-br from-orange-500 to-yellow-500 text-white transform scale-105' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;