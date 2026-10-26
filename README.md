# María Dolores Rivera — Portfolio

Personal portfolio for María Dolores Rivera, Food Engineer based in Bergen, Norway.
Single-page site in English (default), Norwegian (Bokmål) and Spanish.

**Stack:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui.

## Editar contenido

Todo el texto del sitio está en [`src/content.ts`](src/content.ts), con cada entrada en `en`, `no` y `es`.
Para cambiar un texto, traducción, experiencia o habilidad, se edita solo ese archivo.

- CV descargable: `public/CV_Maria_Dolores_Rivera.pdf` (reemplazar el archivo manteniendo el nombre).
- Colores y tipografías: variables en `src/index.css` y `tailwind.config.js`.
- El idioma se elige con el selector EN / NO / ES, se recuerda en el navegador y también se puede forzar con `?lang=no` o `?lang=es` en la URL (útil para mandar el link en noruego).

## Desarrollo local

```bash
pnpm install
pnpm dev       # http://localhost:5173
pnpm build     # genera dist/
```

## Publicar en Vercel

1. En [vercel.com/new](https://vercel.com/new) importar el repo `agustinsoares/dolores-rivera-portfolio`.
2. Vercel detecta **Vite** automáticamente (build: `pnpm build`, output: `dist`). No hace falta configurar nada más.
3. Cada push a la rama principal publica una nueva versión; cada PR genera una preview.
