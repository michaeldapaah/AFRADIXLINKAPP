import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Diaspora professionals showcase their skills, experience, and desire to contribute to Africa's growth."
    },
    {
      number: "02", 
      title: "Organizations Post Opportunities",
      description: "Startups, NGOs, and governments post roles, projects, and advisory positions they need filled."
    },
    {
      number: "03",
      title: "AI Engine Matches",
      description: "Our intelligent matching system connects the right talent with the right opportunities."
    },
    {
      number: "04",
      title: "Collaboration Begins",
      description: "Start working together remotely, through mentorship, or as an advisor to drive impact."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Simple, Effective Process</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From connection to collaboration in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-6xl font-bold text-orange-200 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connecting arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-orange-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;