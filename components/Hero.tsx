export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:px-8">
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124,58,237,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(6,182,212,0.2) 0%, transparent 60%)",
        }}
      />
      {/* Grid lines overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
          </span>
          Plazas abiertas — Cohorte 2025
        </span>

        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl leading-tight">
          Domina la{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
            }}
          >
            Inteligencia Artificial
          </span>{" "}
          como developer
        </h1>

        <p className="mt-8 text-xl leading-8 text-zinc-400 max-w-2xl mx-auto">
          Aprende a construir agentes autónomos, integrar LLMs en producción y
          automatizar workflows. El master más práctico del mercado, impartido
          por developers para developers.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#modules"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_32px_rgba(124,58,237,0.4)]"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
            }}
          >
            Acceder al Master
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#benefits"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-zinc-300 transition-all hover:bg-white/10 hover:border-white/20"
          >
            Saber más
          </a>
        </div>

        {/* Social proof mini stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">+2.400</span>
            <span>alumnos formados</span>
          </div>
          <div className="h-px w-px bg-zinc-700 hidden sm:block self-stretch" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">4.9★</span>
            <span>valoración media</span>
          </div>
          <div className="h-px w-px bg-zinc-700 hidden sm:block self-stretch" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">100%</span>
            <span>práctico y actualizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
