<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle map clicks and move view
const MapHandler = ({ setWorkplace, workplace }) => {
  const map = useMap();
  useMapEvents({
    click(e) {
      setWorkplace(prev => ({ ...prev, lat: e.latlng.lat, lng: e.latlng.lng }));
    },
  });

  useEffect(() => {
    map.flyTo([workplace.lat, workplace.lng], map.getZoom());
  }, [workplace.lat, workplace.lng, map]);

  return <Marker position={[workplace.lat, workplace.lng]} />;
};

const CommuteSetupPage = () => {
  const navigate = useNavigate();
  const { user, updateWorkplace, logout } = useAuth();
  const [workplace, setWorkplace] = useState({
    lat: user?.workplace_lat || 21.1458,
    lng: user?.workplace_lng || 79.0882,
    address: user?.workplace_address || ''
  });
  const [maxTime, setMaxTime] = useState(30);
  const [mode, setMode] = useState('car');
  const [saveStatus, setSaveStatus] = useState('');

  const handleSave = async () => {
    setSaveStatus('Saving...');
    const result = await updateWorkplace({
      workplace_lat: workplace.lat,
      workplace_lng: workplace.lng,
      workplace_address: workplace.address
    });
    if (result.success) {
      setSaveStatus('Profile Saved!');
      setTimeout(() => setSaveStatus(''), 3000);
    } else {
      setSaveStatus('Error saving profile.');
    }
  };
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CommuteSetupPage = () => {
  const navigate = useNavigate();
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858

  const navLinks = [
    { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { icon: 'directions_transit', label: 'Commute Setup', path: '/commute-setup', active: true },
<<<<<<< HEAD
    { icon: 'map', label: 'Properties Map', path: '/map-view' },
    { icon: 'search_check', label: 'Saved Searches', path: '/saved-homes' },
=======
    { icon: 'search_check', label: 'Saved Searches', path: '/saved-homes' },
    { icon: 'trending_up', label: 'Market Trends', path: '/commute-insights' },
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
    { icon: 'person_outline', label: 'Account', path: '/account' },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col lg:flex-row overflow-x-hidden font-body">
      {/* Sidebar */}
<<<<<<< HEAD
      <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-4 gap-2 bg-slate-50 w-64 z-40 border-r border-slate-200">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
=======
      <aside className="hidden lg:flex flex-col h-screen sticky top-0 p-4 gap-2 bg-slate-50 w-64 z-40">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
            <span className="material-symbols-outlined text-white">directions_transit</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-700 tracking-tight font-headline">SahiRasta</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">The Guided Heritage</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {navLinks.map(({ icon, label, path, active }) => (
<<<<<<< HEAD
            <a key={label} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${active ? 'bg-primary text-white shadow-md font-semibold' : 'text-slate-500 hover:bg-white hover:text-blue-600'}`} onClick={() => navigate(path)}>
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-medium text-sm">{label}</span>
=======
            <a key={label} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${active ? 'bg-white text-blue-700 shadow-sm font-semibold translate-x-1' : 'text-slate-500 hover:text-blue-600'}`} onClick={() => navigate(path)}>
              <span className="material-symbols-outlined">{icon}</span>
              <span className="font-medium">{label}</span>
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-1 border-t border-slate-200 pt-4">
<<<<<<< HEAD
          <a className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/10 rounded-xl cursor-pointer" onClick={logout}><span className="material-symbols-outlined">logout</span><span className="font-medium">Sign Out</span></a>
=======
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-600 rounded-xl cursor-pointer"><span className="material-symbols-outlined">help_outline</span><span className="font-medium">Help Center</span></a>
          <a className="flex items-center gap-3 px-4 py-3 text-error hover:bg-error-container/10 rounded-xl cursor-pointer" onClick={() => navigate('/login')}><span className="material-symbols-outlined">logout</span><span className="font-medium">Sign Out</span></a>
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col bg-surface min-h-screen">
<<<<<<< HEAD
        <header className="flex justify-between items-center w-full px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="hidden lg:flex items-center gap-8">
            <h2 className="text-2xl font-extrabold text-on-surface tracking-tight font-headline">Commute Preferences</h2>
          </div>
          <div className="lg:hidden text-2xl font-black text-blue-700 tracking-tight font-headline cursor-pointer" onClick={() => navigate('/dashboard')}>SahiRasta</div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-50 transition-colors"><span className="material-symbols-outlined">notifications</span></button>
            <div className="flex items-center gap-3 px-1 py-1 bg-surface-container rounded-full border border-outline-variant/10">
              <span className="text-sm font-bold ml-2 text-on-surface-variant hidden md:block">{user?.name}</span>
              <img alt="User" className="w-8 h-8 rounded-full object-cover border border-outline-variant/20 shadow-sm" src={`https://ui-avatars.com/api/?name=${user?.name}&background=random`} />
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <section className="space-y-4">
            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">Step 1: Workplace Setup</span>
            <h3 className="text-4xl lg:text-5xl font-black text-on-surface tracking-tight leading-none font-headline">Where do you <span className="text-primary underline decoration-primary/20 underline-offset-8">work?</span></h3>
            <p className="text-secondary text-lg max-w-2xl leading-relaxed">Pin your office location on the real map below. We'll use this to calculate travel times for every property you view.</p>
          </section>

          {/* Interactive Map Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 h-[600px]">
            {/* Map Column */}
            <div className="xl:col-span-8 rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group h-full">
              <MapContainer center={[workplace.lat, workplace.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MapHandler workplace={workplace} setWorkplace={setWorkplace} />
              </MapContainer>
              <div className="absolute top-4 left-4 z-[1000] p-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-white/50 max-w-xs">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <span className="material-symbols-outlined font-black">add_location_alt</span>
                  <span className="font-headline font-bold text-sm">Location Picked</span>
                </div>
                <p className="text-[10px] font-mono text-secondary truncate">{workplace.lat.toFixed(6)}, {workplace.lng.toFixed(6)}</p>
                <div className="mt-2 text-xs text-secondary leading-tight italic">Drag the map or click to update the pin to your exact office spot.</div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="xl:col-span-4 flex flex-col gap-6 overflow-y-auto">
              {/* Address Input */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <label className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">Workplace Description</label>
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">apartment</span>
                    <input 
                      type="text"
                      className="w-full bg-slate-50 border-none rounded-xl py-4 pl-12 pr-4 text-sm font-bold focus:ring-2 focus:ring-primary/20 transition-all shadow-inner"
                      placeholder="e.g. IT Park, Nagpur"
                      value={workplace.address}
                      onChange={(e) => setWorkplace({ ...workplace, address: e.target.value })}
                    />
                  </div>
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="flex justify-between text-xs font-bold text-secondary mb-1">
                      <span>Coordinates Saved</span>
                      <span>Live Feed</span>
                    </div>
                    <p className="text-sm font-mono font-bold text-on-surface">{workplace.lat.toFixed(4)}, {workplace.lng.toFixed(4)}</p>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex-1 flex flex-col gap-6">
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">Max Commute Time</label>
                  <div className="flex flex-col gap-4">
                    <input 
                      className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-primary" 
                      max="120" min="10" type="range" 
                      value={maxTime}
                      onChange={(e) => setMaxTime(parseInt(e.target.value))}
                    />
                    <div className="flex justify-between items-center bg-primary/10 p-3 rounded-xl border border-primary/20">
                      <span className="text-xs font-bold text-primary">Travel Threshold</span>
                      <span className="text-xl font-black text-primary">{maxTime} min</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-primary mb-4 block">Commute Mode</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      ['directions_car', 'car', 'Car'], 
                      ['directions_bus', 'bus', 'Bus'],
                      ['directions_bike', 'bike', 'Bike'],
                      ['directions_walk', 'walk', 'Walk']
                    ].map(([icon, m, label]) => (
                      <button 
                        key={icon} 
                        onClick={() => setMode(m)}
                        title={label}
                        className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${mode === m ? 'bg-primary text-white shadow-xl scale-105' : 'bg-slate-50 text-secondary hover:bg-slate-100'}`}
                      >
                        <span className="material-symbols-outlined text-2xl">{icon}</span>
                        <span className="text-[10px] font-bold uppercase">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={handleSave}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg"
                  >
                    {saveStatus === 'Saving...' && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                    <span className="material-symbols-outlined">verified</span>
                    {saveStatus || 'Confirm Profile'}
                  </button>
                </div>
=======
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
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Real Map Visibility Info */}
          <section className="bg-surface-container-high p-8 rounded-3xl border border-white/50 shadow-inner">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="h-24 w-24 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-slate-100">
                <span className="material-symbols-outlined text-4xl text-primary animate-pulse">map</span>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black text-on-surface font-headline italic">Real Map Verification</h4>
                <p className="text-secondary leading-relaxed">The map above is an interactive <span className="text-primary font-bold">OpenStreetMap</span> instance. Changes you make here are synchronized instantly with your property search results. You can see your workplace location anchor on the dashboard map as well once saved.</p>
              </div>
              <button 
                onClick={() => navigate('/properties')}
                className="ml-auto bg-white text-primary px-10 py-5 rounded-2xl font-black shadow-xl hover:bg-slate-50 transition-all flex items-center gap-3 active:scale-95"
              >
                Go to Listings
                <span className="material-symbols-outlined">explore</span>
=======
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
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
              </button>
            </div>
          </section>
        </div>

        <footer className="mt-auto border-t border-outline-variant/10 p-10 bg-surface-container-low">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<<<<<<< HEAD
            <div className="space-y-1">
              <h2 className="text-xl font-black text-primary font-headline">SahiRasta</h2>
              <p className="text-secondary text-sm font-medium">Built for the Nagpur Heritage Commute.</p>
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">© 2026 SahiRasta Commute Intelligence</div>
=======
            <div className="space-y-2">
              <h2 className="text-xl font-black text-primary font-headline">SahiRasta</h2>
              <p className="text-secondary text-sm max-w-xs">Connecting heritage with modern efficiency.</p>
            </div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-on-surface">
              <div className="space-y-2"><p>Privacy</p><p>Terms</p></div>
              <div className="space-y-2"><p>Contact</p><p>Help</p></div>
            </div>
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CommuteSetupPage;
