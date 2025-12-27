
import React, { useState } from 'react';
import { generateRecipeFromBundles } from '../geminiService';
import { PRODUCTS } from '../constants';
import { CartItem } from '../types';

interface GeminiRecipeAIProps {
  cartItems: CartItem[];
}

const GeminiRecipeAI: React.FC<GeminiRecipeAIProps> = ({ cartItems }) => {
  const [recipe, setRecipe] = useState<{ title: string, ingredients: string[], steps: string[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // Use cart items if available, otherwise use all products as fallback
    const sourceItems = cartItems.length > 0 ? cartItems : PRODUCTS;
    const productNames = sourceItems.map(p => p.name);
    
    const result = await generateRecipeFromBundles(productNames);
    if (result) {
      setRecipe(result);
    }
    setLoading(false);
  };

  return (
    <section className="py-24 bg-white scroll-mt-20" id="ai-recipe">
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background-cream to-white border border-primary/20 rounded-[3rem] p-8 lg:p-16 text-center">
          {/* Decorative floating icons */}
          <div className="absolute top-10 left-10 text-primary/20 animate-pulse">
            <span className="material-symbols-outlined text-6xl">skillet</span>
          </div>
          <div className="absolute bottom-10 right-10 text-primary/20 animate-pulse delay-500">
            <span className="material-symbols-outlined text-6xl">nutrition</span>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/30 text-primary-dark font-black text-xs uppercase tracking-widest mb-6 shadow-sm">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              Powered by AI Chef
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-text-main leading-tight">
              Don't know what to <span className="text-primary-dark underline decoration-wavy underline-offset-8 decoration-primary/50">cook?</span>
            </h2>
            
            <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              {cartItems.length > 0 
                ? "Let's create something delicious with the fresh bundles in your cart!"
                : "Our AI Chef can suggest a healthy recipe based on today's freshest farm bundles."}
            </p>
            
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="group bg-primary text-black px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all disabled:opacity-50 flex items-center gap-3 mx-auto shadow-xl shadow-primary/30 active:scale-95"
            >
              {loading ? (
                <>
                  <span className="animate-spin material-symbols-outlined text-2xl">refresh</span>
                  Kitchen is preparing...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-2xl group-hover:rotate-12 transition-transform">restaurant_menu</span>
                  Get Cooking Inspiration
                </>
              )}
            </button>
          </div>

          {recipe && (
            <div className="mt-16 text-left bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-white/50 animate-in fade-in zoom-in duration-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-gray-100 pb-8">
                <h3 className="text-3xl font-black text-text-main flex items-center gap-4">
                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-black font-bold">menu_book</span>
                  </div>
                  {recipe.title}
                </h3>
                <div className="flex gap-2">
                   <div className="px-4 py-2 rounded-xl bg-surface-light border text-sm font-bold flex items-center gap-2">
                     <span className="material-symbols-outlined text-primary text-sm">timer</span> 20-30 Min
                   </div>
                   <div className="px-4 py-2 rounded-xl bg-surface-light border text-sm font-bold flex items-center gap-2">
                     <span className="material-symbols-outlined text-primary text-sm">eco</span> Healthy
                   </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                <div className="bg-surface-light/50 p-8 rounded-3xl border border-gray-50">
                  <h4 className="font-black text-xl mb-6 flex items-center gap-3 text-primary-dark">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Ingredients
                  </h4>
                  <ul className="grid gap-3">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="text-gray-600 text-base font-medium flex items-start gap-3 bg-white p-3 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                        <span className="text-primary font-black mt-0.5">•</span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-xl mb-6 flex items-center gap-3 text-primary-dark">
                    <span className="material-symbols-outlined">format_list_numbered</span>
                    Cooking Steps
                  </h4>
                  <ol className="space-y-8 relative">
                    <div className="absolute left-[13px] top-6 bottom-6 w-0.5 bg-gray-100 -z-10"></div>
                    {recipe.steps.map((step, i) => (
                      <li key={i} className="flex gap-6 group">
                        <span className="shrink-0 size-7 bg-primary text-black font-black text-xs rounded-full flex items-center justify-center shadow-sm ring-4 ring-white group-hover:scale-110 transition-transform">
                          {i + 1}
                        </span>
                        <p className="text-gray-600 text-base leading-relaxed pt-0.5">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiRecipeAI;
