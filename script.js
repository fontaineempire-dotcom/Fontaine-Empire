const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position = 'absolute';
    nav.style.top = '68px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '22px 7%';
    nav.style.background = '#080808';
    nav.style.flexDirection = 'column';
    nav.style.gap = '18px';
  }
});
