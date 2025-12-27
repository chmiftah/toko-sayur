
import React from 'react';

const LocationStore: React.FC = () => {
  return (
    <section className="py-24 bg-white scroll-mt-20" id="location">
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        <div className="bg-surface-light rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/50">
          <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
            <span className="text-primary font-black tracking-widest text-xs uppercase mb-4">Physical Store</span>
            <h2 className="text-4xl lg:text-5xl font-black text-text-main mb-8">Visit Our Green Hub</h2>
            <p className="text-gray-500 mb-10 text-lg leading-relaxed">Experience the freshness in person. Our headquarters is where the magic happens every morning at dawn.</p>
            <div className="space-y-8">
              <ContactItem icon="location_on" title="Jakarta South HQ" value="Jl. Kebun Sayur No. 123, Jakarta Selatan, 12430" />
              <ContactItem icon="schedule" title="Market Hours" value={<>Mon - Fri: 06:00 - 20:00<br/><span className="text-primary-dark font-bold">Weekend: 06:00 - 18:00</span></>} />
              <ContactItem icon="call" title="Hotline" value="+62 812 3456 7890" />
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="mt-12 w-fit flex items-center gap-3 bg-white px-8 py-4 rounded-2xl font-black text-text-main shadow-md hover:bg-primary transition-all group"
            >
              Open in Google Maps 
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">open_in_new</span>
            </a>
          </div>
          <div className="lg:w-1/2 min-h-[500px] bg-gray-200 relative">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQcrVwTnTWpuYd2UnyYiztkEJI68E8x-AMtA91S41mk8kiNE6byLDW3tXkFtguHljSkxd_mkq4nn3v_BUNb1pKHknzU2306RnkLazZdo1Dx_vbvo-dUm6LkxBPVHE0aqY3WIPVqzafT4HKbX3D44cJxnLYwCv8Wn8is9Bz_kAA6f1yJHGZv_oWbzbW4u0MzskKQN140znvcJoZ7uCr5qW9dJ8UdmYkQyOCpv_yag5DuWICGtX3jaeCiF2eXo_h-YNtSaX5ba_uYOk")' }}
            >
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce">
                  <div className="size-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <span className="material-symbols-outlined font-black">place</span>
                  </div>
                  <div>
                    <span className="font-black text-text-main block leading-none">Toko Sayur HQ</span>
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Jakarta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: string, title: string, value: React.ReactNode }> = ({ icon, title, value }) => (
  <div className="flex items-start gap-6 group">
    <div className="size-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
      <span className="material-symbols-outlined text-2xl">{icon}</span>
    </div>
    <div>
      <h4 className="font-black text-xl text-text-main mb-1">{title}</h4>
      <p className="text-gray-500 leading-relaxed">{value}</p>
    </div>
  </div>
);

export default LocationStore;
