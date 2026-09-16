import { LogoFull, LogoIcon } from "./components/Logo";
import SilkBackground from "./components/SilkBackground";

const services = [
  {
    title: "Identidad de marca",
    description:
      "Logo, paleta, tipografía y sistema visual coherente. Todo lo que tu negocio necesita para verse profesional y memorable.",
  },
  {
    title: "Diseño web",
    description:
      "Webs que convierten visitantes en clientes. Diseño a medida, responsive y pensado para que tu negocio destaque.",
  },
  {
    title: "Desarrollo a medida",
    description:
      "Código limpio y rendimiento real. Construimos tu web con tecnología moderna para que cargue rápido y escale contigo.",
  },
];

const steps = [
  { num: "01", title: "Escuchamos", text: "Entendemos tu negocio, tu público y tus objetivos antes de tocar una herramienta." },
  { num: "02", title: "Diseñamos", text: "Creamos la identidad visual y el diseño web que refleja quién eres." },
  { num: "03", title: "Construimos", text: "Desarrollamos tu web con tecnología moderna, rápida y preparada para crecer." },
  { num: "04", title: "Lanzamos", text: "Publicamos, te enseñamos a usarla y te acompañamos en los primeros pasos." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-surface/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4">
          <LogoFull className="h-5 sm:h-6" color="#f0f1ff" />
          <a
            href="#contacto"
            className="rounded-full bg-syncro px-5 py-2.5 font-body text-sm font-medium text-white transition hover:bg-syncro-dark"
          >
            Hablemos
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-20 pb-16">
        <SilkBackground />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="fade-in mb-7 flex justify-center sm:mb-8">
            <LogoIcon className="h-14 w-14 sm:h-16 sm:w-16" color="#f0f1ff" />
          </div>
          <h1 className="fade-in fade-in-1 font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-syncro-light sm:text-5xl md:text-7xl">
            Tu negocio merece verse como lo que es
          </h1>
          <p className="fade-in fade-in-2 mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg">
            Creamos la marca y la web que tu negocio local necesita para
            transmitir confianza, atraer clientes y crecer.
          </p>
          <div className="fade-in fade-in-3 mt-9 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#contacto"
              className="w-full max-w-xs rounded-full bg-syncro px-8 py-3.5 text-center font-body text-sm font-medium text-white transition hover:bg-syncro-dark sm:w-auto"
            >
              Quiero mi web
            </a>
            <a
              href="#servicios"
              className="w-full max-w-xs rounded-full border border-white/15 px-8 py-3.5 text-center font-body text-sm font-medium text-zinc-300 transition hover:border-white/30 hover:text-white sm:w-auto"
            >
              Qué hacemos
            </a>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal font-display text-2xl font-bold text-syncro-light sm:text-3xl md:text-4xl">
            Lo que hacemos
          </h2>
          <p className="reveal mt-3 max-w-lg font-body text-sm text-zinc-400 sm:text-base">
            Todo lo que un negocio local necesita para tener presencia digital
            profesional, sin complicaciones.
          </p>
          <div className="mt-10 grid gap-5 sm:gap-6 md:mt-14 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="reveal h-full rounded-2xl border border-white/5 bg-surface-card p-6 transition duration-300 hover:-translate-y-1 hover:border-syncro/40 hover:bg-surface-hover sm:p-8"
              >
                <h3 className="font-display text-lg font-semibold text-syncro-light sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal font-display text-2xl font-bold text-syncro-light sm:text-3xl md:text-4xl">
            Cómo trabajamos
          </h2>
          <p className="reveal mt-3 max-w-lg font-body text-sm text-zinc-400 sm:text-base">
            Un proceso claro de principio a fin. Sin sorpresas.
          </p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:mt-14 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="reveal bg-surface p-6 sm:p-8">
                <span className="font-display text-sm font-medium text-syncro">
                  {s.num}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-syncro-light sm:mt-3 sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-zinc-400">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-20 md:py-28">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-syncro-light sm:text-3xl md:text-4xl">
            ¿Tienes un negocio que necesita web?
          </h2>
          <p className="mt-4 font-body text-base text-zinc-400 sm:text-lg">
            Cuéntanos qué necesitas. Sin compromiso, sin letra pequeña.
          </p>
          <a
            href="mailto:contacto@syncro.es"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-syncro px-8 py-4 font-body text-sm font-medium break-all text-white transition duration-300 hover:bg-syncro-dark"
          >
            contacto@syncro.es
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <LogoIcon className="h-6 w-6" color="#4915ed" />
          <p className="font-body text-xs text-zinc-500">
            © {new Date().getFullYear()} Syncro
          </p>
        </div>
      </footer>
    </div>
  );
}
