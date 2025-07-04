
import React from 'react';

interface MinimalRadioProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}

const MinimalRadio = ({ options, value, onChange, name }: MinimalRadioProps) => {
  return (
    <div className="space-y-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center cursor-pointer">
          <div className="relative mr-3">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="sr-only"
            />
            <div className="w-4 h-4 border border-black flex items-center justify-center">
              {value === option.value && (
                <div className="w-4 h-4">
                  <svg viewBox="0 0 10 10" className="w-full h-full">
                    <line x1="0" y1="0" x2="10" y2="10" stroke="black" strokeWidth="1"/>
                    <line x1="10" y1="0" x2="0" y2="10" stroke="black" strokeWidth="1"/>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <span className="text-black">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default MinimalRadio;
