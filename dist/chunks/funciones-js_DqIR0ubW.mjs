import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BeKtFF-M.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"javascript-explorando-funciones-y-comprendiendo-variables\">JavaScript: Explorando Funciones y Comprendiendo Variables</h2>\n<p><img src=\"/img/img_blog/javascript2.webp\" alt=\"javascript image\"></p>\n<p>En esta segunda entrega de nuestra guía práctica de JavaScript, nos sumergiremos en el fascinante mundo de las funciones y exploraremos las sutilezas entre <code>var</code>, <code>let</code> y <code>const</code>. Prepárate para desentrañar estos conceptos cruciales en tu viaje por el desarrollo web.</p>\n<h2 id=\"funciones-en-javascript\">Funciones en JavaScript</h2>\n<p>Las funciones son bloques de código reutilizables que realizan una tarea específica. Crear una función implica dos pasos fundamentales: la declaración y la ejecución.</p>\n<h3 id=\"declaración-de-funciones\">Declaración de Funciones</h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> saludar</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB;font-style:italic\">nombre</span><span style=\"color:#BBBBBB\">) {</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF8B39\">`¡Hola, </span><span style=\"color:#72F1B8\">${</span><span style=\"color:#FF7EDB\">nombre</span><span style=\"color:#72F1B8\">}</span><span style=\"color:#FF8B39\">!`</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Aquí, <code>saludar</code> es el nombre de la función, y <code>(nombre)</code> son los parámetros que puede aceptar.</p>\n<h3 id=\"ejecución-de-funciones\">Ejecución de Funciones</h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#36F9F6\">saludar</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF8B39\">\"Juan\"</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// Salida: ¡Hola, Juan!</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Al llamar a la función <code>saludar</code> con el argumento <code>\"Juan\"</code>, ejecutamos el código dentro de la función y obtenemos la salida esperada.</p>\n<h3 id=\"tipos-de-funciones\">Tipos de Funciones</h3>\n<h4 id=\"funciones-con-valor-de-retorno\">Funciones con Valor de Retorno</h4>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> sumar</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB;font-style:italic\">a</span><span style=\"color:#BBBBBB\">, </span><span style=\"color:#FF7EDB;font-style:italic\">b</span><span style=\"color:#BBBBBB\">) {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">  return</span><span style=\"color:#FF7EDB\"> a</span><span style=\"color:#FEDE5D\"> +</span><span style=\"color:#FF7EDB\"> b</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">let</span><span style=\"color:#FF7EDB\"> resultado</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#36F9F6\"> sumar</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#2EE2FA\">3</span><span style=\"color:#BBBBBB\">, </span><span style=\"color:#2EE2FA\">5</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// resultado: 8</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"funciones-anónimas\">Funciones Anónimas</h4>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">let</span><span style=\"color:#36F9F6\"> saludar</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#FEDE5D\"> function</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB;font-style:italic\">nombre</span><span style=\"color:#BBBBBB\">) {</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF8B39\">`¡Hola, </span><span style=\"color:#72F1B8\">${</span><span style=\"color:#FF7EDB\">nombre</span><span style=\"color:#72F1B8\">}</span><span style=\"color:#FF8B39\">!`</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">};</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#36F9F6\">saludar</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF8B39\">\"Ana\"</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// Salida: ¡Hola, Ana!</span></span>\n<span class=\"line\"></span></code></pre>\n<h4 id=\"arrow-functions\">Arrow Functions</h4>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">let</span><span style=\"color:#36F9F6\"> multiplicar</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#BBBBBB\"> (</span><span style=\"color:#FF7EDB;font-style:italic\">a</span><span style=\"color:#BBBBBB\">, </span><span style=\"color:#FF7EDB;font-style:italic\">b</span><span style=\"color:#BBBBBB\">) </span><span style=\"color:#FEDE5D\">=></span><span style=\"color:#FF7EDB\"> a</span><span style=\"color:#FEDE5D\"> *</span><span style=\"color:#FF7EDB\"> b</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">let</span><span style=\"color:#FF7EDB\"> producto</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#36F9F6\"> multiplicar</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#2EE2FA\">4</span><span style=\"color:#BBBBBB\">, </span><span style=\"color:#2EE2FA\">6</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// producto: 24</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Las funciones de flecha (<code>arrow functions</code>) son una forma más concisa de escribir funciones.</p>\n<h2 id=\"variables-var-let-y-const\">Variables: var, let y const</h2>\n<h3 id=\"var\"><code>var</code></h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> ejemploVar</span><span style=\"color:#BBBBBB\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">  if</span><span style=\"color:#BBBBBB\"> (</span><span style=\"color:#F97E72\">true</span><span style=\"color:#BBBBBB\">) {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">    var</span><span style=\"color:#FF7EDB\"> x</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#2EE2FA\"> 10</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">  }</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB\">x</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#36F9F6\">ejemploVar</span><span style=\"color:#BBBBBB\">();</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// Salida: 10</span></span>\n<span class=\"line\"></span></code></pre>\n<p><code>var</code> tiene un ámbito de función, lo que significa que su declaración se eleva al nivel superior de su contexto de ejecución.</p>\n<h3 id=\"let\"><code>let</code></h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> ejemploLet</span><span style=\"color:#BBBBBB\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">  if</span><span style=\"color:#BBBBBB\"> (</span><span style=\"color:#F97E72\">true</span><span style=\"color:#BBBBBB\">) {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">    let</span><span style=\"color:#FF7EDB\"> y</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#2EE2FA\"> 20</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">  }</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB\">y</span><span style=\"color:#BBBBBB\">); </span><span style=\"color:#848BBD;font-style:italic\">// ¡Error!</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#36F9F6\">ejemploLet</span><span style=\"color:#BBBBBB\">();</span></span>\n<span class=\"line\"></span></code></pre>\n<p><code>let</code> tiene un ámbito de bloque, lo que significa que está limitado al bloque de código más cercano.</p>\n<h3 id=\"const\"><code>const</code></h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> ejemploConst</span><span style=\"color:#BBBBBB\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">  const</span><span style=\"color:#FF7EDB\"> PI</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#2EE2FA\"> 3.14</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB\">PI</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#36F9F6\">ejemploConst</span><span style=\"color:#BBBBBB\">();</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// Salida: 3.14</span></span>\n<span class=\"line\"></span></code></pre>\n<p>En este ejemplo, <code>const</code> se utiliza para declarar una constante <code>PI</code> y se le asigna el valor de <code>3.14</code>. Aunque es posible asignar un valor a <code>const</code> solo una vez, ten en cuenta que esto no impide que el contenido del objeto al que se refiere cambie si es un objeto mutable.</p>\n<h2 id=\"scope-en-javascript\">Scope en JavaScript</h2>\n<p>El scope se refiere a la accesibilidad y visibilidad de las variables en diferentes partes del código.</p>\n<h3 id=\"scope-global\">Scope Global</h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">let</span><span style=\"color:#FF7EDB\"> globalVar</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#FF8B39\"> \"Soy global\"</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> ejemploScopeGlobal</span><span style=\"color:#BBBBBB\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB\">globalVar</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#36F9F6\">ejemploScopeGlobal</span><span style=\"color:#BBBBBB\">();</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// Salida: Soy global</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"scope-local\">Scope Local</h3>\n<pre class=\"astro-code synthwave-84\" style=\"background-color:#262335;color:#bbbbbb; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#FEDE5D\">function</span><span style=\"color:#36F9F6\"> ejemploScopeLocal</span><span style=\"color:#BBBBBB\">() {</span></span>\n<span class=\"line\"><span style=\"color:#FEDE5D\">  let</span><span style=\"color:#FF7EDB\"> localVar</span><span style=\"color:#FFFFFFEE\"> =</span><span style=\"color:#FF8B39\"> \"Soy local\"</span><span style=\"color:#BBBBBB\">;</span></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">  console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB\">localVar</span><span style=\"color:#BBBBBB\">);</span></span>\n<span class=\"line\"><span style=\"color:#BBBBBB\">}</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#36F9F6\">ejemploScopeLocal</span><span style=\"color:#BBBBBB\">();</span></span>\n<span class=\"line\"><span style=\"color:#848BBD;font-style:italic\">// Salida: Soy local</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FF7EDB\">console</span><span style=\"color:#BBBBBB\">.</span><span style=\"color:#36F9F6\">log</span><span style=\"color:#BBBBBB\">(</span><span style=\"color:#FF7EDB\">localVar</span><span style=\"color:#BBBBBB\">); </span><span style=\"color:#848BBD;font-style:italic\">// ¡Error!</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Las variables declaradas con <code>let</code> y <code>const</code> tienen un ámbito de bloque, limitando su accesibilidad al bloque en el que se declaran.</p>\n<h2 id=\"conclusión\">Conclusión</h2>\n<p>En esta parte de nuestra guía de JavaScript, hemos explorado cómo crear y ejecutar funciones, así como las diferencias entre <code>var</code>, <code>let</code> y <code>const</code>. Entender estos conceptos es esencial para construir aplicaciones sólidas y comprender cómo las variables afectan el flujo y la estructura de tu código. En la próxima entrega, nos sumergiremos en conceptos más avanzados y te llevaremos a través de ejercicios prácticos para consolidar tus conocimientos. ¡Sigue explorando y desbloquea el potencial de JavaScript en tus proyectos web! 🚀✨</p>";

				const frontmatter = {"title":"JavaScript:Funciones y ambito de las variables","description":"Funciones y Comprendiendo Variables","pubDate":"Jan 9 2024","heroImage":"../img/img_blog/javascript3.webp"};
				const file = "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/funciones-js.md";
				const url = undefined;
				function rawContent() {
					return "\n## JavaScript: Explorando Funciones y Comprendiendo Variables\n\n![javascript image](/img/img_blog/javascript2.webp)\n\nEn esta segunda entrega de nuestra guía práctica de JavaScript, nos sumergiremos en el fascinante mundo de las funciones y exploraremos las sutilezas entre `var`, `let` y `const`. Prepárate para desentrañar estos conceptos cruciales en tu viaje por el desarrollo web.\n\n## Funciones en JavaScript\n\nLas funciones son bloques de código reutilizables que realizan una tarea específica. Crear una función implica dos pasos fundamentales: la declaración y la ejecución.\n\n### Declaración de Funciones\n\n```javascript\nfunction saludar(nombre) {\n  console.log(`¡Hola, ${nombre}!`);\n}\n```\n\nAquí, `saludar` es el nombre de la función, y `(nombre)` son los parámetros que puede aceptar.\n\n### Ejecución de Funciones\n\n```javascript\nsaludar(\"Juan\");\n// Salida: ¡Hola, Juan!\n```\n\nAl llamar a la función `saludar` con el argumento `\"Juan\"`, ejecutamos el código dentro de la función y obtenemos la salida esperada.\n\n### Tipos de Funciones\n\n#### Funciones con Valor de Retorno\n\n```javascript\nfunction sumar(a, b) {\n  return a + b;\n}\n\nlet resultado = sumar(3, 5);\n// resultado: 8\n```\n\n#### Funciones Anónimas\n\n```javascript\nlet saludar = function(nombre) {\n  console.log(`¡Hola, ${nombre}!`);\n};\n\nsaludar(\"Ana\");\n// Salida: ¡Hola, Ana!\n```\n\n#### Arrow Functions\n\n```javascript\nlet multiplicar = (a, b) => a * b;\n\nlet producto = multiplicar(4, 6);\n// producto: 24\n```\n\nLas funciones de flecha (`arrow functions`) son una forma más concisa de escribir funciones.\n\n## Variables: var, let y const\n\n### `var`\n\n```javascript\nfunction ejemploVar() {\n  if (true) {\n    var x = 10;\n  }\n  console.log(x);\n}\n\nejemploVar();\n// Salida: 10\n```\n\n`var` tiene un ámbito de función, lo que significa que su declaración se eleva al nivel superior de su contexto de ejecución.\n\n### `let`\n\n```javascript\nfunction ejemploLet() {\n  if (true) {\n    let y = 20;\n  }\n  console.log(y); // ¡Error!\n}\n\nejemploLet();\n```\n\n`let` tiene un ámbito de bloque, lo que significa que está limitado al bloque de código más cercano.\n\n### `const`\n\n```javascript\nfunction ejemploConst() {\n  const PI = 3.14;\n  console.log(PI);\n}\n\nejemploConst();\n// Salida: 3.14\n```\n\nEn este ejemplo, `const` se utiliza para declarar una constante `PI` y se le asigna el valor de `3.14`. Aunque es posible asignar un valor a `const` solo una vez, ten en cuenta que esto no impide que el contenido del objeto al que se refiere cambie si es un objeto mutable.\n\n## Scope en JavaScript\n\nEl scope se refiere a la accesibilidad y visibilidad de las variables en diferentes partes del código.\n\n### Scope Global\n\n```javascript\nlet globalVar = \"Soy global\";\n\nfunction ejemploScopeGlobal() {\n  console.log(globalVar);\n}\n\nejemploScopeGlobal();\n// Salida: Soy global\n```\n\n### Scope Local\n\n```javascript\nfunction ejemploScopeLocal() {\n  let localVar = \"Soy local\";\n  console.log(localVar);\n}\n\nejemploScopeLocal();\n// Salida: Soy local\n\nconsole.log(localVar); // ¡Error!\n```\n\nLas variables declaradas con `let` y `const` tienen un ámbito de bloque, limitando su accesibilidad al bloque en el que se declaran.\n\n## Conclusión\n\nEn esta parte de nuestra guía de JavaScript, hemos explorado cómo crear y ejecutar funciones, así como las diferencias entre `var`, `let` y `const`. Entender estos conceptos es esencial para construir aplicaciones sólidas y comprender cómo las variables afectan el flujo y la estructura de tu código. En la próxima entrega, nos sumergiremos en conceptos más avanzados y te llevaremos a través de ejercicios prácticos para consolidar tus conocimientos. ¡Sigue explorando y desbloquea el potencial de JavaScript en tus proyectos web! 🚀✨";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"javascript-explorando-funciones-y-comprendiendo-variables","text":"JavaScript: Explorando Funciones y Comprendiendo Variables"},{"depth":2,"slug":"funciones-en-javascript","text":"Funciones en JavaScript"},{"depth":3,"slug":"declaración-de-funciones","text":"Declaración de Funciones"},{"depth":3,"slug":"ejecución-de-funciones","text":"Ejecución de Funciones"},{"depth":3,"slug":"tipos-de-funciones","text":"Tipos de Funciones"},{"depth":4,"slug":"funciones-con-valor-de-retorno","text":"Funciones con Valor de Retorno"},{"depth":4,"slug":"funciones-anónimas","text":"Funciones Anónimas"},{"depth":4,"slug":"arrow-functions","text":"Arrow Functions"},{"depth":2,"slug":"variables-var-let-y-const","text":"Variables: var, let y const"},{"depth":3,"slug":"var","text":"var"},{"depth":3,"slug":"let","text":"let"},{"depth":3,"slug":"const","text":"const"},{"depth":2,"slug":"scope-en-javascript","text":"Scope en JavaScript"},{"depth":3,"slug":"scope-global","text":"Scope Global"},{"depth":3,"slug":"scope-local","text":"Scope Local"},{"depth":2,"slug":"conclusión","text":"Conclusión"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
