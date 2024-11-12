// Функция для переключения видимости меню
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links ul');
    navLinks.classList.toggle('active');  // Добавляем/удаляем класс для отображения меню
}

// Функция для закрытия меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navLinksContainer = document.querySelector('.nav-links ul');
        navLinksContainer.classList.remove('active'); // Убираем класс "active", чтобы скрыть меню
    });
});