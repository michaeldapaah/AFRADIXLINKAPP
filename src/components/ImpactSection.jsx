import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const ImpactSection = () => {
  const testimonials = [
    {
      quote: "A cardiac surgeon in London is now mentoring medical staff at a clinic in Accra through AfradixLink. Remote consultations have improved patient outcomes by 40%.",
      source: "Healthcare Partnership Success Story",
      gradient: "from-orange-50 to-yellow-50"
    },
    {
      quote: "A software engineer in New York is advising three fintech startups in Lagos and Nairobi, helping them scale to serve 100,000+ users across East and West Africa.",
      source: "Tech Innovation Impact",
      gradient: "from-blue-50 to-indigo-50"
    }
  ];

  const sdgs = [
    {
      title: "SDG 8: Decent Work and Economic Growth",
      description: "Creating quality job opportunities across Africa",
      color: "green"
    },
    {
      title: "SDG 9: Industry, Innovation and Infrastructure",
      description: "Driving technological advancement and innovation",
      color: "blue"
    },
    {
      title: "SDG 10: Reduced Inequalities",
      description: "Bridging skill gaps and opportunity divides",
      color: "orange"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Real Impact Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how diaspora professionals are already making a difference across Africa
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-r ${testimonial.gradient} p-8 rounded-xl`}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <blockquote className="text-lg text-slate-700 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm text-slate-500">— {testimonial.source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-900 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Aligned with UN SDGs</h3>
            <div className="space-y-4">
              {sdgs.map((sdg, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className={`w-6 h-6 text-${sdg.color}-400`} />
                  <div>
                    <div className="font-semibold">{sdg.title}</div>
                    <div className="text-sm text-slate-300">{sdg.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;