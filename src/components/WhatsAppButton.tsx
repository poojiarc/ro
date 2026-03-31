import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9170139 72383?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Royal%20Grand."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppButton;
