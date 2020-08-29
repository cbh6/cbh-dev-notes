# Qué necesitamos para usar TypeScript

- Básicamente necesitamos descargar dos programas. El primero es NodeJS, no porque necesitemos desarrollar con Node, sino porque el compilador de TypeScript está desarrollado en NodeJS.
- Luego necesitarás el TSC (Command-line TypeScript Compiler), la herramienta que nos permite compilar un archivo TypeScript a Javascript nativo. Este software es el que está realizado con NodeJS y su instalación se realiza vía npm con el siguiente comando: 
- La herramienta TSC incluye además "watchers" que permiten vigilar cambios en los archivos TS, compilando su código a JS en el instante sin que tengamos que intervenir. Además es habitual que el compilador, se use en conjunto con otras herramientas como Gulp para mejorar aún más el flujo de desarrollo.
- Existe asimismo un archivo de configuración llamado "tsconfig.json" en el que podemos indicar todas las opciones que queramos para el compilador (por ejemplo el estándar EcmaScript al que deseamos compilar el código, el tipo de reporte de errores que se desea, las rutas donde colocar los archivos compilados, etc). 
- Una de las cosas que debemos de conseguir cuando vamos a programar con TypeScript es un editor que lo soporte. El motivo es que los editores son capaces de compilar el código TypeScript a la vez que se está escribiendo, informando de errores en el código en el instante de su creación, lo que ahorra mucho tiempo y facilita el flujo de desarrollo. 

# ts-node

- ts-node is an npm package which allows the user to run typescript files directly, without the need for precompilation using tsc. It also provides REPL.
- Puedes ejecutar TypeScript directamente en Node con el paquete ts-node. Este paquete se recomienda sólo para desarrollo. Para realizar el despliegue final en producción, usa siempre la versión JavaScript de tu proyecto.
- With TypeScript being a superset of JavaScript, using it means transpiling your *.ts files down to pure JavaScript before the V8 engine can understand them
-- but sometimes you just want to run your script and get results. This is where ts-node comes in. With ts-node we can skip the fuss and execute our TypScript scripts with ease.
https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node
- if we’re not so worried about TypeScript errors, we can pass in the -T or --transpileOnly flag. This flag tells ts-node to simply transpile down to JavaScript and to not worry about any TypeScript errors.
- While it’s not always adviseable to use this flag, because you lose out on what makes TypeScript pretty awesome, there are scenarios where it makes sense, like when you’re just trying to run somebody else’s script or if you’re confident that your editor + linter is catching everything and you’re being mindful enough to listen.
- Typescript REPL -> with ts-node you can also try typescript on the terminal

# tipado estático y dinámico

- El tipado estático nos obliga a definir desde el principio el tipo de una variable, ejemplos de lenguajes con tipado estatico son C, C++, Pascal, Java, Objetive-C, C#...
- El tipado dinamico nos da la
