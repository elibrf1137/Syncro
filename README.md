# Syncro

Web del estudio Syncro: branding y desarrollo web para negocios locales (Pontevedra).

**En producción:** https://syncro.syncro-studio.workers.dev

## Qué hay aquí

```
public/index.html      la web completa en un solo archivo (HTML + CSS + JS, ES/EN)
public/img/work/       capturas de las webs modelo para las tarjetas de proyectos
public/proyectos/      las cuatro webs modelo ya compiladas (Ferro, Olmo, Kaia, Marea)
wrangler.jsonc         configuración de Cloudflare Workers (Static Assets)
vercel.json            la misma web servida como estática en Vercel (pausado)
```

La home no necesita build: logos y texturas van incrustados en el HTML, y las
tipografías (Unbounded y Montserrat) se cargan desde Google Fonts.

## Webs modelo (/proyectos/)

Se abren desde las tarjetas de la sección Proyectos:

- https://syncro.syncro-studio.workers.dev/proyectos/ferro/
- https://syncro.syncro-studio.workers.dev/proyectos/olmo/
- https://syncro.syncro-studio.workers.dev/proyectos/kaia/
- https://syncro.syncro-studio.workers.dev/proyectos/marea/

**No se editan aquí.** El código fuente está en `Syncro1.1\WebsEjemplo`. Para actualizarlas:

```bash
cd ..\WebsEjemplo
npm run build:syncro     # compila y sustituye public/proyectos/ de esta carpeta
cd ..\syncro-cloudflare
npx wrangler@latest deploy
```

Llevan `noindex`: son negocios ficticios y no deben aparecer en Google.

## Identidad

- Negro obsidiana `#1C1C1C` · Púrpura eléctrico `#4915ED` · Blanco glacial `#F0F1FF`
- Unbounded para titulares, Montserrat para texto
- Logos: los SVG originales del manual de identidad

## Desplegar

```bash
npx wrangler@latest deploy
```

## Antes de tocar

- El email de contacto está en la constante `CONTACT_EMAIL` del script.
- Los textos en español e inglés están en el objeto `I18N` del script: cualquier texto
  con `data-i18n` se cambia en los dos idiomas.
- La landing anterior en Next.js sigue en el historial de git.
