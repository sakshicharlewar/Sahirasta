import React from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // These links require login — redirect to /login
  const handleProtectedLink = (e, path) => {
    e.preventDefault();
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
=======

const Navbar = () => {
  const navigate = useNavigate();

  // These links require login — redirect to /login
  const handleProtectedLink = (e) => {
    e.preventDefault();
    navigate('/login');
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
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
<<<<<<< HEAD
          onClick={(e) => handleProtectedLink(e, '/properties')}
=======
          onClick={handleProtectedLink}
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
        >
          Rent
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
          href="#"
<<<<<<< HEAD
          onClick={(e) => handleProtectedLink(e, '/properties')}
=======
          onClick={handleProtectedLink}
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
        >
          Buy
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
          href="#"
<<<<<<< HEAD
          onClick={(e) => handleProtectedLink(e, '/commute-setup')}
        >
          Commute Tools
        </a>
        <a
          className="text-slate-600 dark:text-slate-400 font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer"
          onClick={() => navigate('/register-property')}
        >
          Register Property
        </a>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-slate-700 hidden sm:inline">{user.name}</span>
            <button
              className="px-4 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-container transition-all"
              onClick={() => navigate('/dashboard')}
            >
              Dashboard
            </button>
            <button
              className="text-on-surface-variant"
              onClick={logout}
              title="Logout"
            >
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        ) : (
          <button
            className="text-blue-700 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 border border-blue-700/20 px-4 py-2 rounded-full"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        )}
=======
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
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
      </div>
    </header>
  );
};

export default Navbar;
