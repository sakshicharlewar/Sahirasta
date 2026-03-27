import React from 'react';

const SearchBento = () => {
  return (
    <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-[0_12px_40px_rgba(25,28,29,0.06)] max-w-5xl border border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        <div className="md:col-span-4 space-y-2">
          <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold px-1">Workplace location</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">location_on</span>
            <input 
              className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-outline" 
              placeholder="HITEC City, MIDC, Kharadi, etc." 
              type="text"
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-2">
          <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold px-1">Max commute time</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">schedule</span>
            <input 
              className="w-full pl-12 pr-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-outline" 
              placeholder="20, 30, 45 minutes" 
              type="text"
            />
          </div>
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold px-1">Transport</label>
          <select className="w-full px-4 py-4 bg-surface-container-high rounded-xl border-none focus:ring-1 focus:ring-primary/20 transition-all text-on-surface-variant appearance-none">
            <option>Car</option>
            <option>Bike</option>
            <option>Bus</option>
            <option>Metro</option>
            <option>Walking</option>
          </select>
        </div>
        <div className="md:col-span-3">
          <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-headline font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all active:scale-95">
            Show Me Commute-Smart Homes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBento;
