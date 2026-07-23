import heroImage from "../assets/images/hero.jpg";
import church from "../data/church";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      {/* Background */}
      <img
        src={heroImage}
        alt="Church worship"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* Content */}
      <Container className="relative z-10 pt-24">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold tracking-[0.35em] text-green-400">
            {church.hero.badge}
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            {church.hero.title}
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-300">
            {church.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button>{church.hero.primaryButton}</Button>

            <Button variant="secondary">{church.hero.secondaryButton}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
