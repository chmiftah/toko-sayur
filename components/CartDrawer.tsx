
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const isValid = customerName.trim() !== '' && customerAddress.trim() !== '' && customerPhone.trim() !== '' && items.length > 0;

  const handleWhatsAppCheckout = () => {
    if (!isValid) return;

    const itemStrings = items.map(item => `- ${item.name} (${item.quantity}x) @ Rp ${item.price.toLocaleString('id-ID')}`).join('%0A');
    const message = `*Order Baru dari Website Toko Sayur*%0A%0A*Customer Details:*%0ANama: ${customerName}%0AAlamat: ${customerAddress}%0ANo. HP: ${customerPhone}%0A%0A*Pesanan:*%0A${itemStrings}%0A%0A*Total: Rp ${totalPrice.toLocaleString('id-ID')}*%0A%0AMohon konfirmasi pengiriman. Terima kasih!`;
    
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex items-center justify-between bg-white z-10">
            <div>
              <h2 className="text-2xl font-black text-text-main flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_basket</span>
                Your Basket
              </h2>
              <p className="text-sm text-gray-500">{items.length} items selected</p>
            </div>
            <button 
              onClick={onClose}
              className="size-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar pb-32">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="size-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-gray-300 text-5xl font-light">shopping_cart_off</span>
                </div>
                <h3 className="text-lg font-bold text-gray-400">Your cart is empty</h3>
                <p className="text-sm text-gray-400 max-w-[200px] mt-2">Looks like you haven't picked your fresh harvest yet.</p>
                <button 
                  onClick={onClose}
                  className="mt-6 text-primary font-bold underline"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                   <h3 className="text-lg font-bold text-text-main border-b pb-2">Order Items</h3>
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div 
                        className="size-20 rounded-xl bg-cover bg-center shrink-0 border"
                        style={{ backgroundImage: `url("${item.image}")` }}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-text-main group-hover:text-primary transition-colors text-sm">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center bg-gray-50 rounded-lg p-1">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="size-6 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">remove</span>
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="size-6 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                            >
                              <span className="material-symbols-outlined text-sm">add</span>
                            </button>
                          </div>
                          <span className="font-black text-primary-dark text-sm">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-bold text-text-main flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">person_pin</span>
                    Delivery Details
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Recipient Name</label>
                      <input 
                        type="text" 
                        id="name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Budi Santoso"
                        className="w-full bg-gray-50 border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-all p-3 text-sm font-medium placeholder:text-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">WhatsApp Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="e.g. 081234567890"
                        className="w-full bg-gray-50 border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-all p-3 text-sm font-medium placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Delivery Address</label>
                      <textarea 
                        id="address"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="Full street address, block/unit number..."
                        rows={3}
                        className="w-full bg-gray-50 border-gray-200 rounded-xl focus:ring-primary focus:border-primary transition-all p-3 text-sm font-medium placeholder:text-gray-400 resize-none"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="p-6 bg-surface-light border-t space-y-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20 relative">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span className="text-green-600 font-bold uppercase text-[10px] bg-green-100 px-2 py-0.5 rounded">Free</span>
              </div>
              <div className="flex justify-between text-xl font-black text-text-main pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <button 
              disabled={!isValid}
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-lg shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale disabled:pointer-events-none group"
            >
              <svg className="w-6 h-6 fill-current group-hover:animate-bounce" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              {isValid ? 'Place WhatsApp Order' : 'Complete Details'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
