#!/usr/bin/env node
/**
 * Builds the static site from content/glosario.mjs.
 *
 *   node tools/build.mjs
 *
 * It writes plain HTML into docs/, which GitHub Pages serves as it is: no
 * framework, no script on the pages, no cookie. The stylesheet, the logo and
 * the icons live in docs/ already and are not generated. Run this after
 * editing the content and commit what it writes.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FUENTES, LEIDO_EL, PAREJAS, PUBLICADA_EL, SECCIONES } from '../content/glosario.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const ORIGEN = 'https://guia.viaready.com';
const APP = 'https://viaready.com';
/** Every link to the main site says where it came from, so its analytics can tell. */
const hacia = (ruta, campana) => `${APP}${ruta}${ruta.includes('?') ? '&' : '?'}utm_source=guia&utm_medium=referral&utm_campaign=${campana}`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fechaLarga = (iso) => new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${iso}T12:00:00Z`));

const terminos = SECCIONES.flatMap((seccion) => seccion.terminos);
const porId = new Map(terminos.map((t) => [t.id, t]));
if (porId.size !== terminos.length) throw new Error('Hay dos términos con el mismo id');
for (const pareja of PAREJAS) for (const id of pareja.ids) if (!porId.has(id)) throw new Error(`La pareja «${pareja.titulo}» nombra un término que no existe: ${id}`);

const GUIA = {
  ruta: '/palabras-del-examen-teorico/',
  titulo: 'Las palabras del examen teórico de conducir, explicadas',
  descripcion: `Qué significan ${terminos.length} palabras de las normas de tráfico españolas (arcén, travesía, parada, turismo, MMA…), en lenguaje llano y con el lugar de la ley donde está su definición oficial.`,
};

const INICIO = {
  ruta: '/',
  titulo: 'Guías de ViaReady: el examen teórico y las normas de tráfico, con sus fuentes',
  descripcion: 'Guías cortas, en lenguaje llano y con la fuente oficial al lado, para quien prepara el examen teórico de conducir en España.',
};

function pagina({ ruta, titulo, descripcion, cuerpo, jsonLd, tipo = 'website' }) {
  const url = `${ORIGEN}${ruta}`;
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descripcion)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="${tipo}">
<meta property="og:locale" content="es_ES">
<meta property="og:site_name" content="Guías de ViaReady">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descripcion)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGEN}/assets/icon-512.png">
<meta name="twitter:card" content="summary">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#5557e8">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/assets/icon-192.png">
<link rel="stylesheet" href="/assets/style.css">
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>` : ''}
</head>
<body>
<a class="saltar" href="#contenido">Saltar al contenido</a>
<header class="cabecera">
  <a class="marca" href="/" aria-label="Guías de ViaReady, inicio">
    <picture>
      <source srcset="/assets/viaready-logo-dark.svg" media="(prefers-color-scheme: dark)">
      <img src="/assets/viaready-logo.svg" alt="ViaReady" width="131" height="28">
    </picture>
    <span>Guías</span>
  </a>
  <a class="app" href="${hacia('/', 'cabecera')}">La app</a>
</header>
<main id="contenido">
${cuerpo}
</main>
<footer class="pie">
  <p><strong>ViaReady</strong> es una app para aprender el temario del permiso B en tu idioma: español, inglés, árabe, ruso, persa, urdu o chino. No tiene relación con la DGT.</p>
  <ul>
    <li><a href="${hacia('/', 'pie')}">viaready.com</a></li>
    <li><a href="${hacia('/nuevas-normas-trafico-2026', 'pie')}">Las normas que cambiaron el 1 de octubre de 2026</a></li>
    <li><a href="${hacia('/senales-de-trafico', 'pie')}">Las señales de tráfico, con su código</a></li>
    <li><a href="${hacia('/sobre-la-app', 'pie')}">Quién hace ViaReady</a></li>
  </ul>
  <p class="nota">Estas páginas no usan cookies ni herramientas de medición.</p>
