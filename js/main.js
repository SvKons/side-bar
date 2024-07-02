document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.side-bar__link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const subMenu = this.nextElementSibling;
            const arrow = this.querySelector('.side-bar__arrow');
            if (subMenu.classList.contains('side-bar__sub-menu')) {
                subMenu.classList.toggle('active');
                arrow.classList.toggle('active');
            }
        });
    });
});
