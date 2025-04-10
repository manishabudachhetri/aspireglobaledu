

const HeroSection = () => {
  return (
    <section className="relative h-[calc(100vh-32px)]" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Aspire Global Education"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          style={{
            imageRendering: "auto",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            filter: "brightness(0.95) contrast(1.02) saturate(1.05)",
          }}
        />
        {/* Overlay with slightly reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Content */}
      <div className="relative h-full pt-28 pb-16 px-4 md:px-0">
        <div className="container mx-auto h-full flex items-center">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Best Educational Consultancy In Nepal 
            </h1>
            <p className="text-lg text-white/80">
              We help students achieve their academic goals with tailored guidance,
              innovative learning programs, and exceptional support services for global educational success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
















