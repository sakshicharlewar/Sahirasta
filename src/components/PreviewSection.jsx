import React from 'react';
import PropertyCard from './PropertyCard';

const PreviewSection = () => {
  const properties = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOgCXCFjwtYYDqYHC4KWArpohjlnMGzFzEtZXmKCpVQ-2LY6T0RPg-dzOh3ncETDiAHMUXXxEK0ZZqjUgf-iVlntugTMfErv1bbir5JQTjm4FwFTOTxIh_YILGt6ltLNocP6mjwf7pExj-Df41lRs3j8Bw6tQPFOKcq4pLJPdDle92_bJ-n4WUBEyeqrLqZ5P9RaVcJQwtKKvs8eIBzj058cuAzlwohU8WLJpNFsYz-Z5LCBSbEcwoY-93-1PEF4JxrwvjLISxNaUP",
      score: "87",
      type: "car",
      title: "Urban Oasis Residency",
      price: "₹45,000/mo",
      commute: "28 min by car",
      beds: "3 BHK",
      location: "Sitaburdi, Nagpur",
      isPremium: true
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0ZUWaWdAl7RGSe3izpJdTjWvLSm_vbIDY_Q3mGaTbyj_y0JsdKNOL3CJ-j8n7YsM9L7WFl9y6cyvzN043JhjhAw-aa7Ko25YutMfRE0edARgc77KsSVA5Q--GUrKUBbvA6ZNBd5qn1OIysfZiEYAycHYT6tvb92kCW4g78M4gVGtoLLrPPzG32he8C282Z1r3406HKFozaMOProrSgRMXVwVjtKlhEDZQSE05yilL55MMSPUFr0V73mUNjRcT374E0qf99fcAlqGo",
      score: "94",
      type: "metro",
      title: "The Pearl Heights",
      price: "₹72,000/mo",
      commute: "12 min by metro",
      beds: "2 BHK",
      location: "Ramdaspeth, Nagpur",
      isPremium: false
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtk2IN6CDhLA5kagyOFC5kmswrIfQ5RC0RQj6XcBUNcocA5faKHaEwkYGWjqYqJZzyBQ2quZ1hMz7TRRCQr-pOVLh2WPQa-MN9_2rGmZgvNuyVi8gQe_Y7OQXTYLDpwgqZRwo2U8XDjEjJ_9lqLvBwON4c22LAcENlAslJwTWLY-C9bqtMIQ5BOz31JCW5ua9dqFzgRczgVV2jcEDhrqLobGv7QXZ_LXcIw2E0hEvAxkWDwLi2jdbCq3GtqMFDMNeNYDEWHWwKtYty",
      score: "81",
      type: "bike",
      title: "Saffron Gardens",
      price: "₹38,000/mo",
      commute: "18 min by bike",
      beds: "3 BHK",
      location: "Dighori, Nagpur",
      isPremium: false
    }
  ];

  return (
    <section className="bg-surface-container-low py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-headline font-bold text-3xl text-on-surface mb-2">Commute-Optimized Previews</h2>
            <p className="text-on-surface-variant max-w-xl">Curated homes based on your travel convenience and workplace proximity.</p>
          </div>
          <button className="text-tertiary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Listings <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, index) => (
            <PropertyCard key={index} {...prop} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;
