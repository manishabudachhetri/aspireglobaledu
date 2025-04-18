
import { useNavigate } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  const services = [
    {
      title: 'Career Counseling',
      description: 'Expert guidance to choose the right career path based on skills, interests, and future goals.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      path: '/services/career-counseling'
    },
    {
      title: 'Visa Assistance',
      description: 'Complete support for visa applications, documentation, and interview preparation to ensure approval.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
      path: '/services/visa-assistance'
    },
    {
      title: 'Test Preparation',
      description: 'Coaching for IELTS, TOEFL, and PTE to help students achieve high scores for university admissions.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
      path: '/services/test-preparation'
    },
    {
      title: 'Study Abroad',
      description: 'Assistance in studying in Dubai, the UK, and Malta with personalized study plans and university details.',
      image: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJyb2FkfGVufDB8fDB8fHww',
      path: '/services/study-abroad'
    },
    {
      title: 'Admission Guide',
      description: 'Support in university selection, application preparation, and securing admissions efficiently.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
      path: '/services/admission-guide'
    },
    {
      title: 'Insurance',
      description: 'Help in obtaining health and travel insurance for student safety and visa compliance.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
      path: '/services/insurance'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Our Solution</h1>
          <h2 className="text-[#074293] text-3xl font-bold">We Provide High Quality Educational Service</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service.path)}
              className="bg-white overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300 group border border-[#074293] cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"/>
                <div className="absolute bottom-0 w-full h-4">
                  <div className="h-2 bg-[#074293]"></div>
                  <div className="h-2 bg-[#FF8E3C]"></div>
                </div>
              </div>
              <div className="p-6 bg-black-100 text-center">
                <h3 className="text-[#074293] mb-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-black-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;






