# Estilo y formato de los apuntes

Este documento define el estándar para crear y revisar todas las clases. La clase 1 sirve de referencia visual; esta especificación y la plantilla común guían las nuevas clases. Las clases existentes se adaptarán progresivamente, sin dar por hecho que ya cumplen todo el estándar.

## Identidad visual

- Tema oscuro fijo, coherente con la portada. No introducir temas nuevos por clase.
- Fondo `#090e1b`, paneles `#111a2c`, bordes `#2a3a56`, texto principal `#edf2ff`, secundario `#a2b3cf`.
- Azul `#86b8ff` para navegación, teoría y acciones; verde `#7ce0c8` para respuestas correctas; ámbar `#f3c77b` para pistas y límites. Rojo reservado para errores o advertencias concretas.
- Tipografía Inter cuando esté disponible, con fuentes de sistema como respaldo. Monoespaciada solo para código, dimensiones y datos; no para párrafos completos.
- Texto de teoría de 16 px como mínimo, interlineado 1.7 y ancho de lectura máximo de 78 caracteres. Evitar teoría en columnas estrechas.
- Contenedor máximo de 1100 px; margen lateral mínimo de 18 px. Paneles con radio de 16 px y 20–28 px de espacio interior. Tablas y ecuaciones anchas tienen desplazamiento interno, nunca desbordan la página.
- Un único acento visual por componente. Evitar degradados decorativos, tarjetas con giro 3D y un color diferente para cada módulo.
- Utilizar `assets/lesson.css` para nuevas clases. No copiar un sistema de estilos completo distinto dentro de cada HTML.

## Navegación común

Cabecera: «← Índice», número de clase, selector «Español / English». Sin banderas como único identificador de idioma.

Debajo: título de la clase, resumen breve, fuente y tramo cubierto, estado de revisión y aviso de independencia. No usar «completo», «exacto» o «verificado» sin evidencia suficiente.

Mismo orden de apartados en todas las clases:

1. **Antes de empezar / Before you start:** objetivos, prerrequisitos y ruta de estudio.
2. **Teoría / Theory:** conceptos numerados y ejemplos desarrollados.
3. **Práctica / Practice:** laboratorios y ejercicios vinculados a la teoría.
4. **Comprueba lo aprendido / Check your understanding:** cuestionario de integración.
5. **Resumen y referencias / Summary and references:** conexiones, qué debe poder explicar el estudiante y fuentes.

Los apartados usan anclas estables `#inicio`, `#teoria`, `#practica`, `#cuestionario` y `#referencias`. Se prioriza navegación por anclas con contenido legible; no es obligatorio ocultarlo tras pestañas. Si una clase conserva pestañas, debe admitir enlaces directos, teclado y el mismo orden de apartados.

## Formato de teoría

Cada concepto debe cubrir, cuando corresponda:

- **Idea principal:** qué es y qué problema resuelve.
- **Explicación:** intuición seguida del desarrollo técnico, definiendo términos al aparecer.
- **Ejemplo paso a paso:** entradas, operaciones intermedias, resultado e interpretación.
- **Fórmula y dimensiones:** significado de símbolos, unidades y supuestos; conservar una convención matricial coherente.
- **Error frecuente:** una confusión concreta y cómo evitarla.
- **Comprueba:** una pregunta breve con respuesta razonada desplegable.

Estos elementos son un criterio de contenido, no una obligación de llenar seis tarjetas repetitivas. Usar párrafos conectados y subtítulos solo cuando ayuden a leer. Evitar encabezados grandilocuentes o siglas sin explicación.

La profundidad se mide por si el lector puede reconstruir el ejemplo, no por el número de palabras. Una clase avanzada debe enlazar o resumir los prerrequisitos de la anterior.

## Formato de práctica

Cada laboratorio utiliza el mismo orden:

1. Objetivo y enlace al concepto correspondiente.
2. Predicción: qué cree el estudiante que ocurrirá.
3. Controles con etiquetas, valores actuales y botón de restablecer.
4. Resultado e interpretación.
5. Aviso visible: **Calculado / Computed**, **Ilustrativo / Illustrative**, **Limitaciones / Limitations**.
6. Pregunta de comprensión con feedback explicado.

Separar un ejemplo resuelto, un ejercicio guiado y uno independiente cuando aporten aprendizaje. No añadir un simulador por obligación si un ejemplo pequeño explica mejor el concepto.

## Cuestionarios

- Entre 2 y 4 preguntas por concepto cuando sean necesarias; una comprobación breve puede bastar en conceptos pequeños. Cuestionario final de 5–10 preguntas que conecten ideas.
- Alternativas plausibles, una respuesta correcta salvo aviso explícito, sin preguntas trampa.
- Combinar intuición, cálculo y «¿qué cambia si…?». No limitarse a memorizar nombres.
- Mostrar solución después de responder; explicar el resultado y las confusiones relevantes.
- Permitir reintentar cada pregunta. No obligar a borrar todas las respuestas para corregir una.
- Conservar respuestas al cambiar idioma; feedback accesible y anunciado con `aria-live`.
- La puntuación es secundaria: no premiar velocidad ni introducir mensajes que desanimen.

## Español e inglés

Un selector común muestra un idioma cada vez. No añadir un tercer modo de lectura paralela sin una necesidad acordada.

Traducir también navegación, ayudas, resultados dinámicos, etiquetas, errores y preguntas. El selector debe actualizar `html.lang`. Usar `lang` en fragmentos de otro idioma. No reiniciar controles o respuestas al cambiar de idioma.

Utilizar español claro: «1,4 billones (1,4 × 10¹²)», no traducir literalmente *trillion*. Definir la primera aparición de términos ingleses útiles; después usar una denominación consistente.

## Fórmulas y rigor

- Usar KaTeX con un renderizador común; comprobar las fórmulas iniciales y las generadas tras interacciones. No dejar delimitadores LaTeX visibles.
- Mostrar las hipótesis junto a la afirmación, y distinguir arquitectura original, variantes y simplificaciones.
- Evitar garantías universales de estabilidad, precisión, interpretación o extrapolación.
- Las referencias y marcas de tiempo deben verificarse o identificarse como pendientes.
- Cada ejemplo es elaboración independiente salvo atribución explícita. No inventar palabras de los docentes.

## Revisión antes de publicar

Comprobar equivalencia ES/EN, lectura desde cero, operaciones, respuestas y fuentes. Probar teclado, selector de idioma, reinicio, feedback, fórmulas y pantalla móvil. Informar qué se probó y qué no; un HTML con sintaxis válida no equivale a una prueba del navegador.

Utilizar `plantillas/plantilla-clase.html` como punto de partida. No publicar sus campos de ejemplo ni activar una clase en el catálogo hasta completar y revisar el contenido.
