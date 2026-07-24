import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "2348135289299"; // Replace with pastor's number (without +)

  const message =
    "Hello, I would like to know more about RCCG Open Heaven Model Parish.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
        hover:shadow-green-500/50
        animate-bounce
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;
