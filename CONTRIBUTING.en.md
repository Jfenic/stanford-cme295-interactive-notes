# How to contribute

[Español](CONTRIBUTING.md) | **English**

Thank you for helping make these notes clearer and more useful. You can contribute content corrections, examples, references, new lectures, or website improvements. Issues and pull request descriptions may be written in Spanish or English.

## Report an error or suggest an idea

Open an [issue](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues) and include:

- The affected lecture and section, or the page if it is a website problem.
- What is incorrect or difficult to understand.
- Your proposed correction or improvement and the reason for it.
- A source supporting academic corrections, such as a link to the original material and a relevant timestamp.

For interaction bugs, explain the steps to reproduce them, the expected result, and the browser used. A screenshot can help.

## Submit changes through a pull request

1. Fork the repository and create a branch for your improvement.
2. Edit the relevant files. Keep each proposal focused on a specific goal.
3. Open `index.html` and any modified lectures in your browser to check your changes.
4. Submit a pull request to `main`, describing the problem, solution, sources consulted, and checks performed.

For larger changes, such as reorganizing a lecture or replacing a simulation, open an issue first to agree on an approach.

## Add a lecture

1. Use `plantillas/plantilla-clase.html` as a starting point and save the file in `clases/`, for example `clases/clase-02.html`.
2. Write the explanations in Spanish and include your sources and any simulation limitations. For an English version of a lecture, open an issue first to agree on how to organize it.
3. Keep a link back to the homepage:

   ```html
   <a href="../index.html">← Volver al índice</a>
   ```

4. Update the corresponding entry in `data/clases.js`. Keep the existing field names:

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

5. Set `publicada: true` only when the file exists and you have reviewed its content. Set `laboratorio: true` if it includes interactive activities.
6. Include both the HTML file and the catalog change in the same pull request.

You can also consult the [web guide in Spanish](guia.html).

## Shared style

Follow [ESTILO.md (Spanish)](ESTILO.md) for visual identity, section order, theory, practice, and questions. The shared template uses `assets/lesson.css` and `assets/lesson.js`.

## Contribution guidelines

- Prioritize clarity and accuracy. Explain acronyms and distinguish intuition from formal claims.
- Check equations, concepts, dates, and references against original sources.
- If you use AI, review its output before submission and mention its use in the proposal description.
- Distinguish actual calculations from simplifications and demonstration values.
- Link to and credit your sources. Write your own explanations and avoid including other people's material without permission.
- Preserve mobile readability and keyboard access; give interactive controls clear labels.

## Improve the translations

Spanish documents use the `.md` extension; their English counterparts use `.en.md`. Keep the language links at the top of each document and link to other documents in the same language when available.

When changing shared information, update both versions so that scope, publication status, and limitations stay consistent. The lecture files and catalog field names retain their existing names.

## Check your changes

There is no build step. Open HTML files directly in your browser; lecture 1 requires a connection for external resources.

Before submitting a proposal, check what applies to your changes:

- Links open the correct pages and allow returning to the index.
- The catalog displays the lecture and search finds its topics.
- Equations render and interactions work.
- Content is readable on a narrow screen and controls work with a keyboard.
- No new errors appear in the browser console.

The repository does not currently include a license. Do not add a license for other people's material; consult the attribution and limitations in [CREDITOS.en.md](CREDITOS.en.md).
