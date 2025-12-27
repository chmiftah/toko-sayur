
import React from 'react';

const HowToOrder: React.FC = () => {
  return (
    <section className="py-24 bg-background-cream scroll-mt-20" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-16">
          <span className="text-primary font-black tracking-widest text-xs uppercase">Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-text-main mt-4">Simple Shopping Flow</h2>
        </div>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 z-0">
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-green-300 to-transparent -z-10"></div>
          
          <Step 
            icon="search" 
            step="1. Choose Bundles" 
            desc="Pick from our expertly curated vegetable mixes or custom boxes." 
          />
          <Step 
            icon="shopping_basket" 
            step="2. Check Basket" 
            desc="Review your selections and adjust quantities as needed." 
          />
          <Step 
            icon="chat" 
            step="3. Order via WhatsApp" 
            desc="Confirm instantly with our friendly team. No complex forms." 
          />
        </div>
      </div>
    </section>
  );
};

const Step: React.FC<{ icon: string, step: string, desc: string }> = ({ icon, step, desc }) => (
  <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl md:bg-transparent md:shadow-none w-full md:w-1/3 hover:scale-105 transition-transform duration-300">
    <div className="size-24 bg-white border-8 border-green-50 rounded-full flex items-center justify-center text-primary shadow-lg ring-1 ring-primary/20">
      <span className="material-symbols-outlined text-5xl">{icon}</span>
    </div>
    <div className="space-y-2">
      <h3 className="font-black text-xl text-text-main">{step}</h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">{desc}</p>
    </div>
  </div>
);

export default HowToOrder;
