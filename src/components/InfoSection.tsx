
import React from 'react';

interface InfoSectionProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const InfoSection = ({ icon, title, content }: InfoSectionProps) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-light text-rose-900 ml-3">{title}</h3>
      </div>
      <div className="text-rose-700">
        {content}
      </div>
    </div>
  );
};

export default InfoSection;
