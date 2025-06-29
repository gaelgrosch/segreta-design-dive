
import React from 'react';

interface MinimalInputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}

const MinimalInput = ({ placeholder, value, onChange, type = "text", required = false }: MinimalInputProps) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-0 border-b border-black pb-2 text-black placeholder-gray-300 focus:outline-none focus:border-black"
      />
    </div>
  );
};

export default MinimalInput;
