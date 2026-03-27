import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommuteSetupPage = () => {
  const navigate = useNavigate();

  const navLinks = [
    { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { icon: 'directions_transit', label: 'Commute Setup', path: '/commute-setup', active: true },
    { icon: 'search_check', label: 'Saved Searches', path: '/saved-homes' },
    { icon: 'trending_up', label: 'Market Trends', path: '/commute-insights' },
    { icon: 'person_outline', label: 'Account', path: '/account' },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col lg:flex-row overflow-x-hidden font-body">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-4 gap-2 bg-slate-50 w-64 z-40">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-white">directions_transit</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-700 tracking-tight font-headline">SahiRasta</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">The Guided Heritage</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map(({ icon, label, path, active }) => (
            <a key={label} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${active ? 'bg-white text-blue-700 shadow-sm font-semibold translate-x-1' : 'text-slate-500 hover:text-blue-600'}`} onClick={() => navigate(path)}>
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 pt-4">
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 rounded-xl cursor-pointer"><span className="material-symbols-outlined">help_outline</span><span className="font-medium">Help Center</span></a>
          <a className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/10 rounded-xl cursor-pointer" onClick={() => navigate('/login')}><span className="material-symbols-outlined">logout</span><span className="font-medium">Sign Out</span></a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col bg-surface min-h-screen">
        <header className="flex justify-between items-center w-full px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
          <div className="hidden lg:flex items-center gap-8">
            <h2 className="text-2xl font-extrabold text-on-surface tracking-tight font-headline">Commute Profile</h2>
          </div>
          <div className="lg:hidden text-2xl font-black text-blue-700 tracking-tight font-headline cursor-pointer" onClick={() => navigate('/dashboard')}>SahiRasta</div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50"><span className="material-symbols-outlined">notifications</span></button>
            <img alt="User" className="w-10 h-10 rounded-full object-cover border border-outline-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXP10LLQ9pIrajiQGrh7oQV2ViJgM-_MKSPDES5B9tbGcX7YAopN1O-yw461quFywK9vqXqP2zG9heVScpIbegvKXdBL_V92vTo3zGGGIKrQ0EkNjRHsC4Wcb1pwskZpx2kmEJpdsLbFYQNRvI9IfAUZ88y6t8R7_X-7PCnHmTnzOlBEQIewqSU6aND1utSoJW0dmUnlLqjZ4SL-Dn9yNkvHS7xbE9NAyPhshlOst8mvMGxMeGJ7Cl7FUW8b0FbIqSWAKVb0tK9BjA" />
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto w-full">
          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-tertiary tracking-[0.1em] uppercase">The Guided Rasta</span>
              <h3 className="text-4xl lg:text-6xl font-extrabold text-on-surface leading-tight font-headline">Define Your Daily <span className="text-primary italic">Journey.</span></h3>
              <p className="text-lg text-secondary max-w-xl">We optimize your home search based on real-time commute data. Tell us where you need to be, and we'll show you exactly how to get there.</p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl rotate-3 bg-surface-container-highest">
                <img alt="City Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiIKoigbmnGXj6RVaiZTzQ3sCAPDLfNskC44MiS8bd4W91I18p9k2UiS2yq7RZR6-UR6JZjghZL7T8YkBhV6rE8k99r8mq7uoI8YmN9jH9hg5w0egpSCSerULVb6iVEeRy3KZm4Zr5KwXaSkRUyOET1I9yA1ja_e0IYjfO3IUpS-DAc7WWkmk0MLFUG1WN5K0fMUbxTyhENGK0unVBy5yArXQWu4lS_Z7O8EGJ2aXkdhp6GszFPuKbxdAESBfTQGMD4iGS2aW4KDOv" />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-xl shadow-xl border-l-4 border-tertiary max-w-[240px]" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)' }}>
                <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-1">Commute Impact</p>
                <p className="text-2xl font-black text-on-surface">Save 40hrs <span className="text-primary text-sm font-normal">/month</span></p>
              </div>
            </div>
          </section>

          {/* Setup Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-bold text-on-surface font-headline">Primary Destinations</h4>
                    <p className="text-secondary">Add the locations you visit most frequently.</p>
                  </div>
                  <button className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-all shadow-lg active:scale-95">
                    <span className="material-symbols-outlined">add</span>Add Workplace
                  </button>
                </div>

                {/* Workplace 1 */}
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl text-primary">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-on-surface">Workplace 1</h5>
                        <p className="text-sm text-secondary">Cyber Hub, Gurgaon, Haryana</p>
                      </div>
                    </div>
                    <button className="text-secondary hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-secondary tracking-widest uppercase">Max Commute Time</label>
                      <div className="flex items-center gap-4">
                        <input className="w-full h-2 bg-outline-variant rounded-full appearance-none cursor-pointer accent-primary" max="120" min="10" type="range" defaultValue="45" />
                        <span className="text-lg font-bold text-primary min-w-[60px]">45 min</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-secondary tracking-widest uppercase">Preferred Mode</label>
                      <div className="flex gap-2">
                        {[['directions_car', true], ['directions_transit', false], ['directions_bus', false], ['directions_bike', false]].map(([icon, active]) => (
                          <button key={icon} className={`p-2 rounded-lg ${active ? 'bg-primary text-white shadow-md' : 'bg-white text-secondary hover:bg-primary-fixed-dim'} transition-colors`}>
                            <span className="material-symbols-outlined">{icon}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Workplace 2 */}
                <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-xl text-tertiary">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-on-surface">Workplace 2</h5>
                        <p className="text-sm text-secondary">Aero City, New Delhi</p>
                      </div>
                    </div>
                    <button className="text-secondary hover:text-error transition-colors"><span className="material-symbols-outlined">delete</span></button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-secondary tracking-widest uppercase">Max Commute Time</label>
                      <div className="flex items-center gap-4">
                        <input className="w-full h-2 bg-outline-variant rounded-full appearance-none cursor-pointer accent-tertiary" max="120" min="10" type="range" defaultValue="30" />
                        <span className="text-lg font-bold text-tertiary min-w-[60px]">30 min</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-secondary tracking-widest uppercase">Preferred Mode</label>
                      <div className="flex gap-2">
                        {[['directions_car', false], ['directions_transit', true], ['directions_bus', false]].map(([icon, active]) => (
                          <button key={icon} className={`p-2 rounded-lg ${active ? 'bg-tertiary text-white shadow-md' : 'bg-white text-secondary hover:bg-primary-fixed-dim'} transition-colors`}>
                            <span className="material-symbols-outlined">{icon}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-t-4 border-primary">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">family_restroom</span>
                  <h4 className="text-xl font-bold text-on-surface font-headline">Family Commute</h4>
                </div>
                <p className="text-secondary text-sm mb-6">Add partners or dependents to ensure everyone's commute is within reach.</p>
                <div className="space-y-4">
                  {[['add_circle', "Partner's Workplace"], ['school', "Child's School"]].map(([icon, label]) => (
                    <button key={label} className="w-full py-4 px-6 rounded-xl bg-surface-container-high border-2 border-dashed border-outline-variant hover:border-primary transition-all flex items-center justify-center gap-2 group">
                      <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors">{icon}</span>
                      <span className="text-secondary group-hover:text-primary font-bold transition-colors">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg aspect-video lg:aspect-square">
                <img alt="Map view" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhrqp-OhHI7QnkVh9SgIfPuc7mtsHtsqaP2u0XIQLSPTtOT-KEOFuUM-1JPvm7B-3PkM47f6GzTRgdaUa2pOxtBG1cqb1Yg7SM9QyMZFnPizpu1x3rAL2uNlv71CLYsh4FHcU3V9RmwkyRlKa5-OL6Tu0fi_DDdXaHuAnbVnnif3TOlFcVvmt4G5_msFnX7Nxk-EvPveHq6KBlvShLur5kEOdMQEr4IRYP9O1oaShCs5XX41jxjw_iDFDIF9aGmU_m4L2nVtX3Es9p" />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <span className="font-bold text-lg">Pin on Map</span>
                  </div>
                  <p className="text-white/80 text-sm">Click anywhere on the map to set a precise commute anchor.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="flex flex-col md:flex-row justify-between items-center p-8 bg-on-surface rounded-xl shadow-2xl gap-6">
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-lg" style={{ borderLeft: '2px solid #8e4d00', background: 'rgba(255,255,255,0.1)' }}>
                <p className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest">Optimized Search</p>
                <h5 className="text-white text-xl font-bold">142 Properties <span className="text-white/60 font-normal">Found</span></h5>
              </div>
              <div className="hidden md:block h-12 w-px bg-white/20"></div>
              <div className="hidden md:block">
                <p className="text-white/60 text-sm">Based on 2 primary workplaces and 45-min limit.</p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Save Profile</button>
              <button className="flex-1 md:flex-none bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1 transition-all" onClick={() => navigate('/properties')}>
                View Listings <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </section>
        </div>

        <footer className="mt-auto border-t border-outline-variant/10 p-10 bg-surface-container-low">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <h2 className="text-xl font-black text-primary font-headline">SahiRasta</h2>
              <p className="text-secondary text-sm max-w-xs">Connecting heritage with modern efficiency.</p>
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-on-surface">
              <div className="space-y-2"><p>Privacy</p><p>Terms</p></div>
              <div className="space-y-2"><p>Contact</p><p>Help</p></div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CommuteSetupPage;
