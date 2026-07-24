function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl bg-white shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;