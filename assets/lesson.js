// Common language selection and equation rendering; leaves exercise state intact.
function setLessonLanguage(lang){
  if(!['es','en'].includes(lang))return;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-language]').forEach(el=>{el.hidden=el.dataset.language!==lang;});
  document.querySelectorAll('[data-language-button]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.languageButton===lang)));
}
function renderLessonMath(target=document.body){
  if(window.renderMathInElement)window.renderMathInElement(target,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false},{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false});
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-language-button]').forEach(button=>button.addEventListener('click',()=>setLessonLanguage(button.dataset.languageButton)));
  setLessonLanguage(document.documentElement.lang);renderLessonMath();
});
