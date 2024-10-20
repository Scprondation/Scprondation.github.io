const tabList = document.querySelector('.tab-list');
const tabItems = tabList.querySelectorAll('.tab');
const tabContent = document.querySelector('.tab-content');
const tabPanes = tabContent.querySelectorAll('.tab-pane');

tabList.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
        const clickedTab = event.target;
        const activeTab = tabList.querySelector('.tab.active');
        const activePane = tabContent.querySelector('.tab-pane.active');

        activeTab.classList.remove('active');
        activePane.classList.remove('active');

        clickedTab.classList.add('active');
        const paneId = clickedTab.getAttribute('id'); // Добавьте id к вкладкам
        const targetPane = document.getElementById(paneId); // Получите соответствующий блок контента
        targetPane.classList.add('active');
    }
});

// Добавить обработчик для переключателя тем
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    // Добавьте классы dark-theme к элементам вкладок, если нужно
    tabList.classList.toggle('dark-theme');
});
