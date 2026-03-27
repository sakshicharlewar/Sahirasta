import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // These links require login — redirect to /login
  const handleProtectedLink = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <header className="bg-white dark:bg-slate-900 flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto sticky top-0 z-50">
      <div
        className="text-2xl font-extrabold tracking-tight text-blue-700 dark:text-blue-400 font-headline cursor-pointer"
        onClick={() => navigate('/')}
      >
        SahiRasta
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a
          className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
          href="#"
          onClick={handleProtectedLink}
        >
          Rent
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
          href="#"
          onClick={handleProtectedLink}
        >
          Buy
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
          href="#"
          onClick={handleProtectedLink}
        >
          Commute Tools
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button
          className="text-blue-700 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          onClick={() => navigate('/login')}
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
