
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/home/CTASection.tsx';
import WorkingProcess from '../components/home/WorkingProcess.tsx';
import PartnersSection from '../components/home/PartnersSection';
import FooterSection from '../components/home/FooterSection';
import sishanImage from '../assets/images/sishan.jpg';
import sapanaImage from '../assets/images/sapana.jpg';

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div 
        className="relative w-full h-[400px] bg-cover bg-center mt-32"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">About us</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> / About Us
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm text-[#FF8E3C] font-semibold mb-2">
            About Aspire Global Education
          </p>
          <h2 className="text-3xl font-bold text-[#074293] mb-6">
            Grow your career with Aspire Global Education Consultancy
          </h2>
        </div>
        
        {/* First Grid Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-black text-justify">
            <p>
              Aspire Global Education Consultancy Pvt. Ltd. is a trusted and professional education consultancy. We assist students in pursuing higher education in Dubai, the UK, Malta, and other global destinations.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          
          {/* Images Container */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] w-full overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80" 
                alt="Student Consultation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] w-full overflow-hidden shadow-lg mt-16">
              <img 
                src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80" 
                alt="Campus Life"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CEO and MD Section */}
        <div className="mt-16">
          {/* CEO Section */}
          <div className="grid md:grid-cols-2">
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-[400px] w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#f8faff] p-4">
                  <div className="w-[300px] h-[300px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#edf4ff] shadow-lg overflow-hidden">
              <div className="p-8 flex flex-col justify-between h-[400px]">
                <div>
                  <p className="text-sm text-[#FF8E3C] font-semibold mb-1">Message From Top Level</p>
                  <h3 className="text-3xl font-bold text-[#074293] mb-4">Message from CEO</h3>
                  <div className="space-y-4 text-black text-justify">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-bold text-[#074293] text-xl">Gaurab Bhattarai</p>
                  <p className="text-sm font-bold text-black">Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>

          {/* MD Section */}
          <div className="grid md:grid-cols-2">
            <div className="bg-[#edf4ff] shadow-lg overflow-hidden">
              <div className="p-8 flex flex-col justify-between h-[400px]">
                <div>
                  <p className="text-sm text-[#FF8E3C] font-semibold mb-1">Message From Top Level</p>
                  <h3 className="text-3xl font-bold text-[#074293] mb-4">Message from MD</h3>
                  <div className="space-y-4 text-black text-justify">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="font-bold text-[#074293] text-xl">Binisha Neupane</p>
                  <p className="text-sm font-bold text-black">Managing Director (MD)</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="h-[400px] w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#f8faff] p-4">
                  <div className="w-[300px] h-[300px] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1590649613897-1d5c44ca3409?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="MD"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="space-y-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-[400px] overflow-hidden border-4 border-[#FF8E3C]">
                  <img 
                    src={sishanImage} 
                    alt="Team Member 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#074293]">Sishan Adhikari</h3>
                <p className="text-[#FF8E3C] font-medium">Sr.Counselor</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-[400px] overflow-hidden border-4 border-[#FF8E3C]">
                  <img 
                    src={sapanaImage} 
                    alt="Team Member 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#074293]">Sapana Gadal</h3>
                <p className="text-[#FF8E3C] font-medium">Jr.Counselor</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with adjusted spacing */}
        <div className="mb-20">
          <CTASection />
        </div>

        {/* Working Process with adjusted spacing */}
        <div className="mb-20">
          <WorkingProcess />
        </div>

        {/* Partners Section */}
        <div className="mb-10">
          <PartnersSection />
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Aboutus;









