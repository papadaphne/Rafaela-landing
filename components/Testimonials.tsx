
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Apa Kata Pelanggan Kami?</h2>
          <p className="text-lg text-zinc-400 mt-2 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </div>
        <div className="flex overflow-x-auto space-x-8 pb-4 -mx-6 px-6">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 p-8 rounded-xl shadow-lg flex flex-col flex-shrink-0 w-80 md:w-96">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-amber-400" />)}
              </div>
              <p className="text-zinc-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto pt-4 border-t border-zinc-800/60">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-zinc-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;