# Guías de ViaReady

The source of <https://guia.viaready.com>: short guides in plain Spanish for people preparing the Spanish driving theory test, with each fact next to the legal text it comes from.

The first guide is [Las palabras del examen teórico, explicadas](https://guia.viaready.com/palabras-del-examen-teorico/): the words Spanish traffic law uses (arcén, travesía, parada, turismo, MMA…), each with an explanation in plain language, an approximate English equivalent and the place in the law where its definition is.

## What is here

| Path | What it is |
| --- | --- |
| `content/glosario.mjs` | The guide as data: the terms, their explanations, the sources and the day the legal text was read. |
| `tools/build.mjs` | Writes the pages into `docs/`. It has no dependencies. |
| `docs/` | What GitHub Pages serves. The stylesheet, the logo and the icons are kept there by hand; the HTML, `sitemap.xml`, `robots.txt` and `CNAME` are written by the build. |

## Changing a guide

1. Read the definition again in the BOE (the links are at the top of `content/glosario.mjs`). An explanation may be shorter than the law, but it must not say anything the law does not.
2. Edit `content/glosario.mjs`. If you compared the explanations with the legal text again, set `LEIDO_EL` to that day.
3. Run `node tools/build.mjs` (written with Node 26; any current Node works).
4. Look at the result: `python3 -m http.server -d docs`, then open <http://localhost:8000/palabras-del-examen-teorico/>.
5. Commit the content and the pages it wrote together.

The build stops if two terms share an id, if a pair in "Para no confundir" names a term that does not exist, or if a term has neither a concept number nor a reference.

## What the pages do not do

They run no script, set no cookie, load no font or file from another site and measure nothing.

## Sources

- Ley sobre Tráfico, Circulación de Vehículos a Motor y Seguridad Vial (Real Decreto Legislativo 6/2015), anexo I, consolidated text: <https://www.boe.es/buscar/act.php?id=BOE-A-2015-11722>
- Real Decreto 518/2026, de 24 de junio, in force since 1 October 2026: <https://www.boe.es/buscar/doc.php?id=BOE-A-2026-13889>
- Reglamento General de Vehículos (Real Decreto 2822/1998), anexo II, consolidated text: <https://www.boe.es/buscar/act.php?id=BOE-A-1999-1826>

ViaReady is not affiliated with the DGT. The guides explain the law and do not replace it: where an explanation and the BOE differ, the BOE is right.

## The domain

`guia.viaready.com` reaches this site through one DNS record: `CNAME guia → viaready.github.io`. If this repository is ever deleted, or its Pages site switched off, remove that DNS record first; a record left pointing at GitHub with no site behind it can be claimed by somebody else's Pages site.
