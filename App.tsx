import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import HowToOrder from './components/HowToOrder';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import { CONTACT_INFO } from './constants';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const Location: React.FC = () => {
    return (
        <section id="location" className="py-20 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Temukan Kami di Semarang</h2>
                    <p className="text-lg text-zinc-400 mt-2 max-w-2xl mx-auto">
                        Kunjungi workshop kami untuk konsultasi langsung atau pengambilan pesanan.
                    </p>
                </div>
                <div className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden border border-zinc-800">
                    <div className="flex flex-col lg:flex-row">
                         <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-6">Alamat & Jam Buka</h3>
                            <div className="space-y-4 text-zinc-300">
                                <div className="flex items-start gap-4">
                                    <LocationIcon className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                                    <p>{CONTACT_INFO.address}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <ClockIcon className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-white">Jam Operasional:</p>
                                        <p>Senin - Sabtu: 09:00 - 17:00</p>
                                        <p>Minggu & Hari Libur: Tutup</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-80 lg:h-auto min-h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.339711124446!2d110.4678149759247!3d-6.96903899303254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f2f3b0ffffff%3A0x8e877e5d871783d2!2sRafaela%20Print!5e0!3m2!1sen!2sid!4v1719293120155!5m2!1sen!2sid"
                                className="w-full h-full border-0"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Rafaela Print di Google Maps">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

const App: React.FC = () => {
  return (
    <div 
      className="bg-zinc-950 text-zinc-200 antialiased"
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <HowToOrder />
        <Testimonials />
        <Location />
        <CallToAction />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;