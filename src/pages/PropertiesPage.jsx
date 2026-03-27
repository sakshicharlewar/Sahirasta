import React from 'react';
import { useNavigate } from 'react-router-dom';

const properties = [
  { id: 1, score: '9.4', title: 'The Almaris Residences', location: 'Greater Kailash II, New Delhi', price: '₹1.2L', beds: '3 BHK', sqft: '2,400 sqft', commute: '5 min', commuteIcon: 'directions_transit', saved: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChrgiE-GX-CWwlXHN1Bu6jLxYt8q43kPqVKF35ugsyH51Py0MOsPS0pro9eQ95CrqazS4F2LgL1XBOHnHwvMMfBPK1AIorwqKr7LoRIAEM0c6FSLcqIu3WnBAy9NfpHPvddaVCRa6_SEtW6SvXyBtYhfd6t8UHXwCMo6lPolagQCLI7L5ZPC156u0iXmDkxt6L9s3v7-YHBKisPNtRMvusb4kYKWdSFrnYeWHWT2cy2DBXAEO4TIhZyQC14hzYOU5iH0h_NprryTuf' },
  { id: 2, score: '8.1', title: 'Shanti Niketan Floor', location: 'Chanakyapuri, New Delhi', price: '₹2.8L', beds: '4 BHK', sqft: '3,600 sqft', commute: '12 min', commuteIcon: 'directions_car', saved: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUCRPoVv0KdRktCLPZ4Cz1q6bX04Vxq8QoTGI1AhYTnLuEZJeOXcm6CqDBmE-7SX2M5kMKcmq0zHc10_0TWnx3a72aDW1iHTTahMJufSvNCJ_hMBjmIN3YAvxsuu6vgBoQTGa8_h0SEw4RCXB4hkSajC3tfgfU13tGcmmEkR8WKIm6OMPclzYSzWxUaP2q5T6OIEQgVn9kzdW6-sXisNYVqadT0HC-jpTyvJC4DCLmYraI1IXVGtJfDazf0xLPIr4XVCi2y3BQcGZ2' },
  { id: 3, score: '7.5', title: 'Vasant Vihar Terrace', location: 'Vasant Vihar, New Delhi', price: '₹85k', beds: '2 BHK', sqft: '1,800 sqft', commute: '8 min', commuteIcon: 'pedal_bike', saved: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6klEtqNCn1t5idJi9otnWTaWTXjUIyWfJUZEj5CAfNluFoKHcBA45jy7XjLqriZBm69exB4Lvur4HDlTlFGN1JArVncQRqFRfUD-xKPU_OCgaVDGaCUKeq16fTtnfR3oHOJUzyM11DYUNseC4mGRFIRTN-k6BrDtNFaiZ2Uvjb9GC1nB8IAxMTqnOSrFcJxD3nmEC24NymSW4CQWTW6H9Zio3Wl538K80aJ45F0zPwr-07KoxSO8nNkDdJO8pkda-Dni6OM8a4UQM' },
  { id: 4, score: '8.9', title: 'Defence Colony Studio', location: 'Def Col, New Delhi', price: '₹65k', beds: '1 BHK', sqft: '950 sqft', commute: '4 min', commuteIcon: 'directions_bus', saved: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlWwgMKWscRBeLdX7tIGiwovJI0Lo3B2hB9Ms0C1FE329sSr5SrqHaZF8iXopD--scP8GiRbMhYbkGwfsA_In4wm104kWwm315Gqs5LnbnYUcwRZohm6DQ8SpTn4Xv4PvXff_jSC_LoQAQ1agqVahwHrUzEuLm36aYozmoH8wrlVlTV_VSrhWF51sTYKCnGZsmY2z9dotugYyUxN-g2SYAhK-P_DwTuNONozTJtaitKfB1Qu1nBmIqFuKunTZRFssd8W2RSKyqKTjz' },
];

const DashboardSidebar = ({ navigate, active }) => (
  <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-6 gap-8 w-80 bg-slate-50 border-r-0">
    <div className="flex flex-col gap-6">
      <h2 className="font-headline text-xl font-bold text-on-surface">Filters</h2>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">Monthly Budget</span>
        <div className="bg-surface-container-high rounded-xl p-4 flex flex-col gap-2">
          <input className="w-full accent-primary" max="200000" min="10000" step="5000" type="range" />
          <div className="flex justify-between text-sm font-semibold text-on-surface-variant">
            <span>₹10k</span><span>₹200k+</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">Max Commute Time</span>
        <div className="flex flex-wrap gap-2">
          {['15 min', '30 min', '45 min', '60+ min'].map((t, i) => (
            <button key={t} className={`px-3 py-2 rounded-xl text-xs font-bold ${i === 0 ? 'bg-white shadow-sm text-primary border border-primary/10' : 'bg-surface-container text-on-surface-variant hover:bg-white transition-all'}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">Property Type</span>
        <div className="flex flex-col gap-2">
          {[['Apartments', true], ['Independent Floor', false], ['Villas', false]].map(([label, checked]) => (
            <label key={label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-all cursor-pointer group">
              <input defaultChecked={checked} className="rounded border-none bg-surface-container-highest text-primary focus:ring-primary/20" type="checkbox" />
              <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary">{label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-label font-bold uppercase tracking-widest text-secondary">Preferred Commute</span>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center gap-2 p-3 rounded-xl bg-white shadow-sm border border-primary/10">
            <span className="material-symbols-outlined text-primary text-xl">directions_car</span>
            <span className="text-xs font-bold">Driving</span>
          </button>
          <button className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low hover:bg-white transition-all">
            <span className="material-symbols-outlined text-secondary text-xl">train</span>
            <span className="text-xs font-bold">Metro</span>
          </button>
        </div>
      </div>
    </div>
    <div className="mt-auto pt-6">
      <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">Apply 12 Filters</button>
    </div>
  </aside>
);

const PropertiesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-6 py-3 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-black text-blue-700 tracking-tight font-headline cursor-pointer" onClick={() => navigate('/dashboard')}>SahiRasta</span>
            <nav className="hidden md:flex gap-6 items-center">
              <a className="text-blue-700 font-bold border-b-2 border-orange-500 pb-1 font-body" href="#">Properties</a>
              <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/map-view')}>Map View</a>
              <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/saved-homes')}>Saved Homes</a>
              <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/commute-insights')}>Insights</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-slate-50"><span className="material-symbols-outlined text-slate-600">notifications</span></button>
            <button className="p-2 rounded-full hover:bg-slate-50"><span className="material-symbols-outlined text-slate-600">settings</span></button>
            <img alt="User" className="w-10 h-10 rounded-full object-cover cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXP10LLQ9pIrajiQGrh7oQV2ViJgM-_MKSPDES5B9tbGcX7YAopN1O-yw461quFywK9vqXqP2zG9heVScpIbegvKXdBL_V92vTo3zGGGIKrQ0EkNjRHsC4Wcb1pwskZpx2kmEJpdsLbFYQNRvI9IfAUZ88y6t8R7_X-7PCnHmTnzOlBEQIewqSU6aND1utSoJW0dmUnlLqjZ4SL-Dn9yNkvHS7xbE9NAyPhshlOst8mvMGxMeGJ7Cl7FUW8b0FbIqSWAKVb0tK9BjA" onClick={() => navigate('/dashboard')} />
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        <DashboardSidebar navigate={navigate} />
        <main className="flex-1 bg-surface relative" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(193,198,214,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-headline font-extrabold text-on-surface mb-4 leading-tight">Heritage living meets modern commute.</h1>
                <p className="text-secondary max-w-lg leading-relaxed">Discover 1,240 verified properties tailored to your work-life rhythm in Nagpur and beyond.</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-lowest rounded-full font-bold text-sm shadow-sm hover:bg-white transition-all">
                <span className="material-symbols-outlined text-lg">swap_vert</span>Sort by: Relevance
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {properties.map((p) => (
                <div key={p.id} className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-72 overflow-hidden">
                    <img alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={p.img} />
                    <div className="absolute top-4 left-4 px-4 py-3 rounded-xl border-l-[3px] border-tertiary flex flex-col shadow-2xl" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)' }}>
                      <span className="text-[0.6rem] font-label font-bold uppercase tracking-wider text-secondary">Commute Score</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-headline font-extrabold text-on-surface">{p.score}</span>
                        <span className="text-xs font-bold text-tertiary">/10</span>
                      </div>
                    </div>
                    <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-error transition-all">
                      <span className="material-symbols-outlined" style={p.saved ? { fontVariationSettings: "'FILL' 1" } : {}}>favorite</span>
                    </button>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-headline font-bold text-on-surface">{p.title}</h3>
                        <p className="text-sm text-secondary">{p.location}</p>
                      </div>
                      <span className="text-xl font-headline font-extrabold text-primary">{p.price}<span className="text-xs font-medium text-secondary ml-1">/mo</span></span>
                    </div>
                    <div className="flex items-center gap-6 py-4 bg-surface-container-low rounded-xl px-4">
                      <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">bed</span><span className="text-sm font-bold">{p.beds}</span></div>
                      <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">square_foot</span><span className="text-sm font-bold">{p.sqft}</span></div>
                      <div className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary text-lg">{p.commuteIcon}</span><span className="text-sm font-bold">{p.commute}</span></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Card */}
              <div className="flex flex-col bg-primary-container rounded-xl overflow-hidden relative p-8 justify-center items-start text-white xl:col-span-2">
                <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                  <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                </div>
                <h2 className="text-3xl font-headline font-extrabold mb-4 relative z-10">Don't see your perfect match?</h2>
                <p className="text-lg opacity-90 mb-8 max-w-md relative z-10">Our AI-guided pathfinder can scan unlisted off-market properties based on your office location and lifestyle preferences.</p>
                <button className="px-8 py-4 bg-tertiary text-white rounded-xl font-bold hover:bg-tertiary-container transition-all shadow-xl shadow-black/20 relative z-10 active:scale-95">Start AI Search Journey</button>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="flex items-center gap-2 p-1 bg-surface-container-low rounded-full">
                {[1, 2, 3].map((n) => (
                  <button key={n} className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${n === 1 ? 'bg-white shadow-sm text-primary' : 'hover:bg-white text-secondary transition-all'}`}>{n}</button>
                ))}
                <span className="px-2 text-secondary">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white text-secondary font-bold transition-all">14</button>
                <button className="flex items-center gap-2 pl-4 pr-6 py-2 rounded-full bg-white shadow-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">
                  Next <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] px-6 py-3 flex justify-between items-center z-50">
        {[['home', 'Explore', true], ['favorite', 'Saved', false], ['trending_up', 'Trends', false], ['person', 'Profile', false]].map(([icon, label, active]) => (
          <button key={label} className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-slate-400'}`}>
            <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
            <span className="text-[10px] font-bold">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default PropertiesPage;
