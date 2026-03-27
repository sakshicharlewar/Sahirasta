<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from 'react-leaflet';
import { useAuth } from '../context/AuthContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Heatmap component
const HeatmapLayer = ({ points }) => {
  const map = useMap();
  useEffect(() => {
    if (!map || !points) return;
    const heat = L.heatLayer(points, {
<<<<<<< HEAD
      radius: 35,
      blur: 15,
      maxZoom: 17,
      gradient: { 0.4: 'rgba(0,0,255,0.7)', 0.6: 'rgba(0,255,0,0.7)', 1: 'rgba(255,0,0,0.8)' }
=======
      radius: 25,
      blur: 15,
      maxZoom: 17,
      gradient: { 0.4: 'blue', 0.65: 'lime', 1: 'red' }
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8
    }).addTo(map);
    return () => map.removeLayer(heat);
  }, [map, points]);
  return null;
};

const MapViewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [showTraffic, setShowTraffic] = useState(true);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const comparisonList = location.state?.comparison || [];
  const isComparisonMode = comparisonList.length > 0;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        const data = await response.json();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

<<<<<<< HEAD
  const trafficPoints = properties.map(p => [p.lat, p.lng, 0.8]);
=======
  // Mock traffic heatmap points around Nagpur
  const trafficPoints = [
    [21.1458, 79.0882, 0.8], // CBD
    [21.1435, 79.0664, 0.5],
    [21.1578, 79.0822, 0.9],
    [21.1378, 79.0762, 0.6],
    [21.1278, 79.0632, 0.4],
  ];
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8

  const displayedProperties = isComparisonMode ? properties.filter(p => comparisonList.some(c => c.id === p.id)) : properties;

  return (
    <div className="bg-surface text-on-surface font-body h-screen flex flex-col overflow-hidden">
      <header className="bg-white shadow-sm z-50 flex justify-between items-center w-full px-6 py-3 shrink-0">
<<<<<<< HEAD
=======
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MapViewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-surface text-on-surface font-body">
      <header className="bg-white shadow-sm fixed top-0 z-50 flex justify-between items-center w-full px-6 py-3">
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8
          {isComparisonMode && (
            <button 
              onClick={() => navigate('/map-view', { state: {} })}
              className="bg-error text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">close</span>
              Clear Comparison
            </button>
          )}
          <button className="p-2 rounded-full hover:bg-slate-50"><span className="material-symbols-outlined">notifications</span></button>
          <div className="flex items-center gap-3 ml-2">
            <span className="text-sm font-bold text-on-surface-variant hidden md:block">{user?.name}</span>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
              <img 
                alt="User" 
                className="w-full h-full object-cover cursor-pointer" 
                src={`https://ui-avatars.com/api/?name=${user?.name}&background=random`} 
                onClick={() => navigate('/account')} 
              />
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex-grow w-full overflow-hidden bg-surface-container">
        {/* Real Leaflet Map */}
        <div className="absolute inset-0 z-0">
          <MapContainer center={[21.1458, 79.0882]} zoom={13} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
<<<<<<< HEAD
            {showTraffic && <HeatmapLayer points={trafficPoints} />}
=======
            {(showTraffic && !isComparisonMode) && <HeatmapLayer points={trafficPoints} />}
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8

            {displayedProperties.map((prop) => (
              <React.Fragment key={prop.id}>
                <Marker 
                  position={[prop.lat, prop.lng]}
                  icon={L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div class="bg-white text-on-surface font-headline font-bold px-3 py-1.5 rounded-full shadow-md border border-outline-variant/30 transform -translate-x-1/2 -translate-y-full hover:scale-110 transition-transform ${isComparisonMode ? 'border-2 border-primary' : ''}">₹${(prop.rent/1000).toFixed(1)}k</div>`,
                    iconSize: [0, 0],
                    iconAnchor: [0, 0]
                  })}
                >
                  <Popup>
                    <div className="p-2 min-w-[200px]">
                      <h3 className="font-bold">{prop.name}</h3>
                      <p className="text-primary font-bold">₹{prop.rent.toLocaleString()}</p>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Commute Analysis</span>
                        <div className="flex justify-between items-center text-xs">
                          <span>Driving Time:</span>
                          <span className="font-bold text-orange-600">18 min</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span>Commute Score:</span>
                          <span className="font-bold text-blue-700">8.8/10</span>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                {isComparisonMode && user?.workplace_lat && (
                  <Polyline 
                    positions={[[user.workplace_lat, user.workplace_lng], [prop.lat, prop.lng]]} 
                    pathOptions={{ color: 'blue', weight: 3, dashArray: '10, 10', opacity: 0.5 }} 
                  />
                )}
              </React.Fragment>
            ))}

            {/* Workplace Pin */}
            {(user?.workplace_lat && user?.workplace_lng) && (
              <Marker 
                position={[user.workplace_lat, user.workplace_lng]}
                icon={L.divIcon({
                  className: 'workplace-icon',
                  html: `<div class="bg-primary text-white p-3 rounded-full shadow-lg border-2 border-white flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform">
                          <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1">work</span>
                        </div>`,
                  iconSize: [0, 0],
                  iconAnchor: [0, 0]
                })}
              >
                <Popup>
                  <div className="p-2">
                    <h4 className="font-bold">Your Workplace</h4>
                    <p className="text-xs text-secondary">{user.workplace_address}</p>
                  </div>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        {/* Comparison Summary Panel */}
        {isComparisonMode && (
          <div className="absolute top-6 left-6 z-[1000] w-80 flex flex-col gap-4">
            <div className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50">
              <h3 className="text-xl font-headline font-black text-blue-800 mb-4">Comparison Focus</h3>
              <div className="space-y-4">
                {displayedProperties.map(p => (
                  <div key={p.id} className="flex flex-col gap-1 p-3 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:bg-white transition-all cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm line-clamp-1 group-hover:text-primary transition-colors">{p.name}</h4>
                      <span className="text-[10px] font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">₹{(p.rent/1000).toFixed(1)}k</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-secondary">
                        <span className="material-symbols-outlined text-xs">directions_car</span>
                        18 min
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-blue-700">
                        <span className="material-symbols-outlined text-xs">award_star</span>
                        Score: 8.8
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                className="w-full mt-6 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                onClick={() => navigate('/commute-insights')}
              >
                Deep Comparison Report
              </button>
            </div>
          </div>
        )}

        {/* Search */}
        {!isComparisonMode && (
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-2xl px-4">
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
        )}

        {/* Legend */}
        <div className="absolute bottom-10 left-6 z-[1000] flex flex-col gap-4">
          <div className="p-4 rounded-xl shadow-md border-l-4 border-primary" style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}>
            <h4 className="font-headline text-sm font-bold mb-3 uppercase tracking-wider">Map Context</h4>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs font-label uppercase tracking-wider text-secondary">Properties</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-primary" style={{ border: '2px solid white' }}></div>
              <span className="text-xs font-label uppercase tracking-wider text-secondary">Your Workplace</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute right-6 bottom-10 z-[1000] flex flex-col gap-2">
          {!isComparisonMode && (
            <button 
              className={`w-12 h-12 flex items-center justify-center rounded-xl shadow-md transition-all ${showTraffic ? 'bg-primary text-white' : 'bg-white/85 text-secondary'}`}
              onClick={() => setShowTraffic(!showTraffic)}
              title="Toggle Traffic Heatmap"
            >
              <span className="material-symbols-outlined">traffic</span>
            </button>
          )}
          <button className="w-12 h-12 flex items-center justify-center rounded-xl shadow-md bg-white/85 text-secondary hover:bg-white" style={{ backdropFilter: 'blur(12px)' }}>
            <span className="material-symbols-outlined">my_location</span>
          </button>
        </div>

        {/* Sidebar Nav */}
        <div className="absolute left-6 top-6 z-[999]">
          {!isComparisonMode && (
            <div className="bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-xl flex flex-col gap-1 w-16 items-center">
              {[
                ['dashboard', '/dashboard', false],
                ['public', '/map-view', true],
                ['favorite', '/saved-homes', false],
                ['insights', '/commute-insights', false]
              ].map(([icon, path, active]) => (
                <div 
                  key={path} 
                  className={`w-10 h-10 flex items-center justify-center rounded-xl cursor-pointer transition-all ${active ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:bg-white/80'}`}
                  onClick={() => navigate(path)}
                >
                  <span className="material-symbols-outlined" style={active ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
                </div>
              ))}
            </div>
          )}
<<<<<<< HEAD
=======
=======
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
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
>>>>>>> ea169e37f18b2fc580668ac87b740c8361c3ceb8
        </div>
      </main>
    </div>
  );
};

export default MapViewPage;
