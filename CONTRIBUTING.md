# Cómo contribuir

**Español** | [English](CONTRIBUTING.en.md)

Gracias por ayudar a que estos apuntes sean más claros y útiles. Puedes colaborar con correcciones de contenido, ejemplos, referencias, nuevas clases o mejoras del sitio.

Puedes escribir las incidencias y las descripciones de las pull requests en español o inglés.

## Informar de un error o proponer una idea

Abre una [incidencia](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues) e incluye:

- La clase y la sección afectadas; si es un problema del sitio, indica la página.
- Qué resulta incorrecto o difícil de entender.
- La corrección o mejora que propones y por qué.
- Una fuente que permita comprobarla, cuando se trate de contenido académico; por ejemplo, un enlace al material original y la marca de tiempo relevante.

Para fallos de las interacciones, explica los pasos para reproducirlos, el resultado esperado y el navegador utilizado. Una captura puede ayudar.

## Enviar cambios mediante una pull request

1. Crea un fork del repositorio y una rama para tu mejora.
2. Modifica los archivos correspondientes. Procura que cada propuesta tenga un objetivo concreto.
3. Abre `index.html` y las clases que hayas modificado en tu navegador para comprobar los cambios.
4. Envía una pull request a `main` explicando el problema, la solución, las fuentes consultadas y las comprobaciones realizadas.

Para cambios amplios, como reorganizar una clase o sustituir una simulación, abre primero una incidencia para acordar el enfoque.

## Añadir una clase

1. Usa `plantillas/plantilla-clase.html` como base y guarda el archivo en `clases/`, por ejemplo `clases/clase-02.html`.
2. Escribe las explicaciones en español e incluye las fuentes consultadas y las limitaciones de cualquier simulación.
3. Mantén un enlace de regreso a la portada:

   ```html
   <a href="../index.html">← Volver al índice</a>
   ```

4. Actualiza la entrada correspondiente en `data/clases.js`:

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

5. Usa `publicada: true` solo cuando el archivo exista y hayas revisado el contenido. Activa `laboratorio: true` si incluye actividades interactivas.
6. Incluye tanto el HTML como el cambio del catálogo en la misma pull request.

También puedes consultar la [guía web](guia.html).

## Criterios para las aportaciones

- Prioriza la claridad y la precisión. Explica las siglas y distingue una intuición de una afirmación formal.
- Comprueba fórmulas, conceptos, fechas y referencias con fuentes originales.
- Si utilizas IA, revisa su resultado antes de enviarlo e indica su uso en la descripción de la propuesta.
- Distingue los cálculos reales de las simplificaciones y los valores de demostración.
- Incluye enlaces y atribución a las fuentes. Aporta explicaciones propias y evita incorporar materiales ajenos sin autorización.
- Mantén la lectura en móvil y el uso con teclado; añade etiquetas comprensibles a los controles interactivos.

## Mejorar las traducciones

Los documentos en español usan la extensión `.md` y sus versiones en inglés, `.en.md`. Mantén los enlaces de idioma al principio de cada documento y enlaza a otros documentos en el mismo idioma cuando estén disponibles.

Si cambias información compartida, actualiza ambas versiones para mantener coherentes el alcance, el estado de publicación y las limitaciones. Los nombres de los archivos de clases y los campos del catálogo se mantienen. Para traducir una clase al inglés, abre primero una incidencia para acordar cómo organizarla.

## Comprobar los cambios

No hay un proceso de compilación. Abre los archivos HTML directamente en el navegador; necesitas conexión para los recursos externos de la clase 1.

Antes de enviar una propuesta, verifica lo que corresponda a tus cambios:

- Los enlaces abren las páginas correctas y permiten volver al índice.
- El catálogo muestra la clase y el buscador encuentra sus temas.
- Las ecuaciones se renderizan y las interacciones funcionan.
- El contenido se lee en una pantalla estrecha y los controles funcionan con teclado.
- No aparecen errores nuevos en la consola del navegador.

El repositorio todavía no incluye una licencia. No añadas una licencia para materiales de otras personas; consulta las atribuciones y limitaciones en [CREDITOS.md](CREDITOS.md).
