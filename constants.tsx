import React from 'react';
import type { Service, Feature, PortfolioItem, Testimonial } from './types';

// Icons
const PrintIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
);
const StickerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h2zm10 0h.01M17 3h-2a2 2 0 00-2 2v5a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2zm0 10h.01M17 13h-2a2 2 0 00-2 2v5a2 2 0 002 2h2a2 2 0 002-2v-5a2 2 0 00-2-2zM7 13h5a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h2z" /></svg>
);
const DesignIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
);
const InvitationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);
const QualityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const PriceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1h4a1 1 0 011 1v1h-1M6 6h1v1H6V6z" /></svg>
);
const SpeedIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const ServiceIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);

// Contact Info
export const CONTACT_INFO = {
  whatsapp: '08979012852',
  whatsappLink: 'https://wa.me/628979012852',
  instagram: '@rafaelaprint',
  instagramLink: 'https://instagram.com/rafaelaprint',
  email: 'rafaela.digitalprint@gmail.com',
  emailLink: 'mailto:rafaela.digitalprint@gmail.com',
};

// Page Content
export const SERVICES_DATA: Service[] = [
  {
    icon: <PrintIcon className="w-12 h-12 text-sky-400" />,
    title: 'Cetak Banner & Spanduk',
    description: 'Cetak banner, spanduk, baliho, dan media promosi outdoor lainnya dengan bahan berkualitas dan warna tajam.',
  },
  {
    icon: <InvitationIcon className="w-12 h-12 text-sky-400" />,
    title: 'Desain & Cetak Undangan',
    description: 'Cetak undangan pernikahan, ulang tahun, dan acara spesial lainnya dengan desain eksklusif dan bahan premium.',
  },
  {
    icon: <StickerIcon className="w-12 h-12 text-sky-400" />,
    title: 'Stiker Vinyl & Chromo',
    description: 'Produksi stiker untuk branding, label kemasan, atau dekorasi dengan berbagai pilihan bahan dan finishing.',
  },
  {
    icon: <DesignIcon className="w-12 h-12 text-sky-400" />,
    title: 'Kartu Nama & Brosur',
    description: 'Cetak kartu nama, brosur, flyer, dan materi marketing lainnya untuk menunjang citra profesional bisnis Anda.',
  },
  {
    icon: <PrintIcon className="w-12 h-12 text-sky-400" />,
    title: 'Cetak A3+ & Dokumen',
    description: 'Cetak poster, menu, sertifikat, dan dokumen lainnya di kertas A3+ dengan cepat dan hasil memuaskan.',
  },
  {
    icon: <DesignIcon className="w-12 h-12 text-sky-400" />,
    title: 'Jasa Desain Grafis',
    description: 'Butuh bantuan desain? Tim kami siap membantu mewujudkan konsep visual Anda menjadi desain yang menarik.',
  },
];

export const FEATURES_DATA: Feature[] = [
    {
      icon: <QualityIcon className="w-10 h-10 text-sky-400" />,
      title: 'Kualitas Cetak Terbaik',
      description: 'Kami menggunakan mesin cetak modern dan tinta premium untuk memastikan hasil cetak yang tajam dan tahan lama.',
    },
    {
      icon: <PriceIcon className="w-10 h-10 text-sky-400" />,
      title: 'Harga Kompetitif',
      description: 'Dapatkan penawaran harga terbaik tanpa mengorbankan kualitas. Solusi cetak hemat untuk semua kebutuhan.',
    },
    {
      icon: <SpeedIcon className="w-10 h-10 text-sky-400" />,
      title: 'Proses Cepat & Tepat Waktu',
      description: 'Kami menghargai waktu Anda. Proses produksi yang efisien memastikan pesanan Anda selesai sesuai jadwal.',
    },
    {
      icon: <ServiceIcon className="w-10 h-10 text-sky-400" />,
      title: 'Pelayanan Ramah & Profesional',
      description: 'Tim kami siap membantu Anda mulai dari konsultasi, desain, hingga proses cetak dengan pelayanan terbaik.',
    },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
    { id: 1, imageUrls: ['https://img.lovepik.com/free-template/bg/20200708/bg/d2c7cf5813e39_390665.png_detail.jpg', 'https://www.pranataprinting.com/wp-content/uploads/2022/08/Contoh-Desain-Banner-Seminar-scaled.jpg'], category: 'Banner', title: 'Banner Promosi Event' },
    { id: 2, imageUrls: ['https://down-id.img.susercontent.com/file/id-11134207-7r98v-lrdwaj8ed6x23e', 'https://i.pinimg.com/736x/21/53/7d/21537df127393b6e8a4a58b3c3c7cb52.jpg'], category: 'Undangan', title: 'Undangan Pernikahan Floral' },
    { id: 3, imageUrls: ['https://serbabisnis.com/wp-content/uploads/2020/11/Spanduk-Toko-Sembako-Background-Ungu.jpg', 'https://i.pinimg.com/originals/11/8c/aa/118caa04439c322d7d5d2822a16d6ea7.jpg'], category: 'Banner', title: 'Spanduk Grand Opening Toko' },
    { id: 4, imageUrls: ['https://down-id.img.susercontent.com/file/id-11134207-7r98u-lwnp26uidhj1cb', 'https://i.pinimg.com/736x/8f/1a/0a/8f1a0a550993f45d8b8e88e8b0a7c449.jpg'], category: 'Undangan', title: 'Undangan Akikah Minimalis' },
    { id: 5, imageUrls: ['https://mir-s3-cdn-cf.behance.net/project_modules/1400/3e9f05118712349.608f657448d88.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhV6eW8a2W8w8Q1Q4q1d4D7f7w4Y_p5V4vA&s'], category: 'Stiker', title: 'Stiker Label Produk Kopi' },
    { id: 6, imageUrls: ['https://i.pinimg.com/564x/1e/8c/74/1e8c7416353a8a3c500b54347710323c.jpg', 'https://i.pinimg.com/564x/fa/5f/81/fa5f81e8093b1376d29d8d643a14e1a3.jpg'], category: 'Kartu Nama', title: 'Kartu Nama Korporat Elegan' },
];


export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        quote: "Hasil cetak bannernya luar biasa! Warnanya tajam dan bahannya tebal. Pelayanannya juga cepat dan ramah. Sangat direkomendasikan!",
        name: "Andi Wijaya",
        role: "Pemilik Coffee Shop",
        avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Saya pesan stiker label untuk produk saya, hasilnya rapi banget dan cuttingnya presisi. Harganya juga terjangkau untuk UKM seperti saya. Pasti order lagi.",
        name: "Siti Aminah",
        role: "Pengusaha Makanan Ringan",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "Butuh kartu nama mendadak dan Rafaela Print jadi penyelamat. Desainnya dibantu, prosesnya cepat, dan hasilnya elegan. Terima kasih banyak!",
        name: "Budi Santoso",
        role: "Freelance Consultant",
        avatarUrl: "https://randomuser.me/api/portraits/men/36.jpg"
    }
];