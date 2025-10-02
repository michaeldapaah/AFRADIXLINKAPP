import React from 'react';
import { Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Find Opportunities", href: "#" },
        { name: "Post a Job", href: "#" },
        { name: "Join Community", href: "#" },
        { name: "Success Stories", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    }
  ];

  const socialIcons = [
    { Icon: Linkedin, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Facebook, href: "#" }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-white-300 to-white-500 rounded-lg flex items-center justify-center">
              <img src="/afr.png" alt="Logo" className="w-13 h-8" />
              </div>
              <span className="text-xl font-bold">AfradixLink</span>
            </div>
            <p className="text-slate-400">
              Connecting African diaspora talent with opportunities that drive meaningful impact across the continent.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <Icon 
                  key={index}
                  className="w-5 h-5 text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" 
                />
              ))}
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-slate-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="hover:text-orange-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 AfradixLink. All rights reserved. Built with ❤️ for Africa's future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;