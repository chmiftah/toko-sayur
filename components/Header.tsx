
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e7f3e9] bg-white/95 backdrop-blur-md">
      <div className="px-4 lg:px-10 py-3 mx-auto max-w-7xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-text-main group">
          <div className="size-8 text-primary flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-2xl">nest_eco_leaf</span>
          </div>
          <h2 className="text-xl font-black tracking-tight">Toko Sayur</h2>
        </a>
        
        <nav className="hidden lg:flex items-center gap-8">
          <a className="text-sm font-semibold text-text-main/70 hover:text-primary transition-colors" href="#home">Home</a>
          <a className="text-sm font-semibold text-text-main/70 hover:text-primary transition-colors" href="#products">Products</a>
          <a className="text-sm font-semibold text-text-main/70 hover:text-primary transition-colors" href="#ai-recipe">AI Chef</a>
          <a className="text-sm font-semibold text-text-main/70 hover:text-primary transition-colors" href="#how-it-works">Process</a>
          <a className="text-sm font-semibold text-text-main/70 hover:text-primary transition-colors" href="#subscription">Plans</a>
          <a className="text-sm font-semibold text-text-main/70 hover:text-primary transition-colors" href="#location">Store</a>
        </nav>

        <div className="flex gap-3">
          <button 
            onClick={() => {
              const el = document.getElementById('products');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-all text-black text-sm font-black shadow-sm active:scale-95"
          >
            <span>Order Sekarang</span>
          </button>
          <button 
            onClick={onOpenCart}
            className="relative flex items-center justify-center rounded-lg size-10 bg-surface-light text-text-main hover:bg-gray-100 transition-all active:scale-90"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full size-5 flex items-center justify-center ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
