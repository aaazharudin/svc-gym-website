import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
  const message = "Hi! I'm interested in joining your gym. Can you provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.824.736 5.488 2.016 7.792L0 32l8.416-2.016C10.72 31.264 13.384 32 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.36c-2.544 0-4.992-.704-7.088-2.016l-.512-.304-5.312 1.28 1.28-5.248-.304-.512C2.72 20.48 2.016 18.296 2.016 16c0-7.72 6.264-13.984 13.984-13.984S29.984 8.28 29.984 16 23.72 29.36 16 29.36z"/>
        <path d="M23.424 19.296c-.384-.192-2.272-1.12-2.624-1.248-.352-.128-.608-.192-.864.192-.256.384-.992 1.248-1.216 1.504-.224.256-.448.288-.832.096-.384-.192-1.632-.6-3.104-1.92-1.152-1.024-1.92-2.288-2.144-2.672-.224-.384-.024-.592.168-.784.176-.176.384-.448.576-.672.192-.224.256-.384.384-.64.128-.256.064-.48-.032-.672-.096-.192-.864-2.08-1.184-2.848-.32-.736-.64-.64-.864-.64-.224-.016-.48-.016-.736-.016s-.672.096-.992.48c-.32.384-1.248 1.216-1.248 2.976s1.28 3.456 1.456 3.68c.176.224 2.528 3.872 6.144 5.424.864.368 1.536.592 2.064.752.864.272 1.648.232 2.272.144.688-.104 2.272-.928 2.592-1.824.32-.896.32-1.664.224-1.824-.096-.16-.352-.256-.736-.448z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
