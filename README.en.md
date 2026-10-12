# Stanford CME295 · Interactive study notes in Spanish

[Español](README.md) | **English**

I am creating these notes as I study **Stanford CME295: Transformers & Large Language Models**, to make AI concepts easier to learn and share what I am understanding. The project combines explanations, equations, and simulations that let you explore the topics at your own pace.

This is a work in progress: use it to review the course and contribute corrections, examples, or improvements to the learning experience.

> Independent, unofficial material created with AI assistance. It may contain errors and is not affiliated with or endorsed by Stanford University or the course instructors, Afshine Amidi and Shervin Amidi.

**Repository documentation is available in Spanish and English. Lecture 1 includes a Spanish/English selector for its notes and simulations. The homepage and web guide are in Spanish.**

## Start learning

Visit the [study notes website](https://Jfenic.github.io/stanford-cme295-interactive-notes/) or explore the [lecture files](clases/). If the website is not available yet, download the repository and open `index.html` in your browser.

1. Start with **lecture 1: from RNNs to self-attention and Transformers**.
2. Read the explanations and try the simulations to build your intuition.
3. Check equations and details against the original course material.
4. If something is unclear or you find an error, [open an issue](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues).

## Available content

| Content | Status |
| --- | --- |
| Lecture 1: tokenization, embeddings, RNN/LSTM, QKV attention, positions, and Transformer architecture | Available, with seven educational labs |
| Lectures 2–10 | Reserved entries in the index; no notes yet |
| Homepage with lecture and topic search | Available |
| Template for new lecture notes | Available |

The simulations illustrate concepts using simplifications and example values; they do not run a trained language model. Content will be expanded and reviewed as my studies progress.

## Help improve the project

You do not need programming skills to contribute. Point out an unclear explanation, correct an equation, suggest an example, or report a broken link. Improvements to accessibility, navigation, and simulations are also welcome.

- **Report an error or suggest an idea:** open an [issue](https://github.com/Jfenic/stanford-cme295-interactive-notes/issues) and identify the lecture, section, and proposed change.
- **Submit an improvement:** read the [contribution guide](CONTRIBUTING.en.md) and open a pull request with your changes.
- **Understand the scope:** read the [project information](INFORMACION.en.md) and [credits and limitations](CREDITOS.en.md).

## Project structure

```text
index.html                      Homepage and lecture index
clases/                         Notes and simulations for each lecture
assets/                         Homepage styles and behavior
data/clases.js                  Lecture catalog and publication status
plantillas/plantilla-clase.html  Template for new notes
guia.html                       Web guide for adding lectures (Spanish)
CONTRIBUTING.md / .en.md         How to propose and check improvements
INFORMACION.md / .en.md          Purpose, scope, and priorities
CREDITOS.md / .en.md             Attribution, sources, and limitations
```

The website uses HTML, CSS, and JavaScript with no build step. You can open `index.html` directly; lecture 1 needs an Internet connection to load styles, fonts, and equation rendering from external services.

## Credits

These notes are inspired by **Stanford CME295**, taught by **Afshine Amidi and Shervin Amidi**. The explanations in this repository are independently written and are not an official transcript.

The repository does not currently include a license. See [CREDITOS.en.md](CREDITOS.en.md) for attribution and material limitations.
