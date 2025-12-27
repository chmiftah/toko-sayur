
import React from 'react';
import { SUBSCRIPTIONS } from '../constants';
import { SubscriptionPlan } from '../types';

const SubscriptionPlans: React.FC = () => {
  return (
    <section className="py-24 bg-white scroll-mt-20" id="subscription">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-primary font-black tracking-widest text-xs uppercase">Membership</span>
          <h2 className="text-4xl lg:text-5xl font-black text-text-main mt-4 mb-4">Save with Fresh Plans</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Never run out of healthy nutrition. Flexible weekly or monthly plans tailored for your family size.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {SUBSCRIPTIONS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlanCard: React.FC<{ plan: SubscriptionPlan }> = ({ plan }) => (
  <div className={`flex-1 border rounded-[2.5rem] p-10 flex flex-col transition-all duration-300 ${
    plan.popular 
      ? 'border-2 border-primary bg-surface-light relative shadow-2xl scale-105 z-10' 
      : 'border-gray-200 hover:border-primary/50'
  }`}>
    {plan.popular && (
      <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-black text-xs font-black px-4 py-2 rounded-full shadow-lg">MOST POPULAR</div>
    )}
    <div className="flex justify-between items-center mb-6">
      <h3 className="font-black text-3xl">{plan.name}</h3>
      <span className={`material-symbols-outlined text-4xl p-3 rounded-2xl ${plan.popular ? 'bg-primary text-black' : 'bg-gray-50 text-gray-400'}`}>
        {plan.icon}
      </span>
    </div>
    <p className="text-gray-500 mb-8 text-base leading-relaxed">{plan.description}</p>
    <div className="text-5xl font-black mb-8 flex items-baseline gap-1">
      <span className="text-2xl font-bold">Rp</span>
      {plan.price}
      <span className="text-base font-normal text-gray-400">{plan.unit}</span>
    </div>
    <ul className="space-y-4 mb-10 flex-1">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-4 text-base font-medium text-gray-700">
          <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary-dark text-sm font-bold">check</span> 
          </div>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all shadow-lg active:scale-95 ${
      plan.popular 
        ? 'bg-primary text-black hover:bg-primary-dark shadow-primary/20' 
        : 'bg-white border-2 border-gray-100 text-text-main hover:bg-surface-light'
    }`}>
      {plan.popular ? 'Unlock This Plan' : 'Select Plan'}
    </button>
  </div>
);

export default SubscriptionPlans;
