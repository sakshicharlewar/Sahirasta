import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 w-full max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-lg font-bold text-blue-800 dark:text-blue-300 font-headline mb-4">SahiRasta</div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-body mb-6">Guiding you to the home that fits your life, not just your lifestyle.</p>
        </div>
        <div className="col-span-1">
          <h4 className="text-xs uppercase tracking-widest text-on-surface font-bold mb-6">Explore</h4>
          <ul className="space-y-4">
            <li><a className="text-sm font-body text-slate-500 dark:text-slate-400 hover:text-orange-500 underline decoration-2 transition-all" href="#">About Us</a></li>
            <li><a className="text-sm font-body text-slate-500 dark:text-slate-400 hover:text-orange-500 underline decoration-2 transition-all" href="#">Privacy Policy</a></li>
            <li><a className="text-sm font-body text-slate-500 dark:text-slate-400 hover:text-orange-500 underline decoration-2 transition-all" href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-xs uppercase tracking-widest text-on-surface font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            <li><a className="text-sm font-body text-slate-500 dark:text-slate-400 hover:text-orange-500 underline decoration-2 transition-all" href="#">Careers</a></li>
            <li><a className="text-sm font-body text-slate-500 dark:text-slate-400 hover:text-orange-500 underline decoration-2 transition-all" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="text-xs uppercase tracking-widest text-on-surface font-bold mb-6">Contact Us</h4>
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">mail</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">help@sahirasta.com</span>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors cursor-pointer">social_leaderboard</span>
            <span className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors cursor-pointer">share</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
        <span className="text-xs font-body text-slate-500 dark:text-slate-400">© 2024 SahiRasta. The Guided Heritage.</span>
      </div>
    </footer>
  );
};

export default Footer;
