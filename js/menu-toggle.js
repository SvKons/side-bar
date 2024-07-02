const toggleButton = document.querySelector('.side-bar__button');
const sideBar = document.querySelector('.side-bar');
const sideBarTexts = document.querySelectorAll('.side-bar__text');
const sideBarIconsList = document.querySelector('.side-bar__icons-list');

if (sideBar.classList.contains('collapsed')) {
    sideBarTexts.forEach(text => text.classList.add('hidden'));
    sideBarIconsList.classList.remove('hidden');
}

toggleButton.addEventListener('click', function () {
    sideBar.classList.toggle('collapsed');
    sideBarTexts.forEach(text => text.classList.toggle('hidden'));
    sideBarIconsList.classList.toggle('hidden');
});
