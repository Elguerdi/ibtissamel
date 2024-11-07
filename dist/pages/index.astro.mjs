import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent, k as createTransitionScope, d as createAstro, b as renderHead } from '../chunks/astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$ToggleDarkBtn } from '../chunks/ToggleDarkBtn_d-Rlc3RU.mjs';
/* empty css                                 */
import { a as $$DarkBg, $ as $$Button } from '../chunks/DarkBg_VbX6WyDW.mjs';
/* empty css                                  */
import { $ as $$NavLinks, a as $$BtnToTop, b as $$Footer, l as links } from '../chunks/MenuData_CXqPYJpt.mjs';
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from '../chunks/consts_W9L18Ii2.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { $ as $$CardTerminal } from '../chunks/CardTerminal_Sc81gDRW.mjs';
import 'clsx';
import { $ as $$ContactSocialIcons, a as $$Divider4 } from '../chunks/Divider4_e9VV2TMv.mjs';
/* empty css                                 */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

//Only designed to support 5 icons.
//If you want to add more. youll need to mify styles
const HeroIconsSocial = [
  {
    name: "Javaascript",
    src: "skill-icons:javascript",
  },
  {
    name: "Next JS",
    src: "devicon:nextjs",
  },
  {
    name: "Node js",
    src: "skill-icons:nodejs-dark",
  },
  {
    name: "React",
    src: "skill-icons:react-dark",
  },
  {
    name: "Vue",
    src: "skill-icons:vuejs-dark",
  },
];

