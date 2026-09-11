const cards=[...document.querySelectorAll('.card')], input=document.querySelector('#search'), empty=document.querySelector('#empty');

let active='all';
function render(){const q=input.value.toLowerCase().trim();let shown=0;cards.forEach(c=>{const type=c.dataset.type;const okType=active==='all'||type.includes(active);const okText=c.dataset.search.includes(q);c.style.display=okType&&okText?'flex':'none';if(okType&&okText)shown++})}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.filter;render()}));
input.addEventListener('input',render);

document.querySelectorAll('.cardlink').forEach(link => {
  const href = link.getAttribute('href');
  const match = href.match(/(?:#page=|&page=)(\d+)/);

  if (match) {
    link.href = `lecteur.html?page=${match[1]}`;
    link.target = "_blank";
  }
});
