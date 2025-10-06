
import React from 'react';

const Step: React.FC<{ number: string, title: string, description: string }> = ({ number, title, description }) => (
    <div className="relative pl-12 pb-8 border-l-2 border-zinc-800">
        <div className="absolute -left-5 top-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-md">
            {number}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
    </div>
);

const HowToOrder: React.FC = () => {
  return (
    <section id="how-to-order" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Cara Pemesanan Sangat Mudah</h2>
          <p className="text-lg text-zinc-400 mt-2">Hanya dalam 3 langkah sederhana, pesanan Anda siap kami proses.</p>
        </div>
        <div className="max-w-2xl mx-auto">
            <Step 
                number="1"
                title="Konsultasi & Kirim File"
                description="Hubungi kami melalui WhatsApp atau Email. Sampaikan kebutuhan Anda dan kirimkan file desain yang sudah siap cetak."
            />
            <Step 
                number="2"
                title="Konfirmasi & Pembayaran"
                description="Tim kami akan mengkonfirmasi detail pesanan dan total biaya. Lakukan pembayaran agar pesanan dapat segera diproses."
            />
             <div className="relative pl-12">
                <div className="absolute -left-5 top-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-md">
                    3
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Proses Cetak & Pengiriman</h3>
                <p className="text-zinc-400">Kami akan segera mencetak pesanan Anda. Setelah selesai, pesanan bisa diambil di workshop kami atau kami kirimkan ke alamat Anda di seluruh Indonesia.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;