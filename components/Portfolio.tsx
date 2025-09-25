import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import type { PortfolioItem } from '../types';

const ChevronLeftIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);


const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? item.imageUrls.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        const isLastSlide = currentIndex === item.imageUrls.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg">
            {/* Image and Carousel Container */}
            <div className="relative w-full h-full">
                <img src={item.imageUrls[currentIndex]} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>

            {/* Navigation Arrows */}
            <button
                aria-label="Previous image"
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
                <ChevronLeftIcon />
            </button>
            <button
                aria-label="Next image"
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black/30 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
                <ChevronRightIcon />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
                {item.imageUrls.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        aria-label={`Go to image ${slideIndex + 1}`}
                        onClick={() => goToSlide(slideIndex)}
                        className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-sky-400' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                <span className="text-sm font-semibold bg-sky-500 text-white py-1 px-3 rounded-full self-start mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
        </div>
    )
};

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">Portofolio Hasil Cetak Kami</h2>
                    <p className="text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
                        Lihat beberapa karya terbaik yang telah kami produksi untuk klien kami.
                    </p>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {PORTFOLIO_DATA.map((item) => (
                        <PortfolioCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;