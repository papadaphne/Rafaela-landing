
import React from 'react';
import { CONTACT_INFO } from '../constants';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.4-.4.1-.1.2-.2.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1.1-.5 1.3-1 .2-.5.2-1 .1-1.1s-.2-.1-.4-.2m-4.6 5.8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6m0-13c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7m-8.7 7c0-2.4 1.1-4.5 2.8-5.8L3.5 16.2c-1.3-1.7-2-3.8-2-6.2z"/></svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
);

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white tracking-wider mb-4">
              Rafaela<span className="text-sky-400">Print</span>
            </h3>
            <p className="text-gray-400">
              Solusi cetak digital modern, cepat, dan terpercaya untuk semua kebutuhan Anda.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Informasi Kontak</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 text-sky-400" />
                <a href={CONTACT_INFO.whatsappLink} className="hover:text-sky-400 transition">{CONTACT_INFO.whatsapp}</a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-sky-400" />
                <a href={CONTACT_INFO.instagramLink} className="hover:text-sky-400 transition">{CONTACT_INFO.instagram}</a>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon className="w-5 h-5 text-sky-400" />
                <a href={CONTACT_INFO.emailLink} className="hover:text-sky-400 transition break-all">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Jam Operasional</h4>
            <p className="text-gray-400">Senin - Sabtu: 09:00 - 17:00</p>
            <p className="text-gray-400">Minggu & Hari Libur: Tutup</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rafaela Print. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
