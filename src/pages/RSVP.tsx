
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase, type RSVPData } from '@/lib/supabase';
import WeddingHeader from '@/components/WeddingHeader';
import MinimalInput from '@/components/MinimalInput';
import MinimalRadio from '@/components/MinimalRadio';
import MinimalCheckbox from '@/components/MinimalCheckbox';
import MinimalTextarea from '@/components/MinimalTextarea';

const RSVP = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    attendance: '',
    plusOne: false,
    plusOneName: '',
    dietaryRestrictions: '',
    mealPreference: '',
    songRequest: '',
    specialAccommodations: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Transform form data to match database schema
      const rsvpData: Omit<RSVPData, 'id' | 'createdAt'> = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || undefined,
        attendance: formData.attendance as 'yes' | 'no',
        plusOne: formData.plusOne,
        plusOneName: formData.plusOne ? formData.plusOneName || undefined : undefined,
        dietaryRestrictions: formData.dietaryRestrictions || undefined,
        mealPreference: formData.mealPreference || undefined,
        songRequest: formData.songRequest || undefined,
        specialAccommodations: formData.specialAccommodations || undefined,
        message: formData.message || undefined,
      };

      const { error } = await supabase
        .from('rsvps')
        .insert([
          {
            first_name: rsvpData.firstName,
            last_name: rsvpData.lastName,
            email: rsvpData.email,
            phone: rsvpData.phone,
            attendance: rsvpData.attendance,
            plus_one: rsvpData.plusOne,
            plus_one_name: rsvpData.plusOneName,
            dietary_restrictions: rsvpData.dietaryRestrictions,
            meal_preference: rsvpData.mealPreference,
            song_request: rsvpData.songRequest,
            special_accommodations: rsvpData.specialAccommodations,
            message: rsvpData.message,
          }
        ])
        .select();

      if (error) {
        throw error;
      }

      toast({
        title: "RSVP Submitted Successfully!",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        attendance: '',
        plusOne: false,
        plusOneName: '',
        dietaryRestrictions: '',
        mealPreference: '',
        songRequest: '',
        specialAccommodations: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Error Submitting RSVP",
        description: "There was an error submitting your RSVP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const attendanceOptions = [
    { value: 'yes', label: 'Yes, I will attend' },
    { value: 'no', label: 'No, I cannot attend' }
  ];

  const mealOptions = [
    { value: 'chicken', label: 'Herb-Crusted Chicken' },
    { value: 'beef', label: 'Tuscan Beef Tenderloin' },
    { value: 'fish', label: 'Mediterranean Sea Bass' },
    { value: 'vegetarian', label: 'Vegetarian Pasta' },
    { value: 'vegan', label: 'Vegan Mediterranean Bowl' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#718E98', minHeight: '100vh' }}>
      <WeddingHeader />
      
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Images */}
          <div className="space-y-[10px]">
            <img src="../photo-1603437873662-dc1f44901825.avif" alt="Wedding couple" className="w-full h-64 object-cover" />
            <img src="../premium_photo-1750864966538-6ffa25bc236a.avif" alt="Wedding venue" className="h-128 w-full object-cover" />
          </div>
          
          {/* Right Column - Form */}
          <div>
            <div className="mb-12">
              <h1 className="text-4xl font-light text-black mb-4 tracking-wide">RSVP</h1>
              <div className="w-16 h-px bg-black mb-6"></div>
              <p className="text-black">Please respond by May 15th, 2024</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Personal Information */}
              <div className="space-y-8">
                <h2 className="text-lg font-medium text-black">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <MinimalInput
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(value) => setFormData(prev => ({ ...prev, firstName: value }))}
                    required
                  />
                  <MinimalInput
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(value) => setFormData(prev => ({ ...prev, lastName: value }))}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <MinimalInput
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
                    required
                  />
                  <MinimalInput
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                  />
                </div>
              </div>

              {/* Attendance */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-black">Will you be attending?</h3>
                <MinimalRadio
                  options={attendanceOptions}
                  value={formData.attendance}
                  onChange={(value) => setFormData(prev => ({ ...prev, attendance: value }))}
                  name="attendance"
                />
              </div>

              {/* Plus One */}
              {formData.attendance === 'yes' && (
                <>
                  <div className="space-y-6">
                    <MinimalCheckbox
                      checked={formData.plusOne}
                      onChange={(checked) => setFormData(prev => ({ ...prev, plusOne: checked }))}
                      label="I will be bringing a guest"
                    />
                    
                    {formData.plusOne && (
                      <MinimalInput
                        placeholder="Guest Name"
                        value={formData.plusOneName}
                        onChange={(value) => setFormData(prev => ({ ...prev, plusOneName: value }))}
                      />
                    )}
                  </div>

                  {/* Meal Preferences */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-black">Meal Preference</h3>
                    <MinimalRadio
                      options={mealOptions}
                      value={formData.mealPreference}
                      onChange={(value) => setFormData(prev => ({ ...prev, mealPreference: value }))}
                      name="meal"
                    />
                  </div>

                  <div className="space-y-6">
                    <MinimalTextarea
                      placeholder="Dietary restrictions or allergies"
                      value={formData.dietaryRestrictions}
                      onChange={(value) => setFormData(prev => ({ ...prev, dietaryRestrictions: value }))}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-6">
                    <MinimalInput
                      placeholder="Song request for the reception"
                      value={formData.songRequest}
                      onChange={(value) => setFormData(prev => ({ ...prev, songRequest: value }))}
                    />
                  </div>

                  <div className="space-y-6">
                    <MinimalTextarea
                      placeholder="Special accommodations needed"
                      value={formData.specialAccommodations}
                      onChange={(value) => setFormData(prev => ({ ...prev, specialAccommodations: value }))}
                      rows={3}
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div className="space-y-6">
                <MinimalTextarea
                  placeholder="Message for the couple"
                  value={formData.message}
                  onChange={(value) => setFormData(prev => ({ ...prev, message: value }))}
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="text-black border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
