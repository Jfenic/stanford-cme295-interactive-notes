(() => {
  'use strict';
  const catalog = Array.isArray(window.CME295_CLASES) ? window.CME295_CLASES : [];
  const cards = document.querySelector('#cards');
  const search = document.querySelector('#search');
  const published = catalog.filter(c => c.publicada);
  document.querySelector('#published-count').textContent = String(published.length);
  document.querySelector('#total-count').textContent = String(catalog.length);
  document.querySelector('#lab-count').textContent = String(published.filter(c => c.laboratorio).length);

  function makeCard(c) {
    const article = document.createElement('article');
    article.className = `lesson${c.publicada ? ' available' : ''}`;
    const top = document.createElement('div'); top.className = 'top';
    const number = document.createElement('span'); number.className = 'number';
    number.textContent = `CLASE ${String(c.numero).padStart(2,'0')}`;
    const state = document.createElement('span');
    state.className = c.publicada ? 'pill' : 'pill pending';
    state.textContent = c.publicada ? 'Disponible' : 'Próximamente';
    top.append(number,state);
    const heading = document.createElement('h3'); heading.textContent = c.titulo;
    const desc = document.createElement('p'); desc.textContent = c.descripcion;
    article.append(top,heading,desc);
    if (c.temas?.length) {
      const tags=document.createElement('div'); tags.className='tags';
      c.temas.forEach(t=>{const tag=document.createElement('span');tag.textContent=t;tags.appendChild(tag)});
      article.appendChild(tags);
    }
    if (c.publicada && c.archivo) {
      const link = document.createElement('a');link.className='open-lesson';
      link.href = c.archivo;link.textContent='Abrir apuntes →';
      link.setAttribute('aria-label',`Abrir apuntes de la clase ${c.numero}: ${c.titulo}`);
      article.appendChild(link);
    }
    return article;
  }
  function render() {
    const query=search.value.trim().toLocaleLowerCase('es');
    const shown=catalog.filter(c=>[c.numero,c.titulo,c.descripcion,...(c.temas||[])].join(' ').toLocaleLowerCase('es').includes(query));
    cards.replaceChildren(...shown.map(makeCard));
    document.querySelector('#empty').hidden = shown.length !== 0;
  }
  search.addEventListener('input',render);
  render();
})();
