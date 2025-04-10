import React from 'react';
import { FileText, GraduationCap, UserCheck } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  count: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, count, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <p className="text-xl font-bold">{count}</p>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

const CTASection: React.FC = () => {
  const stats = [
    { icon: <FileText className="text-[#074293] w-8 h-8 mb-2" />, count: "2000+", label: "DOCUMENTATION" },
    { icon: <GraduationCap className="text-[#074293] w-8 h-8 mb-2" />, count: "356+", label: "COLLEGES" },
    { icon: <UserCheck className="text-[#074293] w-8 h-8 mb-2" />, count: "1100+", label: "ADMISSIONS" }
  ];

  return (
    <div className="font-sans">
      <section className="py-16" id="cta">
        <div className="w-full">
          <div className="bg-[#074293] py-24 flex flex-col items-center justify-center relative">
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
                Taking Education to Next Level with Technology
              </h2>
              <button 
                className="bg-white text-[#074293] px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300 font-medium flex items-center justify-center"
                type="button"
              >
                <span className="mr-2">▶</span> Watch Video
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-md w-full max-w-4xl py-8 px-4 absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  icon={stat.icon}
                  count={stat.count}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;