</footer>
</body>
</html>
`;
}

function referencia(t) {
  if (t.concepto === null) {
    if (!t.referencia) throw new Error(`«${t.termino}» no tiene concepto ni referencia`);
    return t.referencia;
  }
  return t.hasta ? `Ley de Tráfico, anexo I, conceptos ${t.concepto} y ${t.hasta}` : `Ley de Tráfico, anexo I, concepto ${t.concepto}`;
}

function entrada(t) {
  return `      <div class="termino" id="${t.id}">
        <dt>
          <a class="ancla" href="#${t.id}">${esc(t.termino)}</a>
          <span class="en" lang="en">${esc(t.en)}</span>
          ${t.nuevo ? '<span class="marca-2026">Redacción de 2026</span>' : ''}
        </dt>
        <dd>
          <p>${esc(t.texto)}</p>
          ${t.ojo ? `<p class="ojo"><strong>No lo confundas:</strong> ${esc(t.ojo)}</p>` : ''}
          <p class="ref">${esc(referencia(t))}</p>
        </dd>
      </div>`;
}

function guia() {
  const indice = SECCIONES.map((s) => `<li><a href="#${s.id}">${esc(s.titulo)}</a> <span>${s.terminos.length}</span></li>`).join('\n        ');
  const parejas = PAREJAS.map(
    (p) => `<li>${p.ids.map((id) => `<a href="#${id}">${esc(porId.get(id).termino)}</a>`).join(' · ')}</li>`,
  ).join('\n        ');
  const secciones = SECCIONES.map(
    (s) => `  <section class="seccion" id="${s.id}" aria-labelledby="t-${s.id}">
    <h2 id="t-${s.id}">${esc(s.titulo)}</h2>
    <p class="entrada">${esc(s.entrada)}</p>
    <dl>
${s.terminos.map(entrada).join('\n')}
    </dl>
  </section>`,
  ).join('\n');

  const cuerpo = `  <nav class="migas" aria-label="Estás en"><a href="/">Guías</a> <span aria-hidden="true">›</span> <span>Las palabras del examen</span></nav>
  <article>
  <header class="portada">
    <p class="antetitulo">Glosario · ${terminos.length} términos</p>
    <h1>Las palabras del examen teórico, explicadas</h1>
    <p class="resumen">Las normas de tráfico, y con ellas los manuales y los tests, hablan con las palabras de la ley, y muchas no significan lo que parece. «Automóvil» no es solo un coche, una «travesía» no es una calle cualquiera y «parada» no es lo mismo que «estacionamiento».</p>
    <p>Aquí están ${terminos.length} de esas palabras. Cada una lleva una explicación en lenguaje llano, su equivalente aproximado en inglés y el lugar de la norma donde está la definición completa, casi siempre el anexo I de la Ley de Tráfico. Las definiciones son las vigentes desde el 1 de octubre de 2026.</p>
  </header>

  <section class="caja" aria-labelledby="t-parejas">
    <h2 id="t-parejas">Para no confundir</h2>
    <ul class="parejas">
        ${parejas}
    </ul>
  </section>

  <nav class="caja" aria-labelledby="t-indice">
    <h2 id="t-indice">En esta guía</h2>
    <ul class="indice">
        ${indice}
    </ul>
  </nav>

${secciones}

  <section class="seccion" id="fuentes" aria-labelledby="t-fuentes">
    <h2 id="t-fuentes">Fuentes</h2>
    <p>Las definiciones están en el anexo I de la Ley de Tráfico y, la del vehículo de movilidad personal, en el Reglamento General de Vehículos, tal como los publica el BOE. Se leyeron el ${fechaLarga(LEIDO_EL)}.</p>
    <ul class="fuentes">
      ${FUENTES.map((f) => `<li><a href="${f.url}" rel="noopener">${esc(f.titulo)}</a></li>`).join('\n      ')}
    </ul>
    <p class="nota">Esta guía resume y explica; no sustituye a la ley. Si una explicación y el texto del BOE no coinciden, vale el BOE. Los equivalentes en inglés son orientativos.</p>
  </section>

  <section class="caja llamada" aria-labelledby="t-app">
    <h2 id="t-app">Si el español no es tu primer idioma</h2>
    <p>ViaReady enseña cada norma del temario en tu idioma, con la redacción en español al lado, para que estas palabras dejen de ser un obstáculo. Empezar es gratis.</p>
    <p><a class="boton" href="${hacia('/', 'glosario')}">Ver la app</a> <a class="enlace" href="${hacia('/nuevas-normas-trafico-2026', 'glosario')}">Las normas que cambiaron en 2026</a></p>
  </section>
  </article>`;

  const url = `${ORIGEN}${GUIA.ruta}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#articulo`,
      headline: GUIA.titulo,
      description: GUIA.descripcion,
      inLanguage: 'es',
      url,
      mainEntityOfPage: url,
      datePublished: PUBLICADA_EL,
      dateModified: LEIDO_EL,
      author: { '@type': 'Organization', name: 'ViaReady', url: APP },
      publisher: { '@type': 'Organization', name: 'ViaReady', url: APP, logo: { '@type': 'ImageObject', url: `${ORIGEN}/assets/icon-512.png` } },
      citation: FUENTES.map((f) => ({ '@type': 'Legislation', name: f.titulo, url: f.url })),
      about: { '@id': `${url}#glosario` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${url}#glosario`,
      name: 'Las palabras de las normas de tráfico españolas',
      inLanguage: 'es',
      url,
      hasDefinedTerm: terminos.map((t) => ({
        '@type': 'DefinedTerm',
        '@id': `${url}#${t.id}`,
        name: t.termino,
        description: t.texto,
        url: `${url}#${t.id}`,
        inDefinedTermSet: `${url}#glosario`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Guías de ViaReady', item: `${ORIGEN}/` },
        { '@type': 'ListItem', position: 2, name: 'Las palabras del examen teórico', item: url },
      ],
    },
  ];
  return pagina({ ...GUIA, cuerpo, jsonLd, tipo: 'article' });
}

