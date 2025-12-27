
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-text-main mb-4">Why Choose Toko Sayur?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We bridge the gap between local farmers and your kitchen table with transparency and speed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="local_florist" 
            title="Freshness Guarantee" 
            desc="Picked daily from the farm at sunrise to ensure peak freshness when it arrives at your door." 
          />
          <FeatureCard 
            icon="rocket_launch" 
            title="Fast Delivery" 
            desc="Same-day delivery service. Order before 10 AM and get your veggies by lunch time." 
          />
          <FeatureCard 
            icon="health_and_safety" 
            title="Organic Options" 
            desc="Certified organic produce free from harmful pesticides. Safe for you and your family." 
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: string, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="group p-8 rounded-2xl bg-surface-light border border-transparent hover:border-primary/30 transition-all hover:shadow-lg">
    <div className="size-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-text-main mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default Features;
