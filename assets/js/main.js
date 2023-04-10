const btn = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const item = document.getElementsByClassName('menu-item'); 

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

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', () => {
        const content = item[i].nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
            item[i].classList.toggle('open');
        } else {
            content.style.display = 'block';
            item[i].classList.toggle('open');
        }
    })
}