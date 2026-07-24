function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-green-600 text-white shadow-lg shadow-green-600/20 hover:bg-green-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30",

    secondary:
      "border border-white/70 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-slate-900 hover:-translate-y-1",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-8
    py-4
    text-base
    font-semibold
    tracking-wide
    transition-all
    duration-300
    focus:outline-none
    focus:ring-4
    focus:ring-green-500/30
    active:translate-y-0
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