const $$HeroIcons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${HeroIconsSocial.map((icon, index) => renderTemplate`${maybeRenderHead()}<div class="social"><div${addAttribute(`social__link icon-${index + 1} icono__dark`, "class")}>${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "social__icon", "icon": icon.src, "w": true })}</div></div>`)}`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/HeroIcons.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="hero"${addAttribute(createTransitionScope($$result, "nfpqcd2h"), "data-astro-transition-persist")}> <div class="hero__contenedor"> <div class="hero__saludo"> <h1 class="hero__titulo" id="titulo-saludo" data-section="hero" data-value="heroTitulo">
Hi! I'm <span class="flicker-in-1 span__dark">Ibtissam</span> </h1> <h2 class="hero__subtitulo" id="subtitulo" data-section="hero" data-value="heroSubtitulo">
≥ Software Engineer <span class="hero__subtitulo--span">| Mobile Development Engineer</span> </h2> </div> <aside class="side__container"> <img class="side__img img__ligth" src="./img/ibtissam.png" alt="Sofidev profile photo"> <img class="side__img img__dark" src="./img/ibtissam.png" alt="Sofidev profile photo"> <img class="side__img img__damage" src="./img/ibtissam.png" alt="Sofidev profile photo"> ${renderComponent($$result, "HeroIcons", $$HeroIcons, {})} </aside> </div> ${renderComponent($$result, "DarkBg", $$DarkBg, {})} </section>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/Hero.astro", "self");

const cardsData = [
  {
    imgSrc: "./svg/file-type-html.svg",
    imgAlt: "HTML icon",
    title: "HTML✅",
    clas: "html ",
  },
  {
    imgSrc: "./svg/css-color.svg",
    imgAlt: "CSS icon",
    title: "CSS✅",
    clas: "css",
  },
  {
    imgSrc: "./svg/dart.svg",
    imgAlt: "flutter icon",
    title: "Flutter✅",
    clas: "Flutter",
  },
  {
    imgSrc: "./svg/bootstrap.svg",
    imgAlt: "Bootstrap icon",
    title: "Bootstrap✅",
    clas: "",
  },
  {
    imgSrc: "./svg/firebase.svg",
    imgAlt: "Tailwind icon",
    title: "Firebase✅",
    clas: "Firebase",
  },
  {
    imgSrc: "./svg/styledcomponents.svg",
    imgAlt: "Styled components icon",
    title: "Styled Components✅",
    clas: "",
  },
  {
    imgSrc: "./svg/javascript-fill.svg",
    imgAlt: "Javascript icon",
    title: "Javascript✅",
    clas: "javascript",
  },
  {
    imgSrc: "./svg/react-dark.svg",
    imgAlt: "React icon",
    title: "React✅",
    clas: "React ",
  },
  {
    imgSrc: "./svg/astro.svg",
    imgAlt: "Astro icon",
    title: "Astro✅",
    clas: "",
  },
  {
    imgSrc: "./svg/wordpress-icon.svg",
    imgAlt: "Wordpress icon",
    title: "Wordpress✅",
    clas: "wordpress",
  },
  {
    imgSrc: "./svg/nodejs-dark.svg",
    imgAlt: "Node.js icon",
    title: "Node.js🌱",
    clas: "",
  },
  {
    imgSrc: "./svg/npm-wordmark.svg",
    imgAlt: "Wordpress icon",
    title: "npm✅",
    clas: "npm ",
  },
  {
    imgSrc: "./svg/mysql.svg",
    imgAlt: "MySql icon",
    title: "MySql Server🌱",
    clas: "",
  },
];

const CardSkill = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { class: "skills__cajas", children: [...cardsData, ...cardsData].map((cardData) => {
    return /* @__PURE__ */ jsxs("div", { className: "skills__caja caja__dark", children: [
      /* @__PURE__ */ jsx("div", { className: "img", children: /* @__PURE__ */ jsx(
        "img",
        {
          className: `skills__icono skills__icono__dark ${cardData.clas}`,
          src: cardData.imgSrc,
          alt: cardData.imgAlt
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "skills__texto", children: /* @__PURE__ */ jsx("p", { className: "text head titulo__dark", children: cardData.title }) })
    ] });
  }) }) });
};

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="skills" id="skills"> <h2 data-aos="fade-up" class="titulo titulo__dark">Skills</h2> <div class="skills__container max__width"> ${renderComponent($$result, "CardTerminal", $$CardTerminal, { "animation": "fade-right" }, { "default": ($$result2) => renderTemplate` <p class="terminal__content terminal__content--p">
≥ Strong foundation in
<span class="terminal__content terminal__content--span">HTML,Javascript, React, Flutter, Dart,  CSS,JavaScript, C, C++, C#, PHP, Python, SQL, MYSQL, MongoDB, Firebase..</span> </p> <p class="terminal__content terminal__content--color">
≥ In addition to my technical skills, I have experience in graphic
        design and UI design.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "./docs/eng_cv_ibtissam_elguerdi.pdf", "text": "Download CV", "target": "_blank" })} ` })} <div class="skills__cards-container"> ${renderComponent($$result, "CardSkill", CardSkill, {})} </div> </div> </section>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/Skills.astro", void 0);

const $$Divider1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="wrapper"> <div class="custom-shape-divider-bottom-1685513857"> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" id="divider1" class="shape-fill"></path> </svg> </div> </div>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/atoms/Dividers/Divider1.astro", void 0);

const $$Astro$1 = createAstro();
const $$DividerTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DividerTop;
  const { dividerBg, dividerBgDark, colorLight, colorDark } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`wraper__tools ${dividerBg} ${dividerBgDark}`, "class")}> <div class="custom-shape-divider-top-1699780157"> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path${addAttribute(`${colorLight} ${colorDark}`, "class")} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path> </svg> </div> </div>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/atoms/Dividers/DividerTop.astro", void 0);

const toolsInfo = [
  {
    title: "Slack",
    src: "./svg/slack.svg",
  },
  {
    title: "git",

    src: "./svg/git.svg",
  },
  {
    title: "Bash",

    src: "./svg/terminal-fill.svg",
  },
  {
    title: "Notion",

    src: "./svg/notion-icon.svg",
  },
  {
    title: "Ubuntu",
    src: "./svg/ubuntu.svg",
  },
  {
    title: "VsCode",
    src: "./svg/visual-studio-code.svg",
  },
  {
    title: "Figma",

    src: "./svg/figma.svg",
  },
  {
    title: "Woocommerce",

    src: "./svg/woocommerce.svg",
  },
  {
    title: "Yoast SEO",

    src: "./svg/yoast.svg",
  },
  {
    title: "XAMPP",

    src: "./svg/xampp.svg",
  },
  {
    title: "ELEMENTOR",

    src: "./svg/elementor (1).svg",
  },
  {
    title: "Analytics",

    src: "./svg/google-analytics.svg",
  },
  {
    title: "Search Console",

    src: "./svg/google-search-console.svg",
  },
  {
    title: "Photoshop",

    src: "./svg/photoshop.svg",
  },
  {
    title: "Illustrator",
    src: "./svg/illustrator.svg",
  },
  {
    title: "Premier",

    src: "./svg/premiere.svg",
  },
  {
    title: "Miro",

    src: "./svg/miro.png",
  },
];

const $$SliderTools = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${[...toolsInfo, ...toolsInfo].map((tool) => renderTemplate`${maybeRenderHead()}<div class="tools__grupo"><div class="tools__link tools__caja caja__dark"><img class="tools__icono tool__dark"${addAttribute(tool.src, "src")}${addAttribute(tool.title, "alt")}></div><span class="tools__descripcion titulo__dark">${tool.title}</span></div>`)}`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/SliderTools.astro", void 0);

