function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="
      text-sm
      font-medium
      text-white
      transition-colors
      duration-300
      hover:text-green-400
      "
    >
      {children}
    </a>
  );
}

export default NavLink;
