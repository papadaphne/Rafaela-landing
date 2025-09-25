
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-wider">
            Rafaela<span className="text-sky-400">Print</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-sky-400 transition">Layanan</a>
            <a href="#portfolio" className="text-gray-300 hover:text-sky-400 transition">Portofolio</a>
            <a href="#contact" className="text-gray-300 hover:text-sky-400 transition">Kontak</a>
          </nav>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-sky-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-sky-600 transition-colors shadow-md"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