const $$Tools = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="tools" id="tools"> <h2 class="titulo tools__titulo titulo__dark" data-aos="zoom-in">Tools</h2> <div class="tools__caja__slider"> <div class="slider"> <div class="tools__cajas"> ${renderComponent($$result, "SliderTools", $$SliderTools, {})} </div> </div> </div> </section>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/Tools.astro", void 0);

const $$CardAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card__about" data-aos="fade-right"> <div class="card-photo"> <img class="about__img--src" src="./img/miso.jpeg" alt=""> </div> <div class="card-title"> <p>IBTISSAM ELGUERDI</p> <span>Software Engineer</span> </div> <div class="card-socials"> ${renderComponent($$result, "ContactSocialIcons", $$ContactSocialIcons, {})} </div> </div>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/molecules/CardAbout/CardAbout.astro", void 0);

const $$Astro = createAstro();
const $$TitleSpan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSpan;
  return renderTemplate`${maybeRenderHead()}<h2 data-aos="fade-up"${addAttribute(`about__titulo ${Astro2.props.classColor}`, "class")} id="aboutDeTitulo" data-astro-cid-2vz7p253> ${Astro2.props.text1} <span data-aos="fade-left" class="span__dark" id="span-titulo2" data-astro-cid-2vz7p253> ${Astro2.props.span} </span> ${Astro2.props.text2} </h2> `;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/atoms/TitleSpan/TitleSpan.astro", void 0);

const $$AboutHome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="about" id="about"> ${renderComponent($$result, "TitleSpan", $$TitleSpan, { "text1": "Who is ", "span": " Ibtissam", "text2": "?" })} <div class="about__container"> ${renderComponent($$result, "CardAbout", $$CardAbout, {})} <div class="terminal__container"> ${renderComponent($$result, "CardTerminal", $$CardTerminal, { "animation": "fade-left" }, { "default": ($$result2) => renderTemplate` <h3 class="terminal__content terminal__content--h3">≥ IBTISSAM ELGUERDI</h3> <p class="terminal__content terminal__content--p">≥ Flutter Fan 😍. Always looking for new skills to learn.</p> <h3 class="terminal__content terminal__content--h3">
≥ What <span class="terminal__content terminal__content--span span__dark">sets me apart?</span> </h3> <p class="terminal__content terminal__content--p">
≥ I genuinely <span class="terminal__content--span span__dark">love what I do! 💙</span> I
					believe that blending creativity and code can craft enchanting user
					experiences. <span class="terminal__content--span span__dark"></span></p> <div class="about__contactar"> ${renderComponent($$result2, "Button", $$Button, { "href": "/about", "text": "See more" })} </div> ` })} </div> </div> </section>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/organisms/AboutHome/AboutHome.astro", void 0);

