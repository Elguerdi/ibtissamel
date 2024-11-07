import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, d as createAstro } from './astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
