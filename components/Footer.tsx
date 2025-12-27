
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">nest_eco_leaf</span>
              <h2 className="text-2xl font-bold">Toko Sayur</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing the freshest farm produce directly to your neighborhood. Healthy living made simple.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#home">Home</a></li>
              <li><a className="hover:text-primary transition-colors" href="#products">Products</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Delivery Info</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for 10% off your first order.</p>
            <div className="flex gap-2">
              <input 
                className="w-full bg-gray-800 border-none rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-primary text-white" 
                placeholder="Email address" 
                type="email"
              />
              <button className="bg-primary text-black rounded-lg px-4 py-2 font-bold hover:bg-white transition-colors">Go</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Toko Sayur Indonesia. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white transition-colors" href="#">Instagram</a>
            <a className="hover:text-white transition-colors" href="#">Facebook</a>
            <a className="hover:text-white transition-colors" href="#">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
