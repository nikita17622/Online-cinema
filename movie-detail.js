
    // Получаем данные фильма из localStorage
    const movieData = JSON.parse(localStorage.getItem('selectedMovie'));
    
    if (movieData) {
        document.getElementById('title').textContent = movieData.title;
        document.getElementById('year').textContent = movieData.year;
        document.getElementById('rating').textContent = movieData.rating;
        document.getElementById('duration').textContent = movieData.duration;
        document.getElementById('genre').textContent = movieData.genre;
        document.getElementById('desc').textContent = movieData.desc;
        document.getElementById('poster').src = movieData.poster;
        
        // Меняем заголовок страницы
        document.title = movieData.title + " - Velvet Screen";
    } else {
        // Если нет данных, показываем заглушку
        document.getElementById('title').textContent = 'Фильм не найден';
        document.getElementById('poster').src = 'image/kino1.jpg';
    }
