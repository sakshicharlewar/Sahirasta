import React from 'react';
import SearchBento from './SearchBento';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-32 jali-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <h1 className="font-headline font-extrabold text-5xl md:text-6xl text-on-surface mb-6 leading-tight tracking-tight">
            SahiRasta – The Right Route to Your Perfect Home
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed mb-8">
            Find homes within your ideal commute time, not just your budget.
          </p>
        </div>
        <SearchBento />
      </div>
      
      {/* Abstract Graphic */}
      <div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border-tertiary/10 border-[40px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
