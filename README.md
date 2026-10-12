# Stanford CME295 · Transformers & LLMs — Apuntes interactivos (no oficiales)

Sitio estático en español para consultar apuntes propios y simulaciones didácticas basadas en el curso **Stanford CME295: Transformers & Large Language Models**, impartido por **Afshine Amidi y Shervin Amidi**. Proyecto comunitario **no afiliado a Stanford University**.

> Los apuntes se han elaborado con asistencia de IA y pueden contener errores. La primera clase incluye simulaciones pedagógicas (no se ejecuta un modelo real). No se presenta como transcripción oficial ni como material avalado por los profesores.

## Publicar en GitHub Pages (sin instalar nada)

1. **Descomprime el ZIP** en tu ordenador.
2. Crea un repositorio público de GitHub, por ejemplo `stanford-cme295-interactive-notes`.
3. En la página del repositorio, pulsa **Add file → Upload files** y sube **todos los archivos y carpetas descomprimidos**, no el ZIP sin abrir. Es esencial que `index.html` quede en la raíz.
4. Haz el commit de los archivos.
5. En **Settings → Pages → Build and deployment**, selecciona **Source: Deploy from a branch**, **Branch: main** y la carpeta **/(root)**. Guarda.
6. Cuando finalice la publicación, la URL tendrá un formato similar a:
   `https://TU-USUARIO.github.io/stanford-cme295-interactive-notes/`

Si en tu repositorio la rama se llama distinto de `main`, selecciona su nombre real. GitHub Pages publica de forma automática las actualizaciones que subas a esa rama.

## Añadir una nueva clase (ejemplo: clase 2)

1. Coloca el nuevo archivo HTML en **`clases/clase-02.html`**. Puedes partir de `plantillas/plantilla-clase.html` o copiar el HTML completo generado con tus apuntes.
2. Procura que el nuevo HTML incluya este enlace para regresar a la portada:
   ```html
   <a href="../index.html">← Volver al índice</a>
   ```
3. Abre **`data/clases.js`**, busca el objeto cuyo `numero` sea `2` y edítalo:

   ```js
   {
     numero: 2,
     titulo: 'Título de la segunda clase',
     descripcion: 'Lo que aprenderás en esta clase.',
     temas: ['Tema A', 'Tema B'],
     archivo: 'clases/clase-02.html',
     publicada: true,
     laboratorio: false
   },
   ```

4. Sube el nuevo HTML y el `data/clases.js` modificado a GitHub. La tarjeta aparecerá como **Disponible** en el índice sin tener que editar `index.html`.
5. Para más clases, repite el mismo proceso, utilizando `clase-03.html`, `clase-04.html`, etc. Si el curso tiene un número diferente de clases, puedes añadir o borrar filas del catálogo.

**Importante:** no pongas `publicada: true` hasta que el archivo HTML exista y se haya revisado. El enlace apunta directamente a ese archivo; un nombre incorrecto producirá un error 404.

## Estructura

```text
index.html                  ← portada y buscador de clases
guia.html                   ← guía web para añadir clases
.nojekyll                   ← GitHub Pages sirve los archivos tal cual
assets/
  site.css                  ← estilos de la portada
  site.js                   ← buscador y tarjetas generadas desde el catálogo
data/
  clases.js                 ← único catálogo editable para nuevas clases
clases/
  clase-01.html             ← tus apuntes interactivos de la clase 1
plantillas/
  plantilla-clase.html      ← plantilla opcional para futuros apuntes
README.md                   ← este documento
CREDITOS.md                 ← atribución y advertencias
```

## Vista previa en local

Puedes abrir `index.html` directamente en el navegador; el catálogo funciona sin servidor. El HTML de la clase 1 carga Tailwind, KaTeX y fuentes desde CDN: para conservar su diseño y las ecuaciones necesitas una conexión a Internet. No requiere instalar Node, Python ni generar una compilación para publicar en GitHub Pages.

## Precauciones editoriales

- Verifica fórmulas, fechas, atribuciones, marcas de tiempo y conceptos antes de publicar cada clase.
- En los laboratorios de la clase 1, el «BPE» simplifica la tokenización y los pesos de atención, ID y gradientes se ilustran con valores de demostración.
- Enlaza a los vídeos y recursos oficiales. Evita subir diapositivas o transcripciones completas protegidas por derechos de autor sin autorización.
- Puedes compartir el enlace de GitHub Pages y recibir correcciones mediante *issues* o *pull requests*.
- Este paquete no añade una licencia de redistribución para tus apuntes: decide qué licencia quieres aplicar después de revisar la titularidad y permisos de las fuentes usadas.

## Cambios realizados sobre el HTML original

Se mantiene el contenido de la primera clase y sus cinco laboratorios. Se han añadido el enlace de regreso a la portada, advertencias sobre simulaciones, aclaraciones de precisión y un aviso de independencia, además de configurar KaTeX y hacer segura la inserción de tokens como `<BOS>` y `<EOS>`. **No se ha contrastado línea por línea con los vídeos originales** ni se garantiza que todas las explicaciones sean exactas.