const portafolioData = [
  {
    imgSrc: "../img/spendsmart.png",
    titulo: "SpendSmart",
    skills: ["Flutter", "Swift","Firebase"],
    descripcion:
      "SpendSmart is a banking app designed to make financial management simple and efficient. It features a friendly chatbot for quick assistance and an invoice scanner for easy expense tracking, along with tools to set budgets and monitor spending.",
    demoURL: "https://alura-flix-self.vercel.app/",
    repoURL: "https://github.com/Elguerdi/SpendSmart",
    anim:"fade-right"
  },
  {
    imgSrc: "../img/php.png",
    titulo: "Stock Management System",
    skills: ["JavaScript", "PHP"],
    descripcion: " Stock Management System is an intuitive tool for tracking inventory and managing stock levels efficiently. With features like real-time stock updates and low-quantity alerts, it simplifies inventory control for businesses. This project was a great way to build a practical solution that streamlines daily operations.",
    demoURL: "https://alura-geek-ruddy.vercel.app/",
    repoURL: "https://github.com/Elguerdi/Stock-Management-System",
    anim:"fade-up"
  },
  {
    imgSrc: "../img/ai.jpg",
    titulo: "AI Image Generator",
    skills: ["Flutter", "C"],
    descripcion: "AI Image Generator is an innovative tool that uses artificial intelligence to create unique images from text prompts.it enables users to generate visuals quickly, whether for design, marketing, or personal projects. Building this tool allowed me to explore AI's potential in creative applications and make art generation accessible to anyone with a simple idea.",
    demoURL: "https://react-org-delta.vercel.app/",
    repoURL: "https://github.com/Elguerdi/AI-Image-Generator",
    anim:"fade-left"
  },
  {
    imgSrc: "../img/movies.webp",
    titulo: "Movies App",
    skills: ["Flutter", "C"],
    descripcion: "Movies App is a sleek and user-friendly mobile app that allows users to explore and discover movies based on genres, ratings, and release dates. With real-time movie data integration, it provides detailed information on cast, plot summaries, and trailers. This project was a fun challenge, combining my love for movies with my passion for creating engaging, easy-to-use apps.",
    demoURL: "https://sofidev-portfolio-astro-delta.vercel.app/",
    repoURL: "https://github.com/Elguerdi/movies_app_flutter",
    anim:"fade-right"
  },
  {
    imgSrc: "../img/quiz.webp",
    titulo: "Quiz App",
    skills: ["Flutter", "Firebase"],
    descripcion: "Quiz App is an interactive mobile application that allows users to take quizzes on various topics, track their scores, and challenge friends. Designed with a simple and engaging interface, it offers multiple-choice questions, timers, and instant feedback. This project was a great opportunity to combine fun and learning in a user-friendly way, creating an app that’s both educational and entertaining.",
    demoURL: "https://sofidevo.github.io/eco-store-sass/",
    repoURL: "https://github.com/Elguerdi/Quiz-app-with-Flutter-",
    anim:"fade-up"
  },
  
  
];

 const skillIcons = {
  Flutter:"devicon:dart",
  JavaScript: "skill-icons:javascript",
  Swift: "devicon:swift",
  Firebase: "devicon:firebase",
  PHP: "devicon:php",
  C: "skill-icons:cpp",
  StyledComponents: "skill-icons:styledcomponents",
  Hive: "skill-icons:hive",
};

const $$PortfolioCards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${portafolioData.slice(0, 3).map((data) => renderTemplate`${maybeRenderHead()}<div class="portafolio__tarjeta"${addAttribute(data.anim, "data-aos")}><div class="portafolio__cara faceA card__content caja__dark__portafolio "><div class="img__container"><img${addAttribute(`portafolio__img`, "class")}${addAttribute(data.imgSrc, "src")}${addAttribute(data.titulo, "alt")}></div><div class="container__info"><h3 class="portafolio__subtitulo titulo__dark">${data.titulo}</h3><div class="skills__used">${data.skills.map((skill) => renderTemplate`<div class="tecnology">${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": skillIcons[skill] || "", "width": "22" })}</div>`)}</div></div></div><div class="portafolio__cara faceB  caja__dark__portafolio"><p class="portafolio__descripcion titulo__dark">${data.descripcion}</p><div class="portafolio__botobnes"><a class=" boton titulo__dark"${addAttribute(data.repoURL, "href")} target="_blank" rel="nofollow noreferrer noopener"><span data-section="portafolio" data-value="repo">
View Repo
</span></a></div></div></div>`)}`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/PortfolioCards.astro", void 0);

const $$PortfolioSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="portafolio " id="portafolio"> <h2 data-aos="fade-left" class="titulo titulo__dark">Projects</h2> <div class="portafolio__contenedor" data-card> ${renderComponent($$result, "PortfolioCards", $$PortfolioCards, {})} </div> ${renderComponent($$result, "Button", $$Button, { "animation": "zoom-in", "href": "/portfolio", "text": "See More" })} </section>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/PortfolioSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "NavLinks", $$NavLinks, { "origin": links })} ${renderComponent($$result, "ToogleDarkBtn", $$ToggleDarkBtn, {})} ${renderComponent($$result, "BtnToTop", $$BtnToTop, {})} <main> ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Divider1", $$Divider1, {})} ${renderComponent($$result, "Skills", $$Skills, {})} ${renderComponent($$result, "DividerTop", $$DividerTop, { "colorLight": "fill__white", "colorDark": "purple__dark", "dividerBg": "secundary", "dividerBgDark": "dark__background" })} ${renderComponent($$result, "Tools", $$Tools, {})} ${renderComponent($$result, "DividerTop", $$DividerTop, { "colorLight": "fill__purple", "colorDark": "dark__primary", "dividerBg": "dark__background" })} ${renderComponent($$result, "AboutHome", $$AboutHome, {})} ${renderComponent($$result, "PortfolioSection", $$PortfolioSection, {})} ${renderComponent($$result, "Divider4", $$Divider4, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/index.astro", void 0);

const $$file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/index.astro";
const $$url = "/Ibtissam";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
