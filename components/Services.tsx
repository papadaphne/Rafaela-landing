
import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Layanan Kami</h2>
          <p className="text-lg text-zinc-400 mt-2 max-w-2xl mx-auto">
            Dari kebutuhan promosi hingga personal, kami menyediakan solusi cetak terlengkap untuk Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={index}
              className="bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;