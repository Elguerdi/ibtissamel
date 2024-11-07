import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as createAstro } from './astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { animation } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(animation, "data-aos")} class="link__boton boton titulo__dark  span"${addAttribute(Astro2.props.href, "href")}${addAttribute(Astro2.props.target, "target")}> ${Astro2.props.text} </a>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/atoms/Button/Button.astro", void 0);

const $$DarkBg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="background" id="background"> <!-- Dynamically generated span elements will be added here --> </div> `;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/DarkBg.astro", void 0);

export { $$Button as $, $$DarkBg as a };
