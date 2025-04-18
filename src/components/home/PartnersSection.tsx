
import { FC, useState, useEffect } from 'react';

const partners = [
  { 
    name: "ASTI Academy", 
    logo: new URL('../../assets/images/AstiAcademy.png', import.meta.url).href 
  },
  { 
    name: "British University in Dubai", 
    logo: new URL('../../assets/images/BritishUni.png', import.meta.url).href 
  },
  { 
    name: "British University College", 
    logo: new URL('../../assets/images/BritishUniversity.webp', import.meta.url).href 
  },
  { 
    name: "Britts Imperial University College", 
    logo: new URL('../../assets/images/Brittsimperial.png', import.meta.url).href 
  },
  { 
    name: "Kings International Institute", 
    logo: new URL('../../assets/images/Kingsinternational.jpg', import.meta.url).href 
  },
  { 
    name: "NEST Academy", 
    logo: new URL('../../assets/images/NestAcademy.png', import.meta.url).href 
  },
  { 
    name: "Pacific Link College", 
    logo: new URL('../../assets/images/Pacificlink.png', import.meta.url).href 
  },
  { 
    name: "Quantum University College", 
    logo: new URL('../../assets/images/QuantamUniversity.webp', import.meta.url).href 
  },
  { 
    name: "idea academy", 
    logo: new URL('../../assets/images/ideaacademy.png', import.meta.url).href 
  },
  { 
    name: "GBS Dubai", 
    logo: new URL('../../assets/images/GBSDubai.png', import.meta.url).href 
  },
  { 
    name: "University of CSEI Academy", 
    logo: new URL('../../assets/images/CSEIAcademy.png', import.meta.url).href 
  },
  { 
    name: "University of Central", 
    logo: new URL('../../assets/images/CentralUniversity.png', import.meta.url).href 
  },
  { 
    name: "University of westfordd", 
    logo: new URL('../../assets/images/westfordd.png', import.meta.url).href 
  },
  { 
    name: "University of westford", 
    logo: new URL('../../assets/images/westford.jpg', import.meta.url).href 
  }
];

interface Partner {
  name: string;
  logo: string;
}

const PartnersSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const partnersPerSlide = 4;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);

  // Auto-sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl text-[#FF8E3C]">Institutions</h2>
          <p className="text-[#074293] font-bold text-3xl mt-4">Our Affiliated Universities</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[...Array(totalSlides)].map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {partners
                      .slice(slideIndex * partnersPerSlide, (slideIndex + 1) * partnersPerSlide)
                      .map((partner, index) => (
                        <div 
                          key={index}
                          className="bg-white p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                          <img 
                            src={partner.logo} 
                            alt={partner.name}
                            className="max-h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                          />
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#074293] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;




