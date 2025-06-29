
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const WeddingHeader = () => {
  const location = useLocation();
  
  return (
    <header className="bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-black tracking-wide">
            C&G
          </Link>
          <nav className="space-x-12">
            <Link 
              to="/" 
              className={`text-black font-light tracking-wide ${
                location.pathname === '/' 
                  ? 'border-b border-black pb-1' 
                  : 'hover:border-b hover:border-black hover:pb-1'
              } transition-all`}
            >
              Wedding Details
            </Link>
            <Link 
              to="/rsvp" 
              className={`text-black font-light tracking-wide ${
                location.pathname === '/rsvp' 
                  ? 'border-b border-black pb-1' 
                  : 'hover:border-b hover:border-black hover:pb-1'
              } transition-all`}
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
