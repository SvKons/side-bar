document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const sideBar = document.querySelector('.side-bar');
    const sideBarTexts = document.querySelectorAll('.side-bar__text');
    const sideBarSubMenus = document.querySelectorAll('.side-bar__sub-menu');
    const sideBarSubTexts = document.querySelectorAll('.side-bar__sub-text');
    const toggleText = document.querySelector('.side-bar__toggle-text');
    const togglePadding = document.querySelector('.side-bar__wrap');
    const toggleIcons = document.querySelector('.side-bar__icons-list');
    const crmSubTexts = document.querySelectorAll('.side-bar__item:nth-child(2) .side-bar__sub-text');
    const stockSubTexts = document.querySelectorAll('.side-bar__item:nth-child(3) .side-bar__sub-text');
    const usersSubTexts = document.querySelectorAll('.side-bar__item:nth-child(14) .side-bar__sub-text');
    const tasksSubTexts = document.querySelectorAll('.side-bar__item:nth-child(15) .side-bar__sub-text');

    if (localStorage.getItem('toggleState') === 'true') {
        toggle.checked = true;
        sideBar.classList.add('collapsed');
        sideBarTexts.forEach(text => text.classList.add('hidden'));
        sideBarSubMenus.forEach(menu => menu.classList.add('collapsed'));
        sideBarSubTexts.forEach(text => text.classList.remove('visible'));
        toggleText.classList.add('hidden');
        togglePadding.classList.add('hidden');
        toggleIcons.classList.add('hidden');
    }

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            localStorage.setItem('toggleState', 'true');
            sideBar.classList.add('collapsed');
            sideBarTexts.forEach(text => text.classList.add('hidden'));
            sideBarSubMenus.forEach(menu => menu.classList.add('collapsed'));
            sideBarSubTexts.forEach(text => text.classList.remove('visible'));
            toggleText.classList.add('hidden');
            togglePadding.classList.add('hidden');
            toggleIcons.classList.add('hidden');
        } else {
            localStorage.setItem('toggleState', 'false');
            sideBar.classList.remove('collapsed');
            sideBarTexts.forEach(text => text.classList.remove('hidden'));
            sideBarSubMenus.forEach(menu => menu.classList.remove('collapsed'));
            sideBarSubTexts.forEach(text => text.classList.add('visible'));
            crmSubTexts.forEach(text => text.classList.add('visible'));
            stockSubTexts.forEach(text => text.classList.add('visible'));
            usersSubTexts.forEach(text => text.classList.add('visible'));
            tasksSubTexts.forEach(text => text.classList.add('visible'));
            toggleText.classList.remove('hidden');
            togglePadding.classList.remove('hidden');
            toggleIcons.classList.remove('hidden');
        }
    });
});
