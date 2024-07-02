const updateNotifications = (count, section) => {
    // Получаем элемент иконки уведомления или согласования для указанного раздела
    const iconElement = document.querySelector(`.side-bar__link img[alt="Иконка ${section}"]`);

    // Создаем элемент счетчика уведомлений или согласований, если он не существует
    let countElement = iconElement.nextElementSibling;
    if (!countElement || !countElement.classList.contains('notification-count')) {
        countElement = document.createElement('span');
        countElement.classList.add('notification-count');
        iconElement.parentNode.insertBefore(countElement, iconElement.nextSibling);
    }

    // Обновляем значение счетчика уведомлений или согласований
    countElement.textContent = count > 10 ? '10+' : count;

    // Показываем или скрываем счетчик в зависимости от значения count
    countElement.style.display = count > 0 ? 'block' : 'none';
};
