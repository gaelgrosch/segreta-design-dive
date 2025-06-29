
import React from 'react';
import { Link } from 'react-router-dom';
import WeddingHeader from '@/components/WeddingHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <WeddingHeader />
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Left Column - Images */}
          <div className="space-y-8">
            <div className="w-full h-96 bg-gray-100"></div>
            <div className="w-full h-64 bg-gray-100"></div>
          </div>
          
          {/* Right Column - Text */}
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl font-light text-black mb-4 tracking-wide">
                Clara & Gaël
              </h1>
              <div className="w-16 h-px bg-black mb-8"></div>
              <p className="text-xl text-black font-light leading-relaxed">
                You're invited to celebrate our wedding
              </p>
            </div>
            
            <div className="space-y-8">
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
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          {/* Left Column - More Images */}
          <div className="space-y-8">
            <div className="w-full h-80 bg-gray-100"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 bg-gray-100"></div>
              <div className="h-40 bg-gray-100"></div>
            </div>
          </div>
          
          {/* Right Column - Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-lg font-medium text-black mb-4">Schedule</h2>
              <div className="space-y-3">
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

        {/* RSVP Section */}
        <div className="text-center">
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
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
