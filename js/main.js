document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.side-bar__link');

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const subMenu = link.nextElementSibling;
            const arrow = link.querySelector('.side-bar__arrow');
            if (subMenu.classList.contains('side-bar__sub-menu')) {
                subMenu.classList.toggle('active');
                arrow.classList.toggle('active');
            }
        });
    });
});
