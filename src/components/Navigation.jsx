import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="./src/assets/afr.png" alt="Logo" className="w-13 h-12" />
              <span className="text-xl font-bold text-slate-800">AfradixLink</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-orange-600 transition-colors">Home</a>
              <a href="#how-it-works" className="text-slate-600 hover:text-orange-600 transition-colors">How It Works</a>
              <a href="#features" className="text-slate-600 hover:text-orange-600 transition-colors">Features</a>
              <a href="#impact" className="text-slate-600 hover:text-orange-600 transition-colors">Impact</a>
              <a href="#contact" className="text-slate-600 hover:text-orange-600 transition-colors">Contact</a>
              <button 
                onClick={() => setIsWaitlistOpen(true)} 
                className="btn-primary"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-100">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-slate-600 hover:text-orange-600 transition-colors">Home</a>
                <a href="#how-it-works" className="text-slate-600 hover:text-orange-600 transition-colors">How It Works</a>
                <a href="#features" className="text-slate-600 hover:text-orange-600 transition-colors">Features</a>
                <a href="#impact" className="text-slate-600 hover:text-orange-600 transition-colors">Impact</a>
                <a href="#contact" className="text-slate-600 hover:text-orange-600 transition-colors">Contact</a>
                <button 
                  onClick={() => setIsWaitlistOpen(true)} 
                  className="btn-primary w-fit"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

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
    </>
  );
};

export default Navigation;
