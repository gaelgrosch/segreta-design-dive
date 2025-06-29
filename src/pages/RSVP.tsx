
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, Utensils, Music } from 'lucide-react';
import WeddingHeader from '@/components/WeddingHeader';

const RSVP = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Form Data:', formData);
    toast({
      title: "RSVP Submitted Successfully!",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <WeddingHeader />
      
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-rose-600 mx-auto mb-6" />
            <h1 className="text-5xl font-light text-rose-900 mb-4 tracking-wide">RSVP</h1>
            <div className="w-16 h-px bg-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-700 font-light">
              Please respond by May 15th, 2024
            </p>
            <p className="text-rose-600 mt-2">
              We're so excited to celebrate with you!
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-rose-600" />
                  <h2 className="text-2xl font-light text-rose-900">Personal Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-rose-800 font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="border-rose-200 focus:border-rose-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-rose-800 font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="border-rose-200 focus:border-rose-400"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-rose-800 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-rose-200 focus:border-rose-400"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-rose-800 font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="border-rose-200 focus:border-rose-400"
                    />
                  </div>
                </div>
              </div>

              {/* Attendance */}
              <div className="space-y-6">
                <h3 className="text-xl font-light text-rose-900">Will you be attending our wedding? *</h3>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) => handleInputChange('attendance', value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="text-rose-600" />
                    <Label htmlFor="yes" className="text-rose-800">Yes, I'll be there! 🎉</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="text-rose-600" />
                    <Label htmlFor="no" className="text-rose-800">Sorry, I can't make it 😢</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Plus One */}
              {formData.attendance === 'yes' && (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="plusOne"
                        checked={formData.plusOne}
                        onCheckedChange={(checked) => handleInputChange('plusOne', checked)}
                        className="border-rose-300"
                      />
                      <Label htmlFor="plusOne" className="text-rose-800 font-medium">
                        I'll be bringing a plus one
                      </Label>
                    </div>
                    
                    {formData.plusOne && (
                      <div className="space-y-2">
                        <Label htmlFor="plusOneName" className="text-rose-800 font-medium">Plus One Name</Label>
                        <Input
                          id="plusOneName"
                          value={formData.plusOneName}
                          onChange={(e) => handleInputChange('plusOneName', e.target.value)}
                          className="border-rose-200 focus:border-rose-400"
                          placeholder="Full name of your guest"
                        />
                      </div>
                    )}
                  </div>

                  {/* Meal Preferences */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Utensils className="w-6 h-6 text-rose-600" />
                      <h3 className="text-xl font-light text-rose-900">Dining Preferences</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-rose-800 font-medium">Meal Preference</Label>
                        <Select onValueChange={(value) => handleInputChange('mealPreference', value)}>
                          <SelectTrigger className="border-rose-200 focus:border-rose-400">
                            <SelectValue placeholder="Select your meal preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="chicken">Herb-Crusted Chicken</SelectItem>
                            <SelectItem value="beef">Tuscan Beef Tenderloin</SelectItem>
                            <SelectItem value="fish">Mediterranean Sea Bass</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian Pasta Primavera</SelectItem>
                            <SelectItem value="vegan">Vegan Mediterranean Bowl</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dietaryRestrictions" className="text-rose-800 font-medium">Dietary Restrictions or Allergies</Label>
                        <Textarea
                          id="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                          className="border-rose-200 focus:border-rose-400"
                          placeholder="Please let us know of any dietary restrictions, allergies, or special meal requests..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Entertainment */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Music className="w-6 h-6 text-rose-600" />
                      <h3 className="text-xl font-light text-rose-900">Help Us Party!</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="songRequest" className="text-rose-800 font-medium">Song Request</Label>
                      <Input
                        id="songRequest"
                        value={formData.songRequest}
                        onChange={(e) => handleInputChange('songRequest', e.target.value)}
                        className="border-rose-200 focus:border-rose-400"
                        placeholder="Any song you'd love to hear at our reception?"
                      />
                    </div>
                  </div>

                  {/* Special Accommodations */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="specialAccommodations" className="text-rose-800 font-medium">Special Accommodations</Label>
                      <Textarea
                        id="specialAccommodations"
                        value={formData.specialAccommodations}
                        onChange={(e) => handleInputChange('specialAccommodations', e.target.value)}
                        className="border-rose-200 focus:border-rose-400"
                        placeholder="Do you need any special accommodations? (wheelchair access, hearing assistance, etc.)"
                        rows={3}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-rose-800 font-medium">Message for the Happy Couple</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-rose-200 focus:border-rose-400"
                    placeholder="Share your excitement, well wishes, or any special message for Emma & Marco..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-rose-600 hover:bg-rose-700 text-white px-12 py-3 text-lg font-light tracking-wide"
                >
                  Submit RSVP
                </Button>
                <p className="text-rose-600 text-sm mt-4">
                  Thank you for taking the time to respond. We can't wait to celebrate with you!
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
