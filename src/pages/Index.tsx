
import React from 'react';
import { Link } from 'react-router-dom';
import WeddingHeader from '@/components/WeddingHeader';

const Index = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#C4704B', minHeight: '100vh' }}>
      <WeddingHeader />
      
      {/* Continuous Dividing Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-black hidden lg:block" style={{ top: '88px', bottom: '115px' }}></div>
      
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - All Images */}
          <div className="space-y-[25px]">
            <img src="./photo-1506377247377-2a5b3b417ebb.avif" alt="Wedding venue" className="w-full h-96 object-cover" />
            <img src="./photo-1642427726189-a29ad10a6e36.avif" alt="Wedding venue" className="h-full bject-cover" />
            <img src="./photo-1603437873662-dc1f44901825.avif" alt="Wedding couple" className="w-full h-64 object-cover" />
            <img src="./photo-1627826357620-947e0a74f5cc.avif" alt="Wedding details" className="w-full h-80 object-cover" />
          </div>
          
          {/* Right Column - All Content */}
          <div className="space-y-24">
            <div>
              <h1 className="text-black mb-4 uppercase" style={{ fontSize: '68px', lineHeight: '60px', fontWeight: '100', fontFamily: "'Blimone', Helvetica, Arial, sans-serif" }}>
                Clara & Gaël
              </h1>
              <div className="w-16 h-px bg-black mb-8"></div>
              <p className="text-xl text-black font-light leading-relaxed">
                You're invited to celebrate our wedding
              </p>
            </div>
            
            <div className="space-y-32">
              <div>
                <h2 className="text-lg font-medium text-black mb-2">When</h2>
                <p className="text-black">Saturday, September 14th, 2025</p>
                <p className="text-black">Ceremony at 5:00 PM</p>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-black mb-2">Where</h2>
                <p className="text-black">Château de Minervois</p>
                <p className="text-black">Route des Vignobles</p>
                <p className="text-black">Minervois, Languedoc, France</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-black mb-4">Schedule</h2>
              <div className="">
                <div className="flex justify-between">
                  <span className="text-black">5:00 PM</span>
                  <span className="text-black">Ceremony</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">6:30 PM</span>
                  <span className="text-black">Vin d'honneur</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black">8:00 PM</span>
                  <span className="text-black">Dinner & Dancing</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-black mb-4">Dress Code</h2>
              <p className="text-black">Elegant Garden Party</p>
              <p className="text-black">Think French countryside chic</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-black mb-4">Transportation</h2>
              <p className="text-black">Shuttle from Carcassonne at 4:00 PM</p>
              <p className="text-black">Parking available at the château</p>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-black mb-4">Accommodation</h2>
              <p className="text-black">Hôtel de la Cité - Carcassonne</p>
              <p className="text-black">Les Jardins du Minervois B&B</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8"></div>

        {/* RSVP Section */}
        <div className="text-center">
          <div className="w-full h-px bg-black mb-8"></div>
          <Link 
            to="/rsvp" 
            className="inline-block text-black border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
          >
            RSVP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