function inicio() {
  const cuerpo = `  <header class="portada">
    <p class="antetitulo">Guías de ViaReady</p>
    <h1>El examen teórico y las normas de tráfico, con sus fuentes</h1>
    <p class="resumen">Guías cortas y en lenguaje llano para quien prepara el examen teórico de conducir en España, sobre todo si el español no es su primer idioma. Cada dato lleva al lado la norma de la que sale.</p>
  </header>

  <section class="seccion" aria-labelledby="t-guias">
    <h2 id="t-guias">Guías</h2>
    <ul class="lista-guias">
      <li>
        <a href="${GUIA.ruta}"><strong>Las palabras del examen teórico, explicadas</strong></a>
        <p>${terminos.length} palabras de las normas de tráfico (arcén, travesía, parada, turismo, MMA…), cada una en lenguaje llano, con su equivalente en inglés y el lugar de la ley donde está su definición oficial.</p>
      </li>
    </ul>
  </section>

  <section class="seccion" aria-labelledby="t-quien">
    <h2 id="t-quien">Quién las escribe</h2>
    <p>Las publica ViaReady, una app que enseña el temario del permiso B en siete idiomas con la redacción en español al lado. Las guías se escriben a partir del texto que publica el BOE y dicen qué día se leyó. ViaReady no tiene relación con la DGT y estas páginas no sustituyen a la ley.</p>
    <p><a class="enlace" href="${hacia('/sobre-la-app', 'inicio')}">Quién hace ViaReady</a></p>
  </section>`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: INICIO.titulo,
    description: INICIO.descripcion,
    inLanguage: 'es',
    url: `${ORIGEN}/`,
    publisher: { '@type': 'Organization', name: 'ViaReady', url: APP },
    hasPart: [{ '@type': 'Article', headline: GUIA.titulo, url: `${ORIGEN}${GUIA.ruta}` }],
  };
  return pagina({ ...INICIO, cuerpo, jsonLd });
}

function noEncontrada() {
  const cuerpo = `  <header class="portada">
    <p class="antetitulo">Página no encontrada</p>
    <h1>Aquí no hay nada</h1>
    <p class="resumen">La dirección no corresponde a ninguna guía. <a href="/">Ver las guías</a>.</p>
  </header>`;
  return pagina({ ruta: '/404.html', titulo: 'Página no encontrada · Guías de ViaReady', descripcion: 'La dirección no corresponde a ninguna guía.', cuerpo }).replace(
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">',
    '<meta name="robots" content="noindex">',
  );
}

const escribir = (rel, contenido) => {
  const destino = path.join(root, rel);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, contenido);
  console.log('escrito', rel);
};

escribir('index.html', inicio());
escribir(`${GUIA.ruta.slice(1)}index.html`, guia());
escribir('404.html', noEncontrada());
escribir('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGEN}/sitemap.xml\n`);
escribir(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[INICIO, GUIA]
    .map((p) => `  <url><loc>${ORIGEN}${p.ruta}</loc><lastmod>${LEIDO_EL}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
escribir('CNAME', 'guia.viaready.com\n');
escribir('.nojekyll', '');
console.log(`${terminos.length} términos en ${SECCIONES.length} secciones`);
