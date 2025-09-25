import React from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568992688065-52092a83ab80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')" }}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-70 backdrop-blur-sm"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
          Spesialis Cetak Banner & Undangan
          <br />
          <span className="text-sky-400">Terbaik & Tercepat di Semarang</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Percayakan cetak banner, spanduk, dan undangan spesial Anda kepada kami. Hasil tajam, bahan berkualitas, dan proses cepat.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transition-transform transform hover:scale-105 shadow-lg"
            >
            Konsultasi via WhatsApp
            </a>
            <a
            href="#portfolio"
            className="bg-gray-700/50 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-600/70 transition-transform transform hover:scale-105 shadow-lg"
            >
            Lihat Portofolio
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;