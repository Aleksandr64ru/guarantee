// Функция для переключения вкладок
function showTab(event, tabName) {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    // Убираем активность у всех кнопок
    buttons.forEach(button => button.classList.remove('active'));
    // Скрываем все вкладки
    contents.forEach(content => content.classList.remove('active'));

    // Добавляем активность на нажатую кнопку
    event.currentTarget.classList.add('active');
    // Показываем выбранный контент
    document.getElementById(tabName).classList.add('active');
}
