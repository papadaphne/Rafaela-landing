import React from 'react';
import { FEATURES_DATA } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">Kenapa Memilih Rafaela Print?</h2>
            <p className="text-lg text-gray-400 mb-8">
              Kami bukan sekadar tempat mencetak. Kami adalah partner Anda, dengan keahlian khusus pada banner promosi dan undangan, untuk mewujudkan setiap ide menjadi karya cetak yang berkesan.
            </p>
            <div className="space-y-6">
              {FEATURES_DATA.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-slate-800 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1544723023-a1f9f59f81b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Proses digital printing di Rafaela Print Semarang" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;