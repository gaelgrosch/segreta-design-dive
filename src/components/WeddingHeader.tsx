
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const WeddingHeader = () => {
  const location = useLocation();
  
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-rose-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light text-rose-900 tracking-wide">
            Emma & Marco
          </Link>
          <nav className="space-x-8">
            <Link 
              to="/" 
              className={`text-lg font-light tracking-wide transition-colors ${
                location.pathname === '/' 
                  ? 'text-rose-800 border-b-2 border-rose-400' 
                  : 'text-rose-600 hover:text-rose-800'
              }`}
            >
              Wedding Details
            </Link>
            <Link 
              to="/rsvp" 
              className={`text-lg font-light tracking-wide transition-colors ${
                location.pathname === '/rsvp' 
                  ? 'text-rose-800 border-b-2 border-rose-400' 
                  : 'text-rose-600 hover:text-rose-800'
              }`}
            >
              RSVP
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default WeddingHeader;
