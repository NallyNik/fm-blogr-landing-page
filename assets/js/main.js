const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
    const isOpen = menu.classList.contains('menu-open');

    if (isOpen) menu.classList.remove('menu-open');
    else menu.classList.add('menu-open');
})
