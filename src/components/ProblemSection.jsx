import React from 'react';
import { Target } from 'lucide-react';

const ProblemSection = () => {
  const stats = [
    {
      value: "70K+",
      label: "Annual Brain Drain",
      description: "Skilled professionals leaving Africa yearly",
      color: "red"
    },
    {
      value: "15M+",
      label: "Diaspora Talent",
      description: "African professionals ready to contribute",
      color: "green"
    },
    {
      value: "$40B",
      label: "Annual Remittances",
      description: "Imagine if knowledge flowed too",
      color: "blue"
    },
    {
      value: "100+",
      label: "Organizations",
      description: "Seeking diaspora expertise",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
              The Challenge We're Solving
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Over <span className="font-bold text-orange-600">70,000 skilled Africans</span> leave every year, creating critical gaps in healthcare, technology, and education. Meanwhile, millions abroad want to contribute back home but lack a trusted, professional way to do so.
            </p>
            <div className="flex items-start space-x-4 bg-orange-50 p-6 rounded-xl">
              <Target className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Our Mission</h3>
                <p className="text-slate-600">Transform brain drain into brain circulation by creating meaningful professional connections that benefit both diaspora talent and African development.</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-${stat.color}-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                <div className={`text-${stat.color}-700 font-medium`}>{stat.label}</div>
                <div className={`text-sm text-${stat.color}-600 mt-2`}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;