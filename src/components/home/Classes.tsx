import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TestClass {
  name: string;
  image: string;
  path: string;
}

const OurClasses: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const testPrepClasses: TestClass[] = [
    { 
      name: 'PTE Class',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
      path: '/preparation/pte'
    },
    { 
      name: 'TOEFL Class',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      path: '/preparation/toefl'
    },
    { 
      name: 'IELTS Class',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
      path: '/preparation/ielts'
    },
    { 
      name: 'GRE Class',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      path: '/preparation/gre'
    },
    { 
      name: 'SAT Class',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      path: '/preparation/sat'
    },
    { 
      name: 'GMAT Class',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
      path: '/preparation/gmat'
    }
  ];

  const totalSlides = Math.ceil(testPrepClasses.length / 3);

  const handleClassClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  return (
    <section className="bg-white w-full py-16" id="preparation">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-[#FF8E3C] text-2xl mb-2">Our Classes</h1>
            <h2 className="text-[#074293] text-3xl font-bold">Test Preparation Classes</h2>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[...Array(totalSlides)].map((_, slideIndex: number) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {testPrepClasses
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((classItem, index) => (
                          <div 
                            key={index}
                            onClick={() => handleClassClick(classItem.path)}
                            className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                handleClassClick(classItem.path);
                              }
                            }}
                          >
                            <div className="relative h-48 overflow-hidden">
                              <img 
                                src={classItem.image}
                                alt={classItem.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="p-6 border-t border-gray-100">
                              <h3 className="text-xl font-semibold text-[#074293] text-center">
                                {classItem.name}
                              </h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalSlides)].map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#074293]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClasses;










