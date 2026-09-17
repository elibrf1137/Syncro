# Syncro

Web del estudio Syncro: branding y desarrollo web para negocios locales (Pontevedra).

**En producción:** https://syncro.elias-brea1137.workers.dev

## Qué hay aquí

```
public/index.html   la web completa en un solo archivo (HTML + CSS + JS, ES/EN)
wrangler.jsonc      configuración de Cloudflare Workers (Static Assets)
vercel.json         la misma web servida como estática en Vercel
```

La web no necesita build: logos, texturas y capturas van incrustados en el HTML, y las
tipografías (Unbounded y Montserrat) se cargan desde Google Fonts.

## Identidad

- Negro obsidiana `#1C1C1C` · Púrpura eléctrico `#4915ED` · Blanco glacial `#F0F1FF`
- Unbounded para titulares, Montserrat para texto
- Logos: los SVG originales del manual de identidad

## Desplegar

```bash
npx wrangler@latest deploy
```

## Antes de tocar

- El email de contacto está en la constante `CONTACT_EMAIL` del script (provisional).
- Los textos en español e inglés están en el objeto `I18N` del script: cualquier texto
  con `data-i18n` se cambia en los dos idiomas.
- La landing anterior en Next.js sigue en el historial de git.
