function HamburgerButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Menu"
      className="relative z-50 flex h-12 w-12 items-center justify-center md:hidden"
    >
      <div className="relative h-6 w-6">
        {/* Top Line */}
        <span
          className={`absolute left-0 top-1 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        ></span>

        {/* Middle Line */}
        <span
          className={`absolute left-0 top-3 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        {/* Bottom Line */}
        <span
          className={`absolute left-0 top-5 h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        ></span>
      </div>
    </button>
  );
}

export default HamburgerButton;
