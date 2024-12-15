import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/95 text-white z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-[#ff6700]" />
            <span className="text-xl font-bold">Ropy Kevin</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-[#ff6700] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#ff6700] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#ff6700] transition-colors">Skills</a>
            <a href="#blog" className="hover:text-[#ff6700] transition-colors">Blog</a>
            <a href="#contact" className="hover:text-[#ff6700] transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block hover:text-[#ff6700] transition-colors">About</a>
            <a href="#projects" className="block hover:text-[#ff6700] transition-colors">Projects</a>
            <a href="#skills" className="block hover:text-[#ff6700] transition-colors">Skills</a>
            <a href="#blog" className="block hover:text-[#ff6700] transition-colors">Blog</a>
            <a href="#contact" className="block hover:text-[#ff6700] transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;