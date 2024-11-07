import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as createAstro } from '../chunks/astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import { $ as $$CardTerminal } from '../chunks/CardTerminal_Sc81gDRW.mjs';
import { $ as $$Button, a as $$DarkBg } from '../chunks/DarkBg_VbX6WyDW.mjs';
import { $ as $$BaseHead, a as $$ToggleDarkBtn } from '../chunks/ToggleDarkBtn_d-Rlc3RU.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-zetdm5md": true })}${renderHead()}</head> <body data-astro-cid-zetdm5md> <section data-astro-cid-zetdm5md> ${renderComponent($$result, "ToggleDarkBtn", $$ToggleDarkBtn, { "data-astro-cid-zetdm5md": true })} <div class="container" data-astro-cid-zetdm5md> <div class="container__elements" data-astro-cid-zetdm5md> <img src="/img/sofidev_laptop.gif" alt="" data-astro-cid-zetdm5md> </div> ${renderComponent($$result, "CardTerminal", $$CardTerminal, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` <code class="found__titulo" data-astro-cid-zetdm5md>
const getErrorMessage = () => "404: Not Found";</code> <h3 class="found__subtitulo" data-astro-cid-zetdm5md>Nanais, Nothing here</h3> <div class="container__elements" data-astro-cid-zetdm5md> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "src": "", "text": "Go Back!", "data-astro-cid-zetdm5md": true })} </div> ` })} ${renderComponent($$result, "DarkBg", $$DarkBg, { "data-astro-cid-zetdm5md": true })} </div> </section>  </body> </html>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/404.astro", void 0);

const $$file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/404.astro";
const $$url = "/Ibtissam/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
