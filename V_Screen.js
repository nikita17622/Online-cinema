
    // Находим все карточки фильмов
    const movieItems = document.querySelectorAll('.movie-item');
    
    // Функция для сохранения данных фильма и перехода на страницу
    function openMoviePage(movieElement) {
        // Собираем все данные фильма из data-атрибутов
        const movieData = {
            title: movieElement.getAttribute('data-title'),
            year: movieElement.getAttribute('data-year'),
            rating: movieElement.getAttribute('data-rating'),
            duration: movieElement.getAttribute('data-duration'),
            genre: movieElement.getAttribute('data-genre'),
            desc: movieElement.getAttribute('data-desc'),
            poster: movieElement.getAttribute('data-poster')
        };
        
        // Сохраняем в localStorage
        localStorage.setItem('selectedMovie', JSON.stringify(movieData));
        
        // Переходим на страницу фильма
        window.location.href = 'movie-detail.html';
    }
    
    // Вешаем событие клика на каждую карточку фильма
    movieItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            openMoviePage(this);
        });
        item.style.cursor = 'pointer';
    });
