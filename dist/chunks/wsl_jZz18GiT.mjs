const id = "wsl.md";
						const collection = "blog";
						const slug = "wsl";
						const body = "\nCon el Subsistema de Windows para Linux (WSL), puedes ejecutar un entorno de GNU/Linux, ¡tal cual!, directamente desde Windows sin tener que lidiar con máquinas virtuales o reiniciar el sistema. Así que puedes disfrutar de la línea de comandos, utilidades y aplicaciones de Linux sin complicaciones. ¡Increíble, ¿no?! 😉\n\n<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/JKThdA1UbTw?si=d42An_QpFz0UoDhA\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n\n## Pasos para validar que podemos instalar WSL\n\n1. Mostrar la pantalla de ejecutar con el comando `Windows + R.`\n2. Escribimos CMD para que muestre la terminal.\n3. Escribimos winver para validar que tenemos la versión 2004 Build 19041 o mayores.\n\n## Instalación de Windows Subsystem for Linux\n\n1. Ejecutar Windows Powershell como administrador\n2. Abrimos la guía de Windows [Aquí](https://learn.microsoft.com/en-us/windows/wsl/install) para obtener los códigos de instalación.\n3. Para Instalar, ejecutar el comando: `wsl -–install`\n4. `wsl --set-default-version 2`\n5. Si no se puede hay que [actualizar el kernel ](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)\n6. Ejecutar de nuevo: wsl `--set-default-version 2`\n7. Abrimos la tienda de Microsoft e Instalamos Ubuntu en su versión más reciente.\n8. Al abrirlo se comenzará a instalar.\n\n![captura de pantalla instalación de WSL](/img/img_blog/ejemploWSLterminal.webp)\n**Nota:**\nSi aún no te permite. deberás activar la virtualización de windows, desde el BIOS\n\n## Instalar Windows terminal\n\n### Instala Vscode en Windows\n\nYa debes tener instalado Visual studio Code EN WINDOWS.\n\nSi no lo tienes, instálalo. [AQUÍ](https://code.visualstudio.com/download) PODRÁS INSTALAR VISUAL STUDIO CODE\n\nUna vez que instales Vscode, Busca el plugin WSL for windos, o instálalo aquí:\n\n[AQUÍ](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) PODRÁS INSTALAR EL PLUGIN WSL\n\nNecesitas Conectar Wsl a vscode. Recuerda que todas tus extensiones y temas de vscode, deberás instalarlos también en wsl.\n\n![Plugin WSl](/img/img_blog/pluginWSL.webp)\n\n## Comandos básicos de la terminal Bash\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/aFvk5UepU0o?si=ce1TO46-Lk5ufgQE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n\nComandos básicos en la terminal:\n\n- `pwd`: Nos muestra la ruta de carpetas en la que te encuentras ahora mismo.\n- `mkdir`: Nos permite crear carpetas (por ejemplo, mkdir Carpeta-Importante).\n- `touch`: Nos permite crear archivos (por ejemplo, touch archivo.txt).\n- `rm` : Nos permite borrar un archivo o carpeta (por ejemplo, rm archivo.txt). Mucho cuidado con este comando, puedes borrar todo tu disco duro.\n- `cat`: Ver el contenido de un archivo (por ejemplo, cat nombre-archivo.txt).\n- `ls`: Nos permite cambiar ver los archivos de la carpeta donde estamos ahora mismo. Podemos usar uno o más argumentos para ver más información sobre estos archivos (los argumentos pueden ser — + el nombre del argumento o – + una sola letra o shortcut por cada argumento).\n- `ls -a`: Mostrar todos los archivos, incluso los ocultos.\n- `ls -l`: Ver todos los archivos como una lista.\n- `cd`: Nos permite navegar entre carpetas.\n- `cd /` : Ir a la ruta principal.\n- `cd ~`: Ir a la ruta de tu usuario.\n- `cd carpeta/subcarpeta`: Navegar a una ruta dentro de la carpeta donde estamos ahora mismo.\n- `cd ..` (cd + dos puntos): Regresar una carpeta hacia atrás.\n- `history`: Ver los últimos comandos que ejecutamos y un número especial con el que podemos repetir su ejecución.\n- `! + número`: Ejecutar algún comando con el número que nos muestra el comando history (por ejemplo, !72).\n- `clear` : Para limpiar la terminal. También podemos usar los atajos de teclado Ctrl + L o Command + L.\n\n## Personalizando nuestra terminal\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/jA2PIgWX3BI?si=9eB4mngd5r5LCuP9\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>\n\nAhora tenemos que instalar ZSH, una alternativa a bash, que nos permite la instalación de temas y plugins\n\n```bash\napt install zsh\n```\n\nEn ocasiones será necesario instalar dando permisos de administrador, de esta manera:\n\n```bash\nsudo apt install zsh\n```\n\nVolver ZSH default:\n\n```bash\nchsh -s $(which zsh)\n```\n\nCierra y abre la terminal para ver los cambios realizados.\n\n### Luego de tener zsh instalado, podemos instalar Oh my zsh\n\nInstall oh-my-zsh via curl\n\n```bash\nsh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"\n```\n\nInstall oh-my-zsh via wget\n\n```bash\nsh -c \"$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)\"\n```\n\nOh My ZSH Sitio oficial: [Ir al sitio](https://ohmyz.sh/)\n\nAhora podremos instalar los temas en este reposiorio [ir al repo. ](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)\n\n**_Powerlevel10k_** es mi tema favorito (Y el de muchos) si lo quieres instalar, puedes hacerlo con este comando:\n\n```bash\ngit clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k\n```\n\nNecesitarás esta FUENTE: [Descagar Fuente](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)\n\nPara establecer tu Theme, debes posisionarte en el Home de tu terminal, y abrir `.zshrc` en tu editor de código preferido. En mi caso yo uso Visual Studio Code. Por lo tanto solo tengo que ejecutar el siguiente comando:\n\n```bash\ncode .zshrc\n```\n\nAhora debes ubicar en el archivo `ZSH_THEME=` y agregar tu tema de la siguiente manera:\n\n```zshrc\nZSH_THEME='powerlevel10k/powerlevel10k'\n```\n\n> Para comenzar a instalar los plugins, recuerda seguir los pasos del video. Recuerda que cada plugin tiene su propia documentación y forma de instalación.\n\nOh My ZSH Sitio oficial: [Ir al sitio](https://ohmyz.sh/)\n\n[Aquí](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) podremos instalar los temas en este repositorio\n\n## Para comenzar a instalar los plugins debemos acceder a este repositorio\n\nPLUGINS: [Ir al repositorio](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)\n\n- colorize (Ya vienen instalados)\n\n- git (Ya vienen instalados)\n\nPara instalar estos plugins, solo posicionate en el home y pega estos códigos:\n\n- zsh-autosuggestions:\n\n```bash\ngit clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions\n\n```\n\n- zsh-syntax-highlighting\n\n```bash\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting\n```\n\n- fast-syntax-highlighting\n\n```bash\ngit clone https://github.com/zdharma-continuum/fast-syntax-highlighting.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/plugins/fast-syntax-highlighting\n```\n\n-zsh-autocomplete\n\n```bash\ngit clone --depth 1 -- https://github.com/marlonrichert/zsh-autocomplete.git $ZSH_CUSTOM/plugins/zsh-autocomplete\n```\n\nDentro de tu archivo de configuració `.zshrc` y ubica esta sección: `plugins=(git)`.\n\nDeberás agregar tus plugins dentro del paréntesis de modo que luzcan así: `plugins=(git zsh-autosuggestions zsh-syntax-highlighting fast-syntax-highlighting zsh-autocomplete)`\n\n[Ir al repositorio](https://gist.github.com/n1snt/454b879b8f0b7995740ae04c5fb5b7df)\n\n## Alias\n\nLos alias deben tener un formato como este ejemplo:\n\n![Captura de pantalla aspecto de losplugins instalados ](/img/img_blog/aliasZSH.webp)\n\n## Conclusión\n\nRecuerda que tienes los videos para seguir paso a paso y todo funcione correctamente.\n";
						const data = {title:"Entorno de desarrollo con Windows",description:"Aprende a usar el Subsistema de Windows para Linux (WSL) para tener un entorno de desarrollo en Windows",pubDate:new Date(1700434800000),heroImage:"../img/img_blog/portadaWSl.webp"};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/wsl.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
