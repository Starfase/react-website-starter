import { useEffect, useState } from "react";

function NavLink({ href, children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = document.querySelector(href);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [href]);

  return (
    <a
      href={href}
      className={`relative text-sm font-semibold transition-all duration-300 ${
        active ? "text-green-400" : "text-white hover:text-green-400"
      }`}
    >
      {children}

      <span
        className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-green-400 transition-all duration-300 ${
          active ? "w-full" : "w-0"
        }`}
      />
    </a>
  );
}

export default NavLink;
