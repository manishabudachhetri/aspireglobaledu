

import { useState, useEffect } from "react";
import WebsiteBanner from "../../assets/images/Websiteban.jpg";

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
              ? 'bg-[#FF8E3C] transform scale-110' 
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
      image: WebsiteBanner
    },
    {
      title: "Expert Guidance for Your Future",
      description: "Get personalized counseling and support for your international education journey from our experienced consultants. We ensure your path to success is clear and achievable.",
      image: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    },
    {
      title: "Your Gateway to Global Education",
      description: "Access top universities worldwide with our comprehensive admission and visa support services.",
      image: "https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    },
    {
      title: "Achieve Your Study Abroad Dreams",
      description: "Let us help you transform your international education aspirations into reality with our proven expertise and comprehensive support system.",
      image: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
    }
  ];

  useEffect(() => {
    // Create an interval that changes slides every 4 seconds
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 4000); // 4000ms = 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative h-[110vh]" id="home"> {/* Changed from h-[120vh] to h-[110vh] */}
      {/* Background Image with Transition */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute transition-opacity duration-1000
              ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            style={index === 0 ? {
              position: 'absolute',
              width: '100%',
              height: '120%',
              objectFit: 'contain',
              objectPosition: 'center 70%',
              backgroundColor: "#074293",
              top: '53%', // Changed from 48% to 50% to move down more
              left: '50%',
              transform: 'translate(-50%, -50%) scale(1.1)',
              padding: '20px',
            } : {
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full pt-20 pb-12 px-4 md:px-0">
        <div className="container mx-auto h-full flex items-center">
          {/* Text Content with Transition */}
          <div className="flex-1 max-w-2xl space-y-6 text-white relative z-10 ml-16">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 w-full text-left absolute
                  ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  minHeight: '200px' // Ensures consistent height
                }}
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/80">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* RoundedPill Navigation */}
          <div className="hidden lg:block absolute right-8 z-10">
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



















































