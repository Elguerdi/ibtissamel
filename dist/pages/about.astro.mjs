import { c as createComponent, r as renderTemplate, a as renderComponent, b as renderHead, d as createAstro } from '../chunks/astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$BaseHead, a as $$ToggleDarkBtn } from '../chunks/ToggleDarkBtn_d-Rlc3RU.mjs';
import { $ as $$NavLinks, a as $$BtnToTop, b as $$Footer, c as about } from '../chunks/MenuData_CXqPYJpt.mjs';
import { $ as $$CardTerminal } from '../chunks/CardTerminal_Sc81gDRW.mjs';
import { $ as $$ContactSocialIcons, a as $$Divider4 } from '../chunks/Divider4_e9VV2TMv.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-kh7btl4r": true })}${renderHead()}</head> <body data-astro-cid-kh7btl4r> ${renderComponent($$result, "NavLinks", $$NavLinks, { "origin": about, "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result, "ToogleDarkBtn", $$ToggleDarkBtn, { "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result, "BtnToTop", $$BtnToTop, { "data-astro-cid-kh7btl4r": true })} <main data-astro-cid-kh7btl4r> <section class="about__intro" id="about" data-astro-cid-kh7btl4r> <div class=" about__imageIcons" ata-aos="fade-up" data-astro-cid-kh7btl4r> <img class="about__profile" src="../img/miso.jpeg" alt="sofidev picture" data-astro-cid-kh7btl4r> <div class="icons__container" data-astro-cid-kh7btl4r> ${renderComponent($$result, "ContactSocialIcons", $$ContactSocialIcons, { "data-astro-cid-kh7btl4r": true })} </div> </div> ${renderComponent($$result, "CardTerminal", $$CardTerminal, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` <h2 class="about__titulo--post post__titulo" data-astro-cid-kh7btl4r>
Ibtissam <span class="span__dark" id="span-titulo2" data-astro-cid-kh7btl4r> Elguerdi</span> </h2> <p class="terminal__content terminal__content--p" data-astro-cid-kh7btl4r>
≥ If I had to pick one quality to describe myself, it would definitely be my
<span class="terminal__content terminal__content--span" data-astro-cid-kh7btl4r>love for what I do. Programming?</span> It's not just a job—it's like a lifelong puzzle that I genuinely enjoy piecing together.
</p> <p class="terminal__content terminal__content--color" data-astro-cid-kh7btl4r>
As a Software Engineer, I like to think of myself as a Flutter artisan, crafting beautiful and interactive mobile applications that aren't just functional but fun to use.
</p> <p class="terminal__content terminal__content--p" data-astro-cid-kh7btl4r>
I studied at EMSI, where I had the chance <span class="terminal__content terminal__content--span" data-astro-cid-kh7btl4r> to dive deep into tech and get hands-on experience. Over the past 4 years, I've been creating and publishing applications, turning ideas into reality.<span data-astro-cid-kh7btl4r></span> (I like to think of myself as a tech wizard—minus the hat and wand... although they would be cool accessories!)
</span></p> <p class="terminal__content terminal__content--color" data-astro-cid-kh7btl4r>
I'm particularly proud of my latest project, SpendSmart, a banking application focused on helping users manage their finances with ease and efficiency. This project was an exciting challenge and a rewarding experience—bringing practical, user-friendly tools to life is what I love most about my work.
</p> ` })}</section> ${renderComponent($$result, "Divider4", $$Divider4, { "data-astro-cid-kh7btl4r": true })} <section class="about__text" data-astro-cid-kh7btl4r></section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })}  </body> </html>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/about.astro", void 0);

const $$file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/about.astro";
const $$url = "/Ibtissam/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
