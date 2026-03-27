import React from 'react';
import { useNavigate } from 'react-router-dom';

const MapViewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-surface text-on-surface font-body">
      <header className="bg-white shadow-sm fixed top-0 z-50 flex justify-between items-center w-full px-6 py-3">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black text-blue-700 tracking-tight font-headline cursor-pointer" onClick={() => navigate('/dashboard')}>SahiRasta</span>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/properties')}>Properties</a>
            <a className="text-blue-700 font-bold border-b-2 border-orange-500 pb-1">Map View</a>
            <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/saved-homes')}>Saved Homes</a>
            <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/commute-insights')}>Insights</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-slate-50"><span className="material-symbols-outlined">notifications</span></button>
          <button className="p-2 rounded-full hover:bg-slate-50"><span className="material-symbols-outlined">settings</span></button>
          <img alt="User" className="w-10 h-10 rounded-full object-cover cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXP10LLQ9pIrajiQGrh7oQV2ViJgM-_MKSPDES5B9tbGcX7YAopN1O-yw461quFywK9vqXqP2zG9heVScpIbegvKXdBL_V92vTo3zGGGIKrQ0EkNjRHsC4Wcb1pwskZpx2kmEJpdsLbFYQNRvI9IfAUZ88y6t8R7_X-7PCnHmTnzOlBEQIewqSU6aND1utSoJW0dmUnlLqjZ4SL-Dn9yNkvHS7xbE9NAyPhshlOst8mvMGxMeGJ7Cl7FUW8b0FbIqSWAKVb0tK9BjA" onClick={() => navigate('/dashboard')} />
        </div>
      </header>

      <main className="relative h-screen w-full pt-[60px] overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0 bg-slate-200">
          <img alt="City map" className="w-full h-full object-cover opacity-60 grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAZyKnNEMLdbnjQs5bJwiaCEn9qrq0gIcobo5LwpyxwrrJVt4JCNSozlqh4KcGhtOYbJXKry1c6xVSQe2RlQUUhepTdpkLWu1C8tSBMAMEIqz-iHm-TYejKmzGlbueJ_qvvxDAcPQ4jgd-WSPQlb14ryvaNtPeKaaaiv9RHbT6REUEuInEMwJNVcZEE0_9Egc8WtrgmH4pvzpEMlqE_ztX_aHYakZ9r3d6uPwarHHPJ79rboxNi6RX8r7ckptrAUksgTrGjOSong_C" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 40% 40%, rgba(34,197,94,0.15) 0%, transparent 70%), radial-gradient(circle at 60% 55%, rgba(234,179,8,0.15) 0%, transparent 60%), radial-gradient(circle at 75% 30%, rgba(239,68,68,0.15) 0%, transparent 50%)' }}></div>
        </div>

        {/* Search */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4">
          <div className="rounded-xl shadow-lg p-2 flex items-center gap-2" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
            <div className="flex-1 flex items-center bg-surface-container-high rounded-lg px-4 py-2">
              <span className="material-symbols-outlined text-secondary mr-2">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-on-surface w-full placeholder:text-secondary/60 text-sm" placeholder="Search locality, workplace, or property..." type="text" />
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined">tune</span>Filters
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-10 left-6 z-20 flex flex-col gap-4">
          <div className="p-4 rounded-xl shadow-md border-l-4 border-tertiary" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
            <h4 className="font-headline text-sm font-bold mb-3">COMMUTE INTENSITY</h4>
            {[['bg-green-500', 'Optimal (<15 min)'], ['bg-yellow-500', 'Average (15-30 min)'], ['bg-red-500', 'Strenuous (>45 min)']].map(([color, label]) => (
              <div key={label} className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 rounded-full ${color}`}></div>
                <span className="text-xs font-label uppercase tracking-wider text-secondary">{label}</span>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl shadow-lg flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', borderLeft: '2px solid #8e4d00' }}>
            <div><span className="text-[0.65rem] font-label font-bold text-tertiary uppercase tracking-[0.1em] block">Commute Score</span><span className="text-2xl font-headline font-extrabold text-on-surface">8.4</span></div>
            <div className="h-10 w-px bg-outline-variant/30"></div>
            <div className="flex gap-2"><span className="material-symbols-outlined text-primary">directions_transit</span><span className="material-symbols-outlined text-primary/60">directions_car</span></div>
          </div>
        </div>

        {/* Pins */}
        <div className="absolute top-[40%] left-[38%] z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
          <div className="bg-tertiary text-on-tertiary p-3 rounded-full shadow-lg border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap font-label uppercase">Office Hub</div>
        </div>
        {[['55%', '58%', '₹85k'], ['48%', '45%', '₹62k'], ['65%', '32%', '₹74k']].map(([top, left, price]) => (
          <div key={price} className="absolute z-10 -translate-x-1/2 -translate-y-full cursor-pointer opacity-80 hover:opacity-100" style={{ top, left }}>
            <div className="bg-white text-on-surface font-headline font-bold px-3 py-1.5 rounded-full shadow-md border border-outline-variant/30">{price}</div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute right-6 bottom-10 z-20 flex flex-col gap-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-xl shadow-md hover:bg-white" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
            <span className="material-symbols-outlined text-secondary">my_location</span>
          </button>
          <div className="flex flex-col rounded-xl shadow-md overflow-hidden" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
            {['add', 'remove'].map((icon) => (
              <button key={icon} className="w-12 h-12 flex items-center justify-center hover:bg-white border-b border-outline-variant/20 last:border-0">
                <span className="material-symbols-outlined text-secondary">{icon}</span>
              </button>
            ))}
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl shadow-md hover:bg-white" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
            <span className="material-symbols-outlined text-secondary">layers</span>
          </button>
        </div>

        {/* Mini Sidebar */}
        <div className="absolute left-6 top-24 z-20">
          <div className="bg-slate-50 p-2 rounded-2xl shadow-xl flex flex-col gap-1 w-16 items-center">
            {[['dashboard', '/dashboard', true], ['directions_transit', '/commute-setup', false], ['search_check', '/saved-homes', false], ['trending_up', '/commute-insights', false]].map(([icon, path, active]) => (
              <div key={icon} className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all ${active ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500 hover:bg-white/80'}`} onClick={() => navigate(path)}>
                <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapViewPage;
