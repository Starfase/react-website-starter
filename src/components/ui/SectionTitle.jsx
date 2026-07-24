function SectionTitle({ label, title, description, center = true }) {
  return (
    <div
      className={`mb-14 ${
        center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
      }`}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-500">
        {label}
      </p>

      <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;
