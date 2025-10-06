import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Layanan' },
    { href: '#portfolio', label: 'Portofolio' },
    { href: '#location', label: 'Lokasi' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-zinc-950/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-wider" onClick={() => setIsMenuOpen(false)}>
            Rafaela<span className="text-blue-500">Print</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
                <a key={link.href} href={link.href} className="text-zinc-300 hover:text-blue-500 transition">{link.label}</a>
            ))}
          </nav>
          
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
          >
            Hubungi Kami
          </a>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}`}>
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-zinc-300 hover:text-blue-500 transition text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Hubungi Kami
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;