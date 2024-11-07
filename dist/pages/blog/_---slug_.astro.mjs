import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, g as renderSlot, d as createAstro } from '../../chunks/astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_BUm6of_x.mjs';
import { $ as $$BaseHead, a as $$ToggleDarkBtn } from '../../chunks/ToggleDarkBtn_d-Rlc3RU.mjs';
import { $ as $$NavLinks, a as $$BtnToTop, b as $$Footer, d as blog } from '../../chunks/MenuData_CXqPYJpt.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_CrhnqgHB.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "NavLinks", $$NavLinks, { "origin": blog })} ${renderComponent($$result, "ToggleDarkBtn", $$ToggleDarkBtn, {})} ${renderComponent($$result, "BtnToTop", $$BtnToTop, {})} <main> <div class="prose"> <div class="title"> <div class="date"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate })} ${updatedDate && renderTemplate`<div class="last-updated-on">
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate })} </div>`} </div> <h1 class="article__title">≥ ${title}</h1> <hr> </div> ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/blog/[...slug].astro";
const $$url = "/Ibtissam/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
