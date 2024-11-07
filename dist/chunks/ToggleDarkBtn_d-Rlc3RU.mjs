import { c as createComponent, r as renderTemplate, e as addAttribute, d as createAstro, m as maybeRenderHead, k as createTransitionScope } from './astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "../img/miso.jpeg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/../../img/image.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><!-- Google fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- css librerias/ cdn --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- CDN Hamburger libary --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css"><!-- Aos animation --><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"><!-- Bootstrap icons  --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossorigin="anonymous"><!-- Iconify CDN -->`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/BaseHead.astro", void 0);

const $$ToggleDarkBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<div class="toogle-dark__container" data-astro-cid-xzdko5ra${addAttribute(createTransitionScope($$result, "jwqiv6od"), "data-astro-transition-persist")}> <i class="bi bi-lightning-charge toogle__rayo" data-toogle data-astro-cid-xzdko5ra${addAttribute(createTransitionScope($$result, "fu7rwxks"), "data-astro-transition-persist")}></i> </div> `;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/ToggleDarkBtn.astro", "self");

export { $$BaseHead as $, $$ToggleDarkBtn as a };
