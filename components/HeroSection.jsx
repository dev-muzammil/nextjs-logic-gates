"use client";
const HeroSection = () => {
  return (
    <>
      <section className="text-gray-300 body-font select-none">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-100">
              <span className="text-slate-400">Logic gates:</span> Simplified
              and explained.
            </h1>
            <p className="mb-8 leading-relaxed text-xl sm:text-2xl font-semibold">
              Discover the fundamental building blocks of digital circuits. Our
              website provides clear explanations, interactive calculations, and
              real-world applications of logic gates!
            </p>
          </div>
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center"
              alt="hero"
              src="/hero.webp"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
