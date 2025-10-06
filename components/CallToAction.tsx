
import React from 'react';
import { CONTACT_INFO } from '../constants';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Siap Cetak Kebutuhan Anda?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami. Diskusikan kebutuhan cetak Anda dan dapatkan penawaran harga terbaik dari Rafaela Print, di manapun Anda berada!
          </p>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-bold py-3 px-10 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg inline-block"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;