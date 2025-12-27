
import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductBundleListProps {
  onAddToCart: (product: Product) => void;
}

const ProductBundleList: React.FC<ProductBundleListProps> = ({ onAddToCart }) => {
  return (
    <section className="py-20 bg-surface-light scroll-mt-20" id="products">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-dark text-xs font-bold mb-3">FRESH ARRIVALS</div>
            <h2 className="text-3xl md:text-4xl font-black text-text-main mb-2">Our Seasonal Harvest</h2>
            <p className="text-gray-500 max-w-lg">Every morning we curate the best of our harvest into ready-to-cook bundles for your kitchen convenience.</p>
          </div>
          <button className="flex items-center text-primary font-black hover:gap-2 transition-all" href="#">
            Browse Full Menu <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product, onAddToCart: (product: Product) => void }> = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group h-full">
    <div className="relative h-64 overflow-hidden">
      <div 
        className="h-full w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
        style={{ backgroundImage: `url("${product.image}")` }}
      ></div>
      {product.tag && (
        <span className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black px-2 py-1 rounded-lg shadow-lg uppercase tracking-wider">{product.tag}</span>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    
    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-black text-xl text-text-main mb-2 group-hover:text-primary-dark transition-colors">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{product.description}</p>
      
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
        <div>
          <span className="text-xs text-gray-400 block font-bold">Starts from</span>
          <span className="text-xl font-black text-primary-dark">Rp {product.price.toLocaleString('id-ID')}</span>
        </div>
        <button 
          onClick={() => onAddToCart(product)}
          className="bg-primary/10 text-primary-dark hover:bg-primary hover:text-black transition-all p-3 rounded-2xl active:scale-90"
          title="Add to Shopping Cart"
        >
          <span className="material-symbols-outlined font-bold">add_shopping_cart</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProductBundleList;
