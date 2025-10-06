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
const NotaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
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
const ShippingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        <path d="M19 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 17H6V6h10v4l4 4V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v11m3-3H6" />
    </svg>
);


// Contact Info
export const CONTACT_INFO = {
  whatsapp: '08979012852',
  whatsappLink: 'https://wa.me/628979012852',
  instagram: '@rafaelaprint',
  instagramLink: 'https://instagram.com/rafaelaprint',
  email: 'rafaela.digitalprint@gmail.com',
  emailLink: 'mailto:rafaela.digitalprint@gmail.com',
  address: 'Jl. Kaumandowo, Kudu, Kec. Genuk, Kota Semarang, Jawa Tengah 50116',
};

// Page Content
export const SERVICES_DATA: Service[] = [
  {
    icon: <InvitationIcon className="w-12 h-12 text-blue-500" />,
    title: 'Desain & Cetak Undangan',
    description: 'Cetak undangan pernikahan, khitan, dan acara lainnya dengan desain custom eksklusif dan berbagai pilihan bahan premium.',
  },
  {
    icon: <PrintIcon className="w-12 h-12 text-blue-500" />,
    title: 'Cetak Banner & Spanduk MMT',
    description: 'Cetak banner, spanduk, MMT, atau baliho untuk promosi dengan bahan flexi berkualitas, warna tajam, dan hasil tahan lama.',
  },
  {
    icon: <NotaIcon className="w-12 h-12 text-blue-500" />,
    title: 'Cetak Nota & Kwitansi NCR',
    description: 'Cetak nota, surat jalan, invoice, atau kwitansi rangkap menggunakan kertas NCR (carbonless) untuk administrasi bisnis Anda.',
  },
  {
    icon: <DesignIcon className="w-12 h-12 text-blue-500" />,
    title: 'Cetak Brosur & Flyer',
    description: 'Promosikan bisnis Anda dengan brosur dan flyer full color. Tersedia berbagai pilihan kertas dan ukuran untuk kebutuhan marketing.',
  },
  {
    icon: <StickerIcon className="w-12 h-12 text-blue-500" />,
    title: 'Stiker Vinyl & Chromo',
    description: 'Produksi stiker untuk branding, label kemasan, atau dekorasi dengan berbagai pilihan bahan dan finishing (cutting).',
  },
  {
    icon: <PrintIcon className="w-12 h-12 text-blue-500" />,
    title: 'Cetak A3+ & Kartu Nama',
    description: 'Cetak poster, menu, sertifikat, dan kartu nama di kertas A3+ dengan cepat dan hasil memuaskan.',
  },
];

export const FEATURES_DATA: Feature[] = [
    {
      icon: <QualityIcon className="w-10 h-10 text-blue-500" />,
      title: 'Kualitas Cetak Terbaik',
      description: 'Kami menggunakan mesin cetak modern dan tinta premium untuk memastikan hasil cetak yang tajam dan tahan lama.',
    },
    {
      icon: <PriceIcon className="w-10 h-10 text-blue-500" />,
      title: 'Harga Kompetitif',
      description: 'Dapatkan penawaran harga terbaik tanpa mengorbankan kualitas. Solusi cetak hemat untuk semua kebutuhan.',
    },
    {
      icon: <SpeedIcon className="w-10 h-10 text-blue-500" />,
      title: 'Proses Cepat & Tepat Waktu',
      description: 'Kami menghargai waktu Anda. Proses produksi yang efisien memastikan pesanan Anda selesai sesuai jadwal.',
    },
     {
      icon: <ShippingIcon className="w-10 h-10 text-blue-500" />,
      title: 'Jangkauan Nasional',
      description: 'Meskipun berbasis di Semarang, kami siap mengirimkan pesanan Anda ke seluruh penjuru Indonesia dengan aman.',
    },
    {
      icon: <ServiceIcon className="w-10 h-10 text-blue-500" />,
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
        quote: "Cetak banner MMT di sini sat set banget. Sore pesan, besok pagi udah jadi. Warnanya juga pas, nggak pudar. Mantap pokoknya!",
        name: "Joko Susilo",
        role: "Pemilik Warung Makan",
    },
    {
        quote: "Undangan nikahanku jadi cantik banget! Desainnya dibantu sampai pas di hati. Mbaknya sabar banget ngadepin revisianku. Makasih ya!",
        name: "Rina & Doni",
        role: "Pasangan Pengantin",
    },
    {
        quote: "Langganan cetak nota NCR buat toko di sini. Kualitas kertasnya bagus, rangkapannya jelas. Harganya juga paling oke se-Semarang.",
        name: "Herawati",
        role: "Pemilik Toko Kelontong",
    },
    {
        quote: "Stiker buat brand olshop-ku hasilnya top. Cutting-nya rapi, bahannya juga anti air. Next order lagi pasti.",
        name: "Anisa Putri",
        role: "Mahasiswi & Online Seller",
    },
    {
        quote: "Butuh kartu nama express buat meeting, sehari langsung jadi. Desainnya elegan, kertasnya tebal. Profesional banget.",
        name: "David Kurniawan",
        role: "Marketing Executive",
    },
    {
        quote: "Cetak brosur buat promo, warnanya cerah dan detailnya tajam. Bikin brosurku keliatan mahal padahal harganya terjangkau.",
        name: "Kevin",
        role: "Koordinator Event",
    },
    {
        quote: "Spanduk buat acara 17-an RT kami hasilnya memuaskan. Kuat dan warnanya nggak luntur kena hujan. Warga semua suka.",
        name: "Sugiarto",
        role: "Ketua RT 05",
    },
    {
        quote: "Ngeprint poster A3+ buat tugas kuliah di sini hasilnya jernih. Pelayanannya cepat, cocok buat mahasiswa yang kejar deadline.",
        name: "Farhan",
        role: "Mahasiswa DKV",
    },
    {
        quote: "Pesan undangan khitanan anakku, desainnya lucu-lucu dan bisa custom. Prosesnya gampang dan nggak ribet.",
        name: "Fitriani",
        role: "Ibu Rumah Tangga",
    },
    {
        quote: "Pelayanannya juara! Ramah dan solutif. Apapun kebutuhan cetakku, dari stiker sampai banner, selalu ke Rafaela Print.",
        name: "Agung Nugroho",
        role: "Freelancer",
    }
];