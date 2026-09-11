const cards=[...document.querySelectorAll('.card')], input=document.querySelector('#search'), empty=document.querySelector('#empty');

let active='all';

function render(){
  const q=input.value.toLowerCase().trim();
  let shown=0;

  cards.forEach(c=>{
    const type=c.dataset.type;
    const okType=active==='all'||type.includes(active);
    const okText=c.dataset.search.includes(q);

    c.style.display=okType&&okText?'flex':'none';

    if(okType&&okText) shown++;
  });
}

document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  active=b.dataset.filter;
  render();
}));

input.addEventListener('input',render);

/* Vraies pages de début des 31 projets dans le PDF */
const pages = [
  5, 7, 9, 10, 12, 14, 16, 18, 20, 22,
  24, 26, 27, 28, 30, 32, 34, 36, 38, 39,
  41, 42, 44, 46, 48, 50, 51, 52, 54, 55, 57
];

document.querySelectorAll('.cardlink').forEach((link, index)=>{
  if(pages[index]){
    link.href = `lecteur.html?page=${pages[index]}`;
    link.target = "_blank";
  }
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
  });
});
