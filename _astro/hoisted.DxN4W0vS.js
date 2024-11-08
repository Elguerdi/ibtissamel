import"./ToggleDarkBtn.astro_astro_type_script_index_0_lang.BHLN3VAy.js";import"https://code.iconify.design/iconify-icon/2.0.0/iconify-icon.min.js";import"./Header.astro_astro_type_script_index_0_lang.D5ufL605.js";const a=[{imgSrc:"../img/spendsmart.png",titulo:"SpendSmart",skills:["Flutter","Swift","Firebase"],descripcion:"SpendSmart is a banking app designed to make financial management simple and efficient. It features a friendly chatbot for quick assistance and an invoice scanner for easy expense tracking, along with tools to set budgets and monitor spending.",demoURL:"https://alura-flix-self.vercel.app/",repoURL:"https://github.com/Elguerdi/SpendSmart",anim:"fade-right"},{imgSrc:"../img/php.png",titulo:"Stock Management System",skills:["JavaScript","PHP"],descripcion:" Stock Management System is an intuitive tool for tracking inventory and managing stock levels efficiently. With features like real-time stock updates and low-quantity alerts, it simplifies inventory control for businesses. This project was a great way to build a practical solution that streamlines daily operations.",demoURL:"https://alura-geek-ruddy.vercel.app/",repoURL:"https://github.com/Elguerdi/Stock-Management-System",anim:"fade-up"},{imgSrc:"../img/ai.jpg",titulo:"AI Image Generator",skills:["Flutter","C"],descripcion:"AI Image Generator is an innovative tool that uses artificial intelligence to create unique images from text prompts.it enables users to generate visuals quickly, whether for design, marketing, or personal projects. Building this tool allowed me to explore AI's potential in creative applications and make art generation accessible to anyone with a simple idea.",demoURL:"https://react-org-delta.vercel.app/",repoURL:"https://github.com/Elguerdi/AI-Image-Generator",anim:"fade-left"},{imgSrc:"../img/movies.webp",titulo:"Movies App",skills:["Flutter","C"],descripcion:"Movies App is a sleek and user-friendly mobile app that allows users to explore and discover movies based on genres, ratings, and release dates. With real-time movie data integration, it provides detailed information on cast, plot summaries, and trailers. This project was a fun challenge, combining my love for movies with my passion for creating engaging, easy-to-use apps.",demoURL:"https://sofidev-portfolio-astro-delta.vercel.app/",repoURL:"https://github.com/Elguerdi/movies_app_flutter",anim:"fade-right"},{imgSrc:"../img/quiz.webp",titulo:"Quiz App",skills:["Flutter","Firebase"],descripcion:"Quiz App is an interactive mobile application that allows users to take quizzes on various topics, track their scores, and challenge friends. Designed with a simple and engaging interface, it offers multiple-choice questions, timers, and instant feedback. This project was a great opportunity to combine fun and learning in a user-friendly way, creating an app that’s both educational and entertaining.",demoURL:"https://sofidevo.github.io/eco-store-sass/",repoURL:"https://github.com/Elguerdi/Quiz-app-with-Flutter-",anim:"fade-up"}],s={Flutter:"devicon:dart",JavaScript:"skill-icons:javascript",Swift:"devicon:swift",Firebase:"devicon:firebase",PHP:"devicon:php",C:"skill-icons:cpp",StyledComponents:"skill-icons:styledcomponents",Hive:"skill-icons:hive"},p=document.querySelectorAll("[data-skill]"),r=document.querySelector(".cards__container"),d=document.querySelector("[data-All]");function n(){const t=a.map(i=>`
        <div class="portafolio__tarjeta" >
            <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                <div class="img__container">
                    <img
                        class="portafolio__img"
                        src="${i.imgSrc}"
                        alt="${i.titulo}"
                    />
                </div>
                <div class="container__info">
                    <h3 class="portafolio__subtitulo titulo__dark">
                        ${i.titulo}
                    </h3>
                    <div class="skills__used">
                        ${i.skills.map(o=>`
                            <div class="tecnology" >
                                <iconify-icon
                                    icon="${s[o]||""}"
                                    width="22"
                                />
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
            <div class="portafolio__cara faceB  caja__dark__portafolio">
                <p class="portafolio__descripcion titulo__dark">
                    ${i.descripcion}
                </p>
                <div class="portafolio__botobnes">
                    
                    <a
                        class="portafolio__btn boton titulo__dark"
                        href="${i.repoURL}"
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                    >
                        <span data-section="portafolio" data-value="repo">
                            View Repo
                        </span>
                    </a>
                </div>
            </div>
        </div>
    `).join("");r.innerHTML=t}n();p.forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-skill"),l=a.filter(e=>e.skills.includes(i)).map(e=>`
          <div class="portafolio__tarjeta" >
              <div class="portafolio__cara faceA card__content caja__dark__portafolio">
                  <div class="img__container">
                      <img
                          class="portafolio__img"
                          src="${e.imgSrc}"
                          alt="${e.titulo}"
                      />
                  </div>
                  <div class="container__info">
                      <h3 class="portafolio__subtitulo titulo__dark">
                          ${e.titulo}
                      </h3>
                      <div class="skills__used">
                          ${e.skills.map(c=>`
                              <div class="tecnology" >
                                  <iconify-icon
                                      icon="${s[c]||""}"
                                      width="22"
                                  />
                              </div>
                          `).join("")}
                      </div>
                  </div>
              </div>
              <div class="portafolio__cara faceB  caja__dark__portafolio">
                  <p class="portafolio__descripcion titulo__dark">
                      ${e.descripcion}
                  </p>
                  <div class="portafolio__botobnes">
                     
                      <a
                          class="portafolio__btn boton titulo__dark"
                          href="${e.repoURL}"
                          target="_blank"
                          rel="nofollow noreferrer noopener"
                      >
                          <span data-section="portafolio" data-value="repo">
                              View Repo
                          </span>
                      </a>
                  </div>
              </div>
          </div>
      `).join("");r.innerHTML=l})});d.addEventListener("click",()=>{n()});
