import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent, g as renderSlot, d as createAstro } from './astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$BarraTerminal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="terminal_toolbar"> <div class="butt"> <div class="btn btn__red btn-color"></div> <div class="btn btn__yellow"></div> <div class="btn btn__green"></div> </div> <p class="user">ibtissam@admin: ~</p> </div>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/atoms/BarraTerminal/BarraTerminal.astro", void 0);

const $$Astro = createAstro();
const $$CardTerminal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardTerminal;
  const { animation } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="caja__terminal"${addAttribute(animation, "data-aos")}> ${renderComponent($$result, "BarraTerminal", $$BarraTerminal, {})} <div class="caja__cristal caja__dark"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/layouts/CardTerminal.astro", void 0);

export { $$CardTerminal as $ };
