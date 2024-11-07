import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, g as renderSlot, d as createAstro, e as addAttribute } from './astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$BtnToTop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<div class="menu__flotante" data-astro-cid-gowdfbqn> <div class="icon__top-container" data-astro-cid-gowdfbqn> <div class="to__top" data-menu="float" data-astro-cid-gowdfbqn> <a class="to__top-link" href="#" data-astro-cid-gowdfbqn></a> <i class="bi bi-arrow-up-circle" data-astro-cid-gowdfbqn></i> </div> </div> </div> `;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/BtnToTop.astro", void 0);

const $$MainLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a class="header__link " href="/" data-astro-cid-udc4qcox> <p class="header__logo logo__dark" id="logo" data-astro-cid-udc4qcox>Ibtissam<span class="span__dark" id="span" data-astro-cid-udc4qcox>Dev</span></p> </a> `;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/MainLogo.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <div class="footer__container"> ${renderComponent($$result, "MainLogo", $$MainLogo, {})} <div class="foooter__cajas"></div> <div class="foooter__cajas"></div> <div class="foooter__cajas"> <ul class="footer__caja__iconos"> <li class="footer__iconos__lista "></li> <li class="footer__iconos__lista "> <a href="https://www.linkedin.com/in/ibtissam-elguerdi/" target="_blank" rel="nofollow noreferrer noopener"> <img class="footer__iconos linkedin__footer icono__dark" src="/svg/linkedin.svg" alt="Linkedin icon"> </a> </li> <li class="footer__iconos__lista "> <a href="https://github.com/Elguerdi" target="_blank" rel="nofollow noreferrer noopener"> <img class="footer__iconos  icono__dark" src="/svg/github-light.svg" alt="github icon"> </a> </li> </ul> </div> </div> </footer>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/Footer.astro", void 0);

const $$IconLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/"> <img class="menu__avatar" src="/img/avatar_purple.webp" alt="logo Icon"> </a>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/atoms/IconLogo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<header class="header blur" id="header"> ${renderComponent($$result, "MainLogo", $$MainLogo, {})} <!-- Menu  --> <nav class="menu__nav panel" id="panel"> <ul class="menu__ul"> ${renderComponent($$result, "IconLogo", $$IconLogo, {})} ${renderSlot($$result, $$slots["default"])} </ul> </nav> </header> <button class="panel__btn hamburger hamburger--emphatic" type="button" aria-label="menu"> <span class="hamburger-box"> <span class="hamburger-inner" id="hamburguesa"></span> </span> </button>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/layouts/Header.astro", void 0);

const $$Astro = createAstro();
const $$NavLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavLinks;
  const { origin, target } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Header", $$Header, {}, { "default": ($$result2) => renderTemplate`${origin.map((link) => renderTemplate`${maybeRenderHead()}<li class="menu__list"> ${target == "_blank" ? renderTemplate`<a class="menu__link menu__hamburger-link"${addAttribute(link.target, "target")} rel="nofollow noreferrer noopener"${addAttribute(link.href, "href")}> ${link.text} </a>` : renderTemplate`<a class="menu__link menu__hamburger-link"${addAttribute(link.target, "target")}${addAttribute(link.href, "href")}> ${link.text} </a>`} </li>`)}` })}`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/NavLinks.astro", void 0);

const links = [
  { href: "#skills", text: "Skills" },
  { href: "#tools", text: "Tools" },
  { href: "#about", text: "About" },
  { href: "#portafolio", text: "Projects" },
];
const about = [
  { href: "/", text: "Home" },
  { href: "#about", text: "About" },
  { href: "/portfolio", text: "Projects" },
];
const portfolio = [
  { href: "/", text: "Home", target: "_self" },
  { href: "/about", text: "About Me", target: "_self" },
  { href: "https://github.com/Elguerdi", text: "My GitHub", target: "_blank" },
];
const blog = [
  { href: "/", text: "Home", target: "_self" },
  { href: "/about", text: "About", target: "_self" },
  { href: "/portfolio", text: "Portfolio", target: "_self" },
  {
    href: "https://sofidev.medium.com/",
    text: "Medium blog",
    target: "_blank",
  },
];

export { $$NavLinks as $, $$BtnToTop as a, $$Footer as b, about as c, blog as d, links as l, portfolio as p };
