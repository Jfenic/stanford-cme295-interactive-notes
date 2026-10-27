# Stanford CME295 · Apuntes interactivos en español

**Español** | [English](README.en.md)

Estoy creando estos apuntes mientras estudio **Stanford CME295: Transformers & Large Language Models**, para facilitar el aprendizaje de los conceptos de IA y compartir lo que voy entendiendo. El proyecto combina explicaciones, fórmulas y simulaciones que permiten explorar los temas a tu ritmo.

Es un proyecto en construcción: puedes utilizarlo para repasar y contribuir con correcciones, ejemplos o mejoras en la experiencia de aprendizaje.

> Material independiente y no oficial, elaborado con asistencia de IA. Puede contener errores y no está afiliado ni avalado por Stanford University o por los docentes del curso, Afshine Amidi y Shervin Amidi.

La documentación del repositorio está disponible en español e inglés. La clase 1 incluye un selector español/inglés para los apuntes y las simulaciones. La portada y la guía web están en español.

## Empezar a aprender

Consulta el [sitio de apuntes](https://Jfenic.github.io/stanford-cme295-interactive-notes/) o explora los archivos de las [clases](clases/). Si el sitio todavía no está disponible, descarga el repositorio y abre `index.html` en tu navegador.

1. Empieza por la **clase 1: de RNN a la autoatención y los Transformers**.
2. Lee las explicaciones y prueba las simulaciones para reforzar tu intuición.
3. Contrasta las fórmulas y los detalles con el material original del curso.
4. Si algo no se entiende o encuentras un error, [abre una incidencia](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues).

## Qué hay disponible

| Contenido | Estado |
| --- | --- |
| Clase 1: tokenización, embeddings, RNN/LSTM, atención QKV, posiciones y arquitectura Transformer | Disponible, con siete laboratorios didácticos |
| Clase 2: LLMs, arquitecturas, escalado e inferencia | Disponible en español e inglés, con laboratorios y cuestionarios |
| Clase 3: entrenamiento de LLMs | Disponible en español e inglés, con simuladores y cuestionarios |
| Clases 4–10 | Entradas reservadas en el índice; todavía sin apuntes |
| Portada con buscador de clases y temas | Disponible |
| Plantilla para preparar nuevas clases | Disponible |

Las simulaciones ilustran conceptos con simplificaciones y valores de ejemplo; no ejecutan un modelo de lenguaje entrenado. El contenido se irá ampliando y revisando conforme avance el estudio.

## Ayuda a mejorar el proyecto

No necesitas saber programar para colaborar. Puedes señalar una explicación confusa, corregir una fórmula, proponer un ejemplo o informar de un enlace roto. También son bienvenidas las mejoras de accesibilidad, navegación y simulaciones.

- **Comunica un error o una propuesta:** abre una [incidencia](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues) e indica la clase, la sección y el cambio que propones.
- **Envía una mejora:** consulta la [guía de contribución](CONTRIBUTING.md) y abre una pull request con tus cambios.
- **Conoce el alcance:** lee la [información del proyecto](INFORMACION.md) y los [créditos y limitaciones](CREDITOS.md).

## Cómo está organizado

```text
index.html                      Portada e índice de clases
clases/                         Apuntes y simulaciones de cada clase
assets/                         Estilos y comportamiento de la portada
data/clases.js                  Catálogo y estado de las clases
plantillas/plantilla-clase.html  Base para añadir nuevos apuntes
guia.html                       Guía web para añadir clases
CONTRIBUTING.md                  Cómo proponer y comprobar mejoras
INFORMACION.md                   Propósito, alcance y prioridades
CREDITOS.md                      Atribución, fuentes y limitaciones
```

El sitio utiliza HTML, CSS y JavaScript, sin proceso de compilación. Puedes abrir `index.html` directamente; la clase 1 necesita conexión a Internet para cargar estilos, fuentes y el renderizado de ecuaciones desde servicios externos.

## Créditos

Estos apuntes se inspiran en el curso **Stanford CME295**, impartido por **Afshine Amidi y Shervin Amidi**. Las explicaciones de este repositorio son una elaboración independiente y no una transcripción oficial.

El repositorio todavía no incluye una licencia. Consulta [CREDITOS.md](CREDITOS.md) para conocer las atribuciones y las limitaciones del material.
