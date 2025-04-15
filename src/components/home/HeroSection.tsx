

import React, { useState } from 'react';

interface RoundedPillProps {
  activeDotIndex: number;
  dotCount: number;
  onDotClick: (index: number) => void;
}

const RoundedPill: React.FC<RoundedPillProps> = ({
  activeDotIndex,
  dotCount,
  onDotClick
}) => {
  return (
    <div className="flex flex-col items-center gap-3 bg-[#074293]/20 backdrop-blur-sm px-3 py-4 rounded-full">
      {Array.from({ length: dotCount }, (_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
            ${index === activeDotIndex 
              ? 'bg-[#074293] transform scale-110' 
              : 'bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      title: "Best Educational Consultancy In Nepal",
      description: "We help students achieve their academic goals with tailored guidance, innovative learning programs, and exceptional support services for global educational success.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    },
    {
      title: "Expert Guidance for Your Future",
      description: "Get personalized counseling and support for your international education journey from our experienced consultants.",
      image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    },
    {
      title: "Your Gateway to Global Education",
      description: "Access top universities worldwide with our comprehensive admission and visa support services.",
      image: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    },
    {
      title: "Achieve Your Study Abroad Dreams",
      description: "Let us help you transform your international education aspirations into reality with our proven expertise.",
      image: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    }
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative h-[calc(100vh-32px)]" id="home">
      {/* Background Image with Transition */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000
              ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            style={{
              imageRendering: "auto",
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
              filter: "brightness(0.95) contrast(1.02) saturate(1.05)",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full pt-28 pb-16 px-4 md:px-0">
        <div className="container mx-auto h-full flex items-center">
          {/* Text Content with Transition */}
          <div className="flex-1 max-w-2xl space-y-6 text-white relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 absolute
                  ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/80 mt-6">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* RoundedPill Navigation */}
          <div className="hidden lg:block absolute right-8">
            <RoundedPill 
              activeDotIndex={activeIndex}
              dotCount={slides.length}
              onDotClick={handleDotClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;























