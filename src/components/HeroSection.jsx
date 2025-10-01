import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const HeroSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-600 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-600 rounded-full animate-pulse delay-3000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-800">Turning Africa's</span><br/>
              <span className="gradient-text">brain drain</span><br/>
              <span className="text-slate-800">into brain gain</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              AfradixLink connects skilled diaspora talent with opportunities across Africa — through AI-powered matching, verified trust, and a professional community driving meaningful impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setIsWaitlistOpen(true)} className="btn-primary">
                Get Started
              </button>
              <button onClick={() => setIsWaitlistOpen(true)}className="btn-primary">
                Join Waitlist
              </button>
            </div>
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
          
          
          <div className="relative">
            <div className="w-full h-100 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-white p-8">
                <img src="./src/assets/afr.png" alt="Logo" className="w-18 h-18 text-center" />
                <h3 className="text-2xl font-bold mb-2">Africa Connected</h3>
                <p className="text-slate-300">Bridging talent across continents</p>
              </div>
              
              {/* Animated connecting lines */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-px h-20 bg-gradient-to-b from-orange-400 to-transparent animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-px h-20 bg-gradient-to-t from-yellow-400 to-transparent animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-20 h-px bg-gradient-to-r from-orange-400 to-transparent animate-pulse delay-2000"></div>
                <div className="absolute top-1/2 right-0 w-20 h-px bg-gradient-to-l from-yellow-400 to-transparent animate-pulse delay-3000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );
};

export default HeroSection;