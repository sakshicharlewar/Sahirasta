import React from 'react';

const PropertyCard = ({ image, score, type, title, price, commute, beds, location, isPremium }) => {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(25,28,29,0.06)] transition-transform hover:-translate-y-2 flex flex-col group">
      <div className="relative h-64 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src={image} 
          alt={title}
        />
        {/* Commute Score Badge */}
        <div className="absolute top-4 left-4 bg-surface-container-lowest/80 backdrop-blur-md border-l-2 border-tertiary px-4 py-2 rounded-lg flex flex-col items-center">
          <span className="font-headline text-xl font-extrabold text-on-surface">{score}</span>
          <span className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Commute Score</span>
        </div>
        {isPremium && (
          <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full font-label text-xs font-bold uppercase tracking-widest">
            Premium
          </div>
        )}
      </div>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-headline text-xl font-bold text-on-surface">{title}</h3>
          <span className="text-primary font-headline font-bold text-xl">{price}</span>
        </div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1.5 bg-surface-container py-1 px-3 rounded-full">
            <span className="material-symbols-outlined text-sm text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              {type === 'metro' ? 'directions_subway' : type === 'bike' ? 'pedal_bike' : 'directions_car'}
            </span>
            <span className="text-sm font-semibold text-on-surface-variant">{commute}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm text-outline">bed</span>
            <span className="text-sm text-on-surface-variant">{beds}</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-2 bg-surface-container-low flex justify-between items-center">
        <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest font-bold">{location}</span>
        <button className="bg-primary-container text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
