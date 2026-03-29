const testimonials = [
  {
    initials: "AM",
    name: "Alejandro Martínez",
    role: "Senior Backend Engineer @ Stripe",
    quote:
      "El Master de IA de CodeCrypto es el más práctico que he encontrado. En tres meses pasé de cero a desplegar agentes autónomos en producción. El ROI fue inmediato.",
    gradient: "from-violet-600 to-purple-800",
  },
  {
    initials: "SG",
    name: "Sara García",
    role: "Full-Stack Developer @ Freelance",
    quote:
      "Lo que más me sorprendió fue la profundidad técnica. No es un curso de prompts, es ingeniería real de sistemas IA. Ahora ofrezco servicios de automatización que antes no imaginaba.",
    gradient: "from-cyan-600 to-teal-800",
  },
  {
    initials: "CL",
    name: "Carlos López",
    role: "Tech Lead @ Startup fintech",
    quote:
      "Migré a mi equipo entero a workflows con IA después de este master. Reducimos el tiempo de desarrollo en un 40%. La comunidad es oro puro.",
    gradient: "from-blue-600 to-indigo-800",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Más de 2.400 developers ya han transformado su carrera.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-zinc-300 leading-7 text-sm mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
