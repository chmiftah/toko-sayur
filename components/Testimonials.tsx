
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-surface-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <h2 className="text-3xl font-black text-text-main mb-12 text-center">Love from Neighbors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-lg fill-current">
                    {i < Math.floor(t.rating) ? 'star' : 'star_half'}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div 
                  className="size-10 rounded-full bg-gray-200 bg-cover bg-center" 
                  style={{ backgroundImage: `url("${t.avatar}")` }}
                ></div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
