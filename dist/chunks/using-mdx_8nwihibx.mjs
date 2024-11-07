const id = "using-mdx.mdx";
						const collection = "blog";
						const slug = "using-mdx";
						const body = "\nEste tema viene con la integración [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) instalada y configurada en tu archivo de configuración `astro.config.mjs`. Si prefieres no usar MDX, puedes desactivar el soporte eliminando la integración de tu archivo de configuración.\n\n## ¿Por qué MDX?\n\nMDX es una variante especial de Markdown que admite sintaxis JavaScript & JSX incrustada. Esto te permite [mezclar JavaScript y componentes de interfaz de usuario en tu contenido de Markdown](https://docs.astro.build/en/guides/markdown-content/#mdx-features) para cosas como gráficos interactivos o alertas.\n\nSi tienes contenido existente escrito en MDX, esta integración hará que la migración a Astro sea muy fácil.\n\n## Ejemplo\n\nAquí te mostramos cómo importar y usar un componente de interfaz de usuario dentro de MDX.  \nCuando abras esta página en el navegador, deberías ver el botón interactivo a continuación.\n\nimport HeaderLink from '../../components/HeaderLink.astro';\n\n<HeaderLink href=\"#\" onclick=\"alert('clicked!')\">\n\t\tComponente incrustado en MDX\n</HeaderLink>\n\n\n## Más enlaces\n\n- [Documentación de la sintaxis MDX](https://mdxjs.com/docs/what-is-mdx)\n- [Documentación de uso de Astro](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)\n- **Nota:** Las [Directivas del cliente](https://docs.astro.build/en/reference/directives-reference/#client-directives) siguen siendo necesarias para crear componentes interactivos. De lo contrario, todos los componentes en tu MDX se renderizarán como HTML estático (sin JavaScript) por defecto.";
						const data = {title:"Usando MDX",description:"Una guía para aprender a usar MDX en Astro",pubDate:new Date(1688252400000),heroImage:"../img/lluvia_girl.webp"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/using-mdx.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
