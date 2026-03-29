const modules = [
  {
    icon: "🤖",
    title: "Agentes Autónomos",
    description:
      "Diseña y despliega agentes con LangGraph, CrewAI y AutoGen. Aprende arquitecturas multi-agente para resolver tareas complejas.",
  },
  {
    icon: "🧠",
    title: "LLMs en Producción",
    description:
      "Integra GPT-4, Claude, Gemini y modelos open-source. Fine-tuning, RAG, embeddings y optimización de costes.",
  },
  {
    icon: "⚙️",
    title: "Automatización de Workflows",
    description:
      "Conecta APIs, bases de datos y herramientas externas. Construye pipelines de datos inteligentes con IA.",
  },
  {
    icon: "🔒",
    title: "IA Segura y Ética",
    description:
      "Guardrails, evaluación de modelos, prompt injection y mejores prácticas para sistemas IA en producción.",
  },
  {
    icon: "☁️",
    title: "Despliegue en Cloud",
    description:
      "AWS, GCP y Azure para modelos IA. Docker, Kubernetes y CI/CD específico para proyectos de machine learning.",
  },
  {
    icon: "📊",
    title: "Observabilidad y Métricas",
    description:
      "Monitoriza tus modelos con LangSmith, Weights & Biases. Detecta drift, latencia y errores en tiempo real.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Todo lo que aprenderás
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
            Un currículum diseñado por practitioners activos en la industria,
            actualizado cada trimestre.
          </p>
        </div>

        {/* Grid */}
        <div id="modules" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-8 transition-all hover:border-violet-500/30 hover:bg-white/[0.06]"
            >
              {/* Glow on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124,58,237,0.06), transparent 60%)",
                }}
              />
              <div className="text-4xl mb-4">{mod.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {mod.title}
              </h3>
              <p className="text-sm leading-6 text-zinc-400">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
