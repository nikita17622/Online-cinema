// Получаем данные фильма
const movie = JSON.parse(localStorage.getItem('selectedMovie'));

if (movie) {
    document.getElementById('title').textContent = movie.title;
    document.getElementById('year').textContent = movie.year;
    document.getElementById('rating').textContent = movie.rating;
    document.getElementById('duration').textContent = movie.duration;
    document.getElementById('genre').textContent = movie.genre;
    document.getElementById('desc').textContent = movie.desc;
    document.getElementById('poster').src = movie.poster;
    document.title = movie.title + ' - Velvet Screen';
} else {
    document.getElementById('title').textContent = 'Фильм не найден';
}
