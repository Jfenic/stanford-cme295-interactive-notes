# Project information

[Español](INFORMACION.md) | **English**

## Purpose

This project grew out of my study notes for Stanford CME295: Transformers & Large Language Models. Its goal is to make learning easier in Spanish through explanations organized by lecture, equations, and interactive activities, and to improve the material with contributions from others.

It is intended for people following the course or reviewing its concepts. The notes support your studies; consult the original sources to explore topics further and resolve questions.

Repository documentation is available in Spanish and English. Lecture 1 provides notes and simulations in Spanish and English through a language selector. The homepage and web guide are in Spanish.

## Status and scope

The first lecture is currently available, covering tokenization, embeddings, RNN/LSTM, self-attention, QKV, positions, and Transformer architecture. It includes seven educational labs.

The index reserves entries for lectures 2–10. These are placeholders for pending content, not completed lectures or a commitment to publication dates.

The notes were created with AI assistance and have not yet been checked line by line against the original videos. They will be reviewed gradually; well-supported corrections help improve their accuracy.

## Understanding the simulations

The interactions help visualize relationships between concepts. Some data, such as token labels, attention weights, or gradients, are demonstration values. The BPE simulation simplifies tokenization, and the labs do not run a trained LLM.

When adding an activity, clearly explain what it actually computes and what it uses as an example to illustrate an idea.

## Improvement priorities

- Review concepts, equations, and examples in the first lecture against original sources.
- Add specific references for each lecture and section to make verification easier.
- Add new lectures as notes are prepared and reviewed.
- Improve accessibility, mobile reading, and simulation controls.
- Expand examples and exercises that help explain the concepts.

These priorities guide contributions; they are not a delivery schedule. Browse or submit suggestions and errors in the [repository issues](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues).

## Technical structure

The project is a static HTML, CSS, and JavaScript website. The homepage generates cards from `data/clases.js`; each lecture has its own HTML file in `clases/`. No dependency installation or build step is needed to view it locally.

Lecture 1 loads Tailwind, KaTeX, and fonts from CDNs, so an Internet connection is needed to display all styles and equations. The `.nojekyll` file allows files to be served directly on GitHub Pages.

## Participation and attribution

Read [CONTRIBUTING.en.md](CONTRIBUTING.en.md) to propose corrections or add content, and [CREDITOS.en.md](CREDITOS.en.md) for attribution and limitations. The project is independent and is not affiliated with or endorsed by Stanford University or the teaching team.
