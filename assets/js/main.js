const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const menuItem = document.querySelectorAll('.menu-item');

//menu hamburguer mobile
btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
        menu.classList.remove('open');
        btn.style.background = 'url("assets/images/icon-hamburger.svg") no-repeat';
    } else {
        menu.classList.add('open');
        btn.style.background = 'url("assets/images/icon-close.svg") no-repeat';
    }
})

//submenu mobile, menu desktop
menuItem.forEach(menu => {
    menu.addEventListener('click', () => {
        menuItem.forEach(m => {
        if (m !== menu) {
          m.nextElementSibling.classList.remove('open'); //content
          m.classList.remove('open'); //arrow transform
        }
      });
      menu.nextElementSibling.classList.toggle('open');
      menu.classList.toggle('open');
    });
  });