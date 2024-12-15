import { Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-black to-gray-900 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Software Developer
              <span className="text-[#ff6700]"> & </span>
              Trainer
            </h1>
            <p className="text-xl text-gray-300">
              Crafting innovative solutions and empowering the next generation of developers
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-[#ff6700] hover:bg-[#ff8533] px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="border-2 border-[#ff6700] hover:bg-[#ff6700] px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </a>
              <a
                href="../Ropy_Kevin_CV.pdf"
                download="Ropy_Kevin_CV.pdf"
                className="bg-[#ff6700] hover:bg-[#ff8533] px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#ff6700] rounded-full blur opacity-30 animate-pulse"></div>
              <div className="relative bg-black rounded-full p-8">
                <Code2 className="h-32 w-32 text-[#ff6700]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;