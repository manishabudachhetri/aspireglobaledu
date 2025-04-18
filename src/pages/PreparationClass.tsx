import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../components/home/FooterSection';

interface TestClass {
  name: string;
  image: string;
  path: string;
}

const PreparationClass: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleClassClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

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

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div 
        className="relative w-full h-[400px] bg-cover bg-center mt-32"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Preparation Class</h1>
            <p className="mt-2 text-sm sm:text-base">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / Preparation Class
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Classes Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Preparation Class</h1>
          <h2 className="text-[#074293] text-3xl font-bold">Test Preparation Classes</h2>
        </div>

        {/* All Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testPrepClasses.map((classItem, index) => (
            <div 
              key={index}
              onClick={() => handleClassClick(classItem.path)}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
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
      <FooterSection />
    </div>
  );
};

export default PreparationClass;










