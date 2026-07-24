import logo from "../assets/logo.png";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950">
      {/* Logo */}
      <img
        src={logo}
        alt="RCCG"
        className="mb-6 h-24 w-24 animate-pulse object-contain"
      />

      {/* Church Name */}
      <h1 className="text-center text-2xl font-bold text-white">
        RCCG Open Heaven
      </h1>

      <p className="mt-2 text-slate-400">Model Parish • Asaba</p>

      <p className="mt-6 text-sm uppercase tracking-[0.35em] text-green-400">
        Preparing Worship...
      </p>

      {/* Loading Bar */}
      <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full animate-[loading_1.5s_linear_forwards] rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
