import React from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'directions_transit', label: 'Commute Setup', path: '/commute-setup' },
  { icon: 'search_check', label: 'Saved Searches', path: '/saved-homes' },
  { icon: 'trending_up', label: 'Market Trends', path: '/commute-insights', active: true },
  { icon: 'person_outline', label: 'Account', path: '/account' },
];

const CommuteInsightsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background font-body text-on-surface">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-4 gap-2 bg-slate-50 w-64">
          <div className="flex flex-col gap-1 mb-8 px-2">
            <span className="text-xl font-bold text-blue-700 tracking-tight font-headline cursor-pointer" onClick={() => navigate('/dashboard')}>SahiRasta</span>
            <span className="text-xs font-medium text-slate-500 font-label tracking-widest uppercase">The Guided Heritage</span>
          </div>
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map(({ icon, label, path, active }) => (
              <a key={label} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${active ? 'bg-white text-blue-700 shadow-sm font-semibold translate-x-1' : 'text-slate-500 hover:text-blue-600'}`} onClick={() => navigate(path)}>
                <span className="material-symbols-outlined">{icon}</span>
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant/20 pt-4">
            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold mb-4 shadow-lg hover:scale-95 transition-transform" onClick={() => navigate('/properties')}>Add New Listing</button>
            <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-600"><span className="material-symbols-outlined">help_outline</span><span className="text-sm">Help Center</span></a>
            <a className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-600 cursor-pointer" onClick={() => navigate('/login')}><span className="material-symbols-outlined">logout</span><span className="text-sm">Sign Out</span></a>
          </div>
        </aside>

        <main className="flex-1 overflow-x-hidden">
          <header className="flex justify-between items-center w-full px-6 py-3 bg-white sticky top-0 z-50 shadow-sm">
            <div className="flex items-center gap-8">
              <span className="text-2xl font-black text-blue-700 tracking-tight lg:hidden font-headline cursor-pointer" onClick={() => navigate('/dashboard')}>SahiRasta</span>
              <nav className="hidden md:flex gap-6 items-center">
                <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/properties')}>Properties</a>
                <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/map-view')}>Map View</a>
                <a className="text-slate-600 font-medium hover:text-blue-600 cursor-pointer" onClick={() => navigate('/saved-homes')}>Saved Homes</a>
                <a className="text-blue-700 font-bold border-b-2 border-orange-500 pb-1">Insights</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="pl-10 pr-4 py-2 bg-surface-container-high rounded-full border-none focus:ring-1 focus:ring-primary/20 w-64 text-sm" placeholder="Search insights..." type="text" />
              </div>
              <button className="p-2 hover:bg-slate-50 rounded-full"><span className="material-symbols-outlined">notifications</span></button>
              <img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXP10LLQ9pIrajiQGrh7oQV2ViJgM-_MKSPDES5B9tbGcX7YAopN1O-yw461quFywK9vqXqP2zG9heVScpIbegvKXdBL_V92vTo3zGGGIKrQ0EkNjRHsC4Wcb1pwskZpx2kmEJpdsLbFYQNRvI9IfAUZ88y6t8R7_X-7PCnHmTnzOlBEQIewqSU6aND1utSoJW0dmUnlLqjZ4SL-Dn9yNkvHS7xbE9NAyPhshlOst8mvMGxMeGJ7Cl7FUW8b0FbIqSWAKVb0tK9BjA" />
            </div>
          </header>

          <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
            {/* Hero */}
            <section className="relative">
              <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: 'radial-gradient(#c1c6d6 0.5px, transparent 0.5px)', backgroundSize: '12px 12px' }}></div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-[0.2em] text-tertiary font-label uppercase">Commute Intelligence</span>
                  <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight max-w-2xl leading-tight">
                    Optimize your journey, <br /><span className="text-primary">elevate your lifestyle.</span>
                  </h1>
                </div>
                <div className="p-6 rounded-2xl flex items-center gap-6 shadow-xl" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', borderLeft: '2px solid #8e4d00' }}>
                  <div className="text-center"><span className="block text-3xl font-headline font-bold text-on-surface">8.4</span><span className="text-[0.65rem] font-label font-bold text-slate-500 tracking-wider uppercase">Global Score</span></div>
                  <div className="h-10 w-px bg-outline-variant/30"></div>
                  <div className="space-y-1"><span className="block text-sm font-bold text-tertiary">Excellent Commute</span><span className="block text-xs text-slate-500">Based on your saved preferences</span></div>
                </div>
              </div>
            </section>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface">Travel Time Trends</h3>
                    <p className="text-sm text-slate-500">Average minutes spent commuting over the last 6 months</p>
                  </div>
                  <select className="bg-surface-container border-none rounded-lg text-xs font-bold font-label px-4 py-2">
                    <option>ALL MODES</option><option>METRO</option><option>PRIVATE CAR</option>
                  </select>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2 relative">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0,1,2,3].map(i => <div key={i} className="border-b border-outline-variant/10 w-full h-0"></div>)}
                  </div>
                  {[40, 55, 45, 70, 60, 50, 65, 40, 30, 45].map((h, i) => (
                    <div key={i} className={`w-full rounded-t-lg group relative transition-colors ${i === 9 ? 'bg-primary' : 'bg-primary-fixed hover:bg-primary'}`} style={{ height: `${h}%` }}>
                      {i === 0 && <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded">22m</div>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-label font-bold text-slate-400 px-1">
                  {['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>

              <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-2">Mode Impact</h3>
                  <p className="text-sm text-slate-500">Score weight by transport type</p>
                </div>
                <div className="space-y-6 my-8">
                  {[['directions_bus', 'bg-white text-primary', 'Bus/Metro', 'text-primary', 45], ['directions_car', 'bg-white text-tertiary', 'Private Car', 'text-tertiary', 30], ['directions_walk', 'bg-white text-secondary', 'Walking', 'text-secondary', 25]].map(([icon, iconClass, label, textClass, pct]) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full ${iconClass} flex items-center justify-center shadow-sm`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs font-bold mb-1"><span>{label}</span><span className={textClass}>{pct}%</span></div>
                        <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${textClass === 'text-primary' ? 'bg-primary' : textClass === 'text-tertiary' ? 'bg-tertiary' : 'bg-secondary'}`} style={{ width: `${pct}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 italic leading-tight">Switching to Metro could improve your sustainability score by 12 points next month.</p>
              </div>
            </div>

            {/* Rent vs Commute */}
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div><h2 className="text-2xl font-headline font-bold">Rent vs. Commute Cost</h2><p className="text-slate-500">Finding the sweet spot between proximity and price</p></div>
                <div className="flex gap-2">
                  <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-primary-fixed text-primary rounded-full"><span className="w-2 h-2 rounded-full bg-primary"></span>Monthly Rent</span>
                  <span className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 bg-tertiary-fixed text-tertiary rounded-full"><span className="w-2 h-2 rounded-full bg-tertiary"></span>Commute Cost</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{ area: 'HITECH CITY', best: true, rent: '₹45,000', rentPct: 80, commute: '₹2,400', commutePct: 15 }, { area: 'BANJARA HILLS', best: false, rent: '₹65,000', rentPct: 95, commute: '₹1,200', commutePct: 8 }, { area: 'KOKAPET', best: false, rent: '₹32,000', rentPct: 60, commute: '₹6,800', commutePct: 45 }].map(({ area, best, rent, rentPct, commute, commutePct }) => (
                  <div key={area} className={`bg-surface-container-lowest rounded-2xl p-6 border-l-4 shadow-sm hover:shadow-md ${best ? 'border-primary' : 'border-outline-variant'}`}>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-label font-bold text-slate-400 tracking-wider">{area}</span>
                      {best && <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-0.5 rounded">BEST VALUE</span>}
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end"><span className="text-sm font-medium text-slate-500">Rent</span><span className="text-xl font-headline font-bold text-on-surface">{rent}</span></div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: `${rentPct}%` }}></div></div>
                      <div className="flex justify-between items-end"><span className="text-sm font-medium text-slate-500">Commute</span><span className="text-xl font-headline font-bold text-tertiary">{commute}</span></div>
                      <div className="h-2 bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-tertiary" style={{ width: `${commutePct}%` }}></div></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Smart Insight */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl overflow-hidden relative group cursor-pointer">
                <img alt="Map visualization" className="w-full h-80 object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzamksIVGc_r0XtVTXZ3IjzGSWrPQz7s7Jqu5HwXMSN22faP-SjhtFbCP3jlOdDjNqdqm-LbqauMrxbBw5bLQes6nGmK7g-8qdeJ-6HEjFCBT1ZAglrl3SjYoW8gp592Q8w-dORB6uECSOpjF-OXBMsnP_mlOo7UN5MuxZkaO5st2GU1D_iNIOMqgG_7POxr04Q4SCUkzm3Gmk7F1xC_M3qzDGvOXMDyrqBE4V44p1JkzF2jZvY9s2_TqalbC6hAHWV4cDqV6DeG51" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent p-8 flex flex-col justify-end">
                  <h4 className="text-white text-2xl font-headline font-bold mb-2">Locality Heatmap</h4>
                  <p className="text-slate-300 text-sm mb-4">View peak traffic density and transit frequency in real-time.</p>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2 rounded-full text-sm font-bold w-fit hover:bg-white/20" onClick={() => navigate('/map-view')}>Open Interactive Map</button>
                </div>
              </div>
              <div className="bg-tertiary-fixed p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-tertiary"><span className="material-symbols-outlined text-3xl">lightbulb</span><span className="font-label font-bold text-xs tracking-widest uppercase">Smart Insight</span></div>
                  <h3 className="text-2xl font-headline font-extrabold text-on-tertiary-fixed mb-4 leading-snug">You could save 18 hours monthly by shifting your start time to 8:15 AM.</h3>
                  <p className="text-on-tertiary-fixed-variant/80 text-sm leading-relaxed">Our data shows traffic on your primary route peaks between 8:45–9:30 AM. An earlier departure reduces travel time by 22% and fuel costs by ₹1,100 per month.</p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-on-tertiary-fixed/10 pt-6">
                  <button className="text-tertiary font-bold text-sm flex items-center gap-2 group">View Full Report <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span></button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CommuteInsightsPage;
