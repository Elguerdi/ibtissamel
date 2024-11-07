import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as createAstro } from '../chunks/astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$ToggleDarkBtn } from '../chunks/ToggleDarkBtn_d-Rlc3RU.mjs';
import { $ as $$NavLinks, a as $$BtnToTop, b as $$Footer, p as portfolio } from '../chunks/MenuData_CXqPYJpt.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_W9L18Ii2.mjs';
/* empty css                                 */
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate` <!-- HTML structure --><html lang="en" data-astro-cid-hcjuqwdu> <head><!-- Head section -->${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-hcjuqwdu": true })}${renderHead()}</head> <body data-astro-cid-hcjuqwdu> <!-- Navigation, toggle dark button, button to top, and main content --> ${renderComponent($$result, "NavLinks", $$NavLinks, { "origin": portfolio, "data-astro-cid-hcjuqwdu": true })} ${renderComponent($$result, "ToogleDarkBtn", $$ToggleDarkBtn, { "data-astro-cid-hcjuqwdu": true })} ${renderComponent($$result, "BtnToTop", $$BtnToTop, { "data-astro-cid-hcjuqwdu": true })} <main data-astro-cid-hcjuqwdu> <!-- Portfolio section --> <section class="portfolio__padre" data-astro-cid-hcjuqwdu> <!-- Button to show all cards --> <div class="buttons__container" data-astro-cid-hcjuqwdu></div> <!-- Container for portfolio cards --> <div class="cards__container" data-astro-cid-hcjuqwdu></div> </section> </main> <!-- Dark background, footer, and styles --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-hcjuqwdu": true })}  </body> </html>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/portfolio.astro", void 0);

const $$file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/portfolio.astro";
const $$url = "/Ibtissam/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
