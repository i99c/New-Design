document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');

            darkModeToggle.textContent = isDarkMode ? 'Light Mod' : 'Dark Mod';
        });

        // Sayfa yüklendiğinde kullanıcının tercih ettiği modda başlat ve buton metnini güncelle.
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = 'Light Mod';
        } else {
            darkModeToggle.textContent = 'Dark Mod';
        }
    }

    let currentIndex = 0;

    function showSlide(index) {
        const carousel = document.querySelector('.carousel');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide(currentIndex);
});

// Card Yapısı

document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.add-to-favorite');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('i');
            if (heartIcon.classList.contains('fa-regular')) {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid', 'fa-heart');
                button.innerHTML = '<i class="fas fa-heart"></i> Favorilere Eklendi';
            } else {
                heartIcon.classList.remove('fa-solid', 'fa-heart');
                heartIcon.classList.add('fa-regular', 'fa-heart');
                button.innerHTML = '<i class="far fa-heart"></i> Favorilere Ekle';
            }
        });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonRect = button.getBoundingClientRect();
            const numSparks = 10;

            for (let i = 0; i < numSparks; i++) {
                const spark = document.createElement('div');
                spark.classList.add('sparks');
                document.body.appendChild(spark);

                const angle = Math.random() * 2 * Math.PI;
                const radius = Math.random() * 30 + 10;

                const x = buttonRect.left + buttonRect.width / 2 + Math.cos(angle) * radius;
                const y = buttonRect.top + buttonRect.height / 2 + Math.sin(angle) * radius;

                spark.style.left = `${x}px`;
                spark.style.top = `${y}px`;

                spark.addEventListener('animationend', () => {
                    spark.remove();
                });
            }
        });
    });
});
