# Información del proyecto

**Español** | [English](INFORMACION.en.md)

## Propósito

Este proyecto nace de mis apuntes de estudio del curso Stanford CME295: Transformers & Large Language Models. El objetivo es facilitar el aprendizaje en español mediante explicaciones organizadas por clase, fórmulas y actividades interactivas, y mejorar el material con aportaciones de otras personas.

Está pensado para quienes siguen el curso o quieren repasar sus conceptos. Los apuntes acompañan el estudio: conviene consultar las fuentes originales para profundizar y resolver dudas.

La documentación está disponible en español e inglés. El contenido de las clases, las simulaciones y el sitio web están actualmente en español.

## Estado y alcance

Actualmente está disponible la primera clase, que recorre tokenización, embeddings, RNN/LSTM, autoatención, QKV, posiciones y arquitectura Transformer. Incluye cinco laboratorios pedagógicos.

El índice reserva posiciones para las clases 2–10. Son marcadores de contenido pendiente, no clases ya preparadas ni un compromiso de fechas de publicación.

Los apuntes se han elaborado con asistencia de IA y todavía no se han contrastado línea por línea con los vídeos originales. Se revisarán progresivamente; las correcciones justificadas ayudan a mejorar su precisión.

## Cómo interpretar las simulaciones

Las interacciones ayudan a visualizar relaciones entre conceptos. Algunos datos, como etiquetas de tokens, pesos de atención o gradientes, son valores de demostración. La simulación de BPE simplifica la tokenización y los laboratorios no ejecutan un LLM entrenado.

Al añadir una actividad, debe quedar claro qué calcula realmente y qué utiliza como ejemplo para explicar una idea.

## Prioridades de mejora

- Revisar conceptos, fórmulas y ejemplos de la primera clase con fuentes originales.
- Incorporar referencias concretas por clase y sección para facilitar la comprobación.
- Añadir nuevas clases conforme los apuntes estén preparados y revisados.
- Mejorar la accesibilidad, la lectura en móvil y el manejo de las simulaciones.
- Ampliar ejemplos y ejercicios que ayuden a entender los conceptos.

Estas prioridades orientan las contribuciones; no constituyen un calendario de entrega. Las propuestas y errores pueden consultarse o plantearse en las [incidencias del repositorio](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues).

## Organización técnica

El proyecto es un sitio estático en HTML, CSS y JavaScript. La portada genera las tarjetas desde `data/clases.js`; cada clase tiene su propio HTML en `clases/`. No necesita instalar dependencias ni compilar para consultarlo en local.

La clase 1 carga Tailwind, KaTeX y fuentes desde CDN, por lo que requiere conexión para mostrar todos sus estilos y ecuaciones. El archivo `.nojekyll` permite servir los archivos directamente en GitHub Pages.

## Participación y atribución

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para proponer correcciones o añadir contenido, y [CREDITOS.md](CREDITOS.md) para las atribuciones y limitaciones. El proyecto es independiente y no está afiliado ni avalado por Stanford University o por el equipo docente.
