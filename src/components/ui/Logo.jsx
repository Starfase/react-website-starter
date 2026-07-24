import logo from "../../assets/logo.png";
import church from "../../data/church";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
    >
      <img src={logo} alt={church.name} className="h-12 w-12 object-contain" />

      <div className="leading-tight">
        <p className="text-xs uppercase tracking-[0.25em] text-green-400">
          RCCG
        </p>

        <h2 className="text-lg font-bold text-white">{church.shortName}</h2>

        <p className="text-sm text-slate-300">Model Parish • {church.city}</p>
      </div>
    </a>
  );
}

export default Logo;
