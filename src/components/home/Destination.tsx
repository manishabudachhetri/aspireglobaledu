import  { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Destination: React.FC = () => {
  const destinations = [
    {
      country: "USA",
      image: "https://images.unsplash.com/photo-1556146385-97d8a0b5e66b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      country: "France",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
    },
    {
      country: "UK",
      image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= destinations.length ? 0 : prev + 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? destinations.length - 2 : prev - 2));
  };

  return (
    <section className="bg-[#E5F1FF] py-16">
      <div className="max-w-[1200px] mx-auto px-8 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Text Content */}
          <div className="pr-8">
            <div className="mb-8">
              <h2 className="text-[#FF8E3C] text-2xl mb-2">Pick Your Destinations</h2>
              <h1 className="text-[#074293] text-4xl font-bold mb-8">Study Your Favourite Country</h1>
            </div>

            <div className="mb-8">
              <p className="text-black-700 mb-4 text-justify">
                Choosing the right study destination is a crucial step toward shaping your future. Whether you dream of studying in Dubai, the UK, Malta, or other global destinations, we help you explore the best opportunities, such country offers unique academic programs, cultural experiences, and career prospects.
              </p>
              <p className="text-black-700 text-justify">
                Our expert team provides personalized guidance, ensuring you select the ideal country based on your academic goals, budget, lifestyle preferences, and career aspirations. From university selection to visa processing, we make your study abroad journey smooth and hassle-free.
              </p>
            </div>

            <button className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
              <span>View All</span>
              <BsArrowRight />
            </button>
          </div>

          {/* Right Column - Images */}
          <div className="pl-8">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[0, 1].map((offset) => {
                  const index = (currentIndex + offset) % destinations.length;
                  const destination = destinations[index];
                  return (
                    <div key={index} className="aspect-[2/3] w-full overflow-hidden relative group">
                      <img 
                        src={destination.image}
                        alt={`Study in ${destination.country}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-semibold">Study in {destination.country}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Navigation Arrows */}
              <div className="absolute -bottom-16 right-0 flex items-center space-x-4">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 bg-[#074293] shadow-md flex items-center justify-center hover:bg-[#0a3b7c] transition-colors duration-300"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="text-white"
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 bg-[#074293] shadow-md flex items-center justify-center hover:bg-[#0a3b7c] transition-colors duration-300"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="text-white"
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;