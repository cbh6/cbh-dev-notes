# SEMANTIC UI CSS METEOR

Hay un paquete semantic-ui-css para meteor en Atmosphere, pero está desactualizado por lo que he descartado su uso.
Se puede solucionar utilizando el CDN de Semantic Ui incluyéndolo en los headers de HTML pero cuando se inicia la aplicación hay un breve instante en el que aparece la web sin estilos (mientras se descarga dicho css).
Finalmente la solución ha sido hacer que mediante css los iconos de banderas se descarguen del CDN y mientras, semantic-ui-css viene de npm y se incluye en el bundle.