
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Shirt, Car, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import WeddingHeader from '@/components/WeddingHeader';
import InfoSection from '@/components/InfoSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <WeddingHeader />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-rose-900 mb-6 tracking-wide">
            Emma & Marco
          </h1>
          <div className="w-24 h-px bg-rose-400 mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-rose-700 font-light mb-4">
            You're Invited to Celebrate Our Wedding
          </p>
          <p className="text-lg text-rose-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join us for a day of love, laughter, and unforgettable memories as we begin our journey together
          </p>
          <Link to="/rsvp">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-light tracking-wide">
              RSVP Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Date & Time */}
            <InfoSection
              icon={<Calendar className="w-8 h-8 text-rose-600" />}
              title="When"
              content={
                <div className="space-y-2">
                  <p className="text-xl font-medium text-rose-900">Saturday, June 15th, 2024</p>
                  <div className="flex items-center space-x-2 text-rose-700">
                    <Clock className="w-4 h-4" />
                    <span>Ceremony at 4:00 PM</span>
                  </div>
                  <p className="text-rose-600">Reception to follow</p>
                </div>
              }
            />

            {/* Location */}
            <InfoSection
              icon={<MapPin className="w-8 h-8 text-rose-600" />}
              title="Where"
              content={
                <div className="space-y-2">
                  <p className="text-xl font-medium text-rose-900">Villa Bellavista</p>
                  <p className="text-rose-700">123 Romantic Lane</p>
                  <p className="text-rose-700">Tuscany Hills, Italy</p>
                  <p className="text-rose-600 text-sm mt-3">
                    A breathtaking venue overlooking the rolling hills of Tuscany
                  </p>
                </div>
              }
            />

            {/* Activities */}
            <InfoSection
              icon={<Calendar className="w-8 h-8 text-rose-600" />}
              title="Schedule"
              content={
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-rose-900">4:00 PM - Ceremony</p>
                    <p className="text-sm text-rose-600">Garden Pavilion</p>
                  </div>
                  <div>
                    <p className="font-medium text-rose-900">5:30 PM - Cocktail Hour</p>
                    <p className="text-sm text-rose-600">Terrace Overlooking Valley</p>
                  </div>
                  <div>
                    <p className="font-medium text-rose-900">7:00 PM - Reception</p>
                    <p className="text-sm text-rose-600">Grand Ballroom</p>
                  </div>
                </div>
              }
            />

            {/* Dress Code */}
            <InfoSection
              icon={<Shirt className="w-8 h-8 text-rose-600" />}
              title="Dress Code"
              content={
                <div className="space-y-2">
                  <p className="text-xl font-medium text-rose-900">Cocktail Attire</p>
                  <p className="text-rose-700">Semi-formal to formal</p>
                  <p className="text-rose-600 text-sm">
                    Think elegant and sophisticated. Ladies, heels may sink in grass - consider block heels or flats for the ceremony.
                  </p>
                </div>
              }
            />

            {/* Getting There */}
            <InfoSection
              icon={<Car className="w-8 h-8 text-rose-600" />}
              title="Transportation"
              content={
                <div className="space-y-2">
                  <p className="font-medium text-rose-900">Shuttle Service</p>
                  <p className="text-rose-700">Departing from Hotel Centrale at 3:15 PM</p>
                  <p className="font-medium text-rose-900 mt-3">Driving</p>
                  <p className="text-rose-700">Valet parking available</p>
                  <p className="text-rose-600 text-sm">GPS: Via Roma 123, Tuscany</p>
                </div>
              }
            />

            {/* Accommodation */}
            <InfoSection
              icon={<Building2 className="w-8 h-8 text-rose-600" />}
              title="Accommodation"
              content={
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-rose-900">Hotel Centrale</p>
                    <p className="text-rose-700">Special rate: €120/night</p>
                    <p className="text-rose-600 text-sm">Mention "Emma & Marco Wedding"</p>
                  </div>
                  <div>
                    <p className="font-medium text-rose-900">Villa Toscana B&B</p>
                    <p className="text-rose-700">Boutique experience</p>
                    <p className="text-rose-600 text-sm">15 minutes from venue</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-rose-900 mb-6">Wedding Registry</h2>
          <div className="w-16 h-px bg-rose-400 mx-auto mb-8"></div>
          <p className="text-lg text-rose-700 mb-8 leading-relaxed">
            Your presence is the greatest present, but if you'd like to honor us with a gift, 
            we've created a registry to help us start our new home together.
          </p>
          <div className="space-y-4">
            <p className="text-rose-800 font-medium">Registry available at:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="px-4 py-2 bg-rose-100 text-rose-800 rounded-full">Williams Sonoma</span>
              <span className="px-4 py-2 bg-rose-100 text-rose-800 rounded-full">Crate & Barrel</span>
              <span className="px-4 py-2 bg-rose-100 text-rose-800 rounded-full">Amazon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-rose-900 mb-6">Can't Wait to Celebrate With You!</h2>
          <p className="text-lg text-rose-700 mb-8">
            Please let us know if you can join us by responding to our invitation.
          </p>
          <Link to="/rsvp">
            <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-light tracking-wide">
              RSVP Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
