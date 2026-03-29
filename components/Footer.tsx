const links = [
  { label: "Programa", href: "#modules" },
  { label: "Testimonios", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "mailto:hola@codecrypto.academy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12 lg:px-8 mt-auto">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-lg font-bold text-white tracking-tight">
            Code
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)",
              }}
            >
              Crypto
            </span>
          </span>
          <span className="text-xs text-zinc-600">
            Master de IA para Developers
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-zinc-700">
          © {new Date().getFullYear()} CodeCrypto. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
