// script.js
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

    document.getElementById('dark-mode-toggle').textContent = isDarkMode ? 'Light Mod' : 'Dark Mod';
});

// Sayfa yüklendiğinde kullanıcının tercih ettiği modda başlat ve buton metnini güncelle.
window.addEventListener('load', () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').textContent = 'Light Mod';
    } else {
        document.getElementById('dark-mode-toggle').textContent = 'Dark Mod';
    }
});
