function Button({ children, variant = "primary" }) {
  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",

    secondary:
      "border border-white text-white hover:bg-white hover:text-slate-900",
  };

  return (
    <button
      className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
