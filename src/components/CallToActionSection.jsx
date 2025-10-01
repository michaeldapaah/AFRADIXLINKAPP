import React from 'react';
import { useState } from 'react';
import WaitlistForm from './WaitlistForm';

const CallToActionSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(true);
  const stats = [
    {
      value: "5000+",
      label: "Pre-registered Users",
      color: "orange"
    },
    {
      value: "200+",
      label: "Partner Organizations",
      color: "yellow"
    },
    {
      value: "25",
      label: "African Countries",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Be part of reversing Africa's brain drain
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
          Join thousands of diaspora professionals and organizations already building Africa's future together
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button onClick={()=> setIsWaitlistOpen(true)} className="btn-primary">
            Sign Up for Early Access
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-all">
            Partner With Us
          </button>
        </div>
        {/* ✅ Waitlist Modal */}
        {isWaitlistOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-lg">
              {/* Close button */}
              <button 
                onClick={() => setIsWaitlistOpen(false)} 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">Join the AfradixLink Waitlist</h2>
              <WaitlistForm /> 
            </div>
          </div>
        )}
        
        
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;