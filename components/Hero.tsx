
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-background-cream py-12 lg:py-20" id="home">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold w-fit mx-auto lg:mx-0">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span> 
              Free delivery for first order
            </div>
            <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-text-main">
              Farm Fresh Vegetables <span className="text-primary block">Delivered Daily</span>
            </h1>
            <h2 className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Order fresh, organic vegetables directly from local farms via WhatsApp. Healthy, clean, and delivered straight to your doorstep within hours.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-primary hover:bg-primary-dark transition-all text-black text-base font-bold shadow-lg shadow-primary/20 transform hover:-translate-y-1">
                <span className="material-symbols-outlined">chat</span>
                <span>Shop via WhatsApp</span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl h-12 px-6 bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-text-main text-base font-bold">
                <span>View Products</span>
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative z-10">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-90 translate-y-10"></div>
              <div 
                className="w-full h-full bg-center bg-cover rounded-2xl shadow-2xl relative z-10" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuClwUbs2SP9wvE9kwZ9KUd5IH7V4XpwqFv_gJNGqU2XI2Sb9N17WRXUpunbaSdSHbImofna-ugLn9LtEyxLuWmSnP5Anrk0Qy2HRy0XaAgloiu4g-GIAwpdkByDics7gytKES2iWdcxOvFrqzMEHJIOWhPs1ZCPBHOgrASPpib4xSgP2uUEHfqo7QDsmv60T9RejAJNJ0URR-9xuKSXUD_WorTcS9kUXux5-kQ-HDrlaAQ-mAO7cNgANfuUBF9ncJeNEkhMfDMYUeI")'}}
              ></div>
              <div className="absolute -bottom-6 -right-6 lg:right-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20 animate-bounce delay-700">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <span className="material-symbols-outlined">check_seal</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Quality</p>
                  <p className="text-sm font-bold text-text-main">100% Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
