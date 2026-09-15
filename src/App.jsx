import { LogoFull, LogoIcon } from "./components/Logo";

const services = [
  {
    title: "Identidad de marca",
    description:
      "Logo, paleta, tipografía y sistema visual coherente. Todo lo que tu negocio necesita para verse profesional y memorable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Diseño web",
    description:
      "Webs que convierten visitantes en clientes. Diseño a medida, responsive y optimizado para que tu negocio destaque online.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Desarrollo a medida",
    description:
      "Código limpio, rendimiento real. Construimos tu web con tecnología moderna para que cargue rápido y escale contigo.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <LogoFull className="h-6" color="#f0f1ff" />
        <a
          href="#contacto"
          className="rounded-full bg-syncro px-5 py-2 font-body text-sm font-medium text-white transition hover:bg-syncro-dark"
        >
          Hablemos
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(73,21,237,0.15)_0%,_transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-8 flex justify-center">
          <LogoIcon className="w-16 h-16" color="#4915ed" />
        </div>
        <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-syncro-light md:text-7xl">
          Tu negocio merece verse como lo que es
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-zinc-400">
          Creamos la marca y la web que tu negocio local necesita para
          transmitir confianza, atraer clientes y crecer.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contacto"
            className="rounded-full bg-syncro px-8 py-3.5 font-body text-sm font-medium text-white transition hover:bg-syncro-dark"
          >
            Quiero mi web
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-white/10 px-8 py-3.5 font-body text-sm font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
          >
            Qué hacemos
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-syncro-light md:text-4xl">
          Lo que hacemos
        </h2>
        <p className="mt-3 max-w-lg font-body text-zinc-400">
          Todo lo que un negocio local necesita para tener presencia digital
          profesional, sin complicaciones.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/5 bg-surface-card p-8 transition hover:border-syncro/30 hover:bg-surface-hover"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-syncro/10 text-syncro transition group-hover:bg-syncro/20">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-syncro-light">
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
  );
}

function Process() {
  const steps = [
    { num: "01", title: "Escuchamos", text: "Entendemos tu negocio, tu público y tus objetivos antes de tocar una sola herramienta." },
    { num: "02", title: "Diseñamos", text: "Creamos la identidad visual y el diseño web que refleja quién eres." },
    { num: "03", title: "Construimos", text: "Desarrollamos tu web con tecnología moderna, rápida y preparada para crecer." },
    { num: "04", title: "Lanzamos", text: "Publicamos, te enseñamos a usarla y te acompañamos en los primeros pasos." },
  ];

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-syncro-light md:text-4xl">
          Cómo trabajamos
        </h2>
        <p className="mt-3 max-w-lg font-body text-zinc-400">
          Un proceso claro de principio a fin. Sin sorpresas.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="bg-surface p-8">
              <span className="font-display text-sm font-medium text-syncro">{s.num}</span>
              <h3 className="mt-3 font-display text-xl font-semibold text-syncro-light">{s.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-zinc-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="px-6 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-syncro-light md:text-4xl">
          ¿Tienes un negocio que necesita web?
        </h2>
        <p className="mt-4 font-body text-lg text-zinc-400">
          Cuéntanos qué necesitas. Sin compromiso, sin letra pequeña.
        </p>
        <a
          href="mailto:contacto@syncro.es"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-syncro px-8 py-4 font-body text-sm font-medium text-white transition hover:bg-syncro-dark"
        >
          contacto@syncro.es
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <LogoIcon className="w-6 h-6" color="#4915ed" />
        <p className="font-body text-xs text-zinc-500">© {new Date().getFullYear()} Syncro</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-white antialiased">
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
