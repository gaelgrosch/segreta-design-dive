
import React from 'react';

interface MinimalCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const MinimalCheckbox = ({ checked, onChange, label }: MinimalCheckboxProps) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative mr-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div className="w-4 h-4 border border-black flex items-center justify-center">
          {checked && (
            <div className="w-2 h-2">
              <svg viewBox="0 0 10 10" className="w-full h-full">
                <line x1="2" y1="2" x2="8" y2="8" stroke="black" strokeWidth="1"/>
                <line x1="8" y1="2" x2="2" y2="8" stroke="black" strokeWidth="1"/>
              </svg>
            </div>
          )}
        </div>
      </div>
      <span className="text-black">{label}</span>
    </label>
  );
};

export default MinimalCheckbox;
