function Button({ children }) {
  return (
    <button
      className="
      rounded-full
      bg-green-600
      px-6
      py-3
      text-sm
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-green-700
      hover:scale-105
      "
    >
      {children}
    </button>
  );
}

export default Button;
