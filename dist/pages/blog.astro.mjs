import { c as createComponent, r as renderTemplate, e as addAttribute, f as renderTransition, a as renderComponent, b as renderHead } from '../chunks/astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$ToggleDarkBtn } from '../chunks/ToggleDarkBtn_d-Rlc3RU.mjs';
import { $ as $$NavLinks, a as $$BtnToTop, b as $$Footer, d as blog } from '../chunks/MenuData_CXqPYJpt.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_W9L18Ii2.mjs';
import { g as getCollection } from '../chunks/_astro_content_BUm6of_x.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_CrhnqgHB.mjs';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"${addAttribute(renderTransition($$result, "mpi54xyw"), "data-astro-transition-scope")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> ${renderComponent($$result, "NavLinks", $$NavLinks, { "origin": blog })} ${renderComponent($$result, "ToggleDarkBtn", $$ToggleDarkBtn, {})} ${renderComponent($$result, "BtnToTop", $$BtnToTop, {})} <main> <section class="blog__hero"> <div class="hero__img"></div> </section> <section class="blog"> <ul> ${posts.map((post) => renderTemplate`<li> <a class="post__link"${addAttribute(`/blog/${post.slug}/`, "href")}> <div class="text__content"> <h4 class="title">≥ ${post.data.title}</h4> <p class="post__description">${post.data.description}</p> <p class="date"> ${" "}
≥ ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate })} </p> </div> <img class="post__img"${addAttribute(post.data.heroImage, "src")} alt=""> </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})}  </html>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/blog/index.astro", "self");

const $$file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/blog/index.astro";
const $$url = "/Ibtissam/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
