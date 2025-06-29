
import React from 'react';

interface MinimalTextareaProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

const MinimalTextarea = ({ placeholder, value, onChange, rows = 4 }: MinimalTextareaProps) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-transparent border border-black p-3 text-black placeholder-gray-400 focus:outline-none focus:border-black resize-none"
      />
    </div>
  );
};

export default MinimalTextarea;
