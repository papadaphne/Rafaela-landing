import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568992688065-52092a83ab80?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3')" }}
    >
      <div className="absolute inset-0 bg-zinc-950 bg-opacity-70 backdrop-blur-sm"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          Cetak Undangan, Banner, & Nota
          <br />
          <span className="text-blue-500">di Semarang</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
          Spesialis cetak undangan, banner, nota, dan brosur. Partner terpercaya Anda di Semarang, dengan jangkauan pengiriman ke seluruh Indonesia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition-transform transform hover:scale-105 shadow-lg"
            >
            Konsultasi via WhatsApp
            </a>
            <a
            href="#portfolio"
            className="bg-zinc-800/50 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-zinc-700/70 transition-transform transform hover:scale-105 shadow-lg"
            >
            Lihat Portofolio
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;