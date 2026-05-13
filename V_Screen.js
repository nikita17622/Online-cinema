// Простая загрузка фильмов из XML
async function loadMovies() {
    try {
        const response = await fetch('movies.xml');
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        // Получаем все фильмы
        const allMovies = xmlDoc.querySelectorAll('movie');
        
        // Очищаем все контейнеры
        const containers = ['moviesContainer', 'moviesContainerComedy', 'moviesContainerDrama', 
                           'moviesContainerFantasy', 'moviesContainerHorror', 'seriesContainer'];
        containers.forEach(id => {
            const container = document.getElementById(id);
            if (container) container.innerHTML = '';
        });
        
        // Распределяем фильмы по контейнерам
        allMovies.forEach(movie => {
            const title = movie.querySelector('title').textContent;
            const poster = movie.querySelector('poster').textContent;
            const type = movie.querySelector('type').textContent;
            const category = movie.getAttribute('category');
            
            // Создаем карточку
            const card = document.createElement('div');
            card.className = 'movie-item';
            card.setAttribute('data-title', title);
            card.setAttribute('data-year', movie.querySelector('year').textContent);
            card.setAttribute('data-rating', movie.querySelector('rating').textContent);
            card.setAttribute('data-duration', movie.querySelector('duration').textContent);
            card.setAttribute('data-genre', movie.querySelector('genre').textContent);
            card.setAttribute('data-desc', movie.querySelector('desc').textContent);
            card.setAttribute('data-poster', poster);
            
            card.innerHTML = `<img src="${poster}" alt="${title}"><p>${title}</p>`;
            card.style.cursor = 'pointer';
            
            card.onclick = () => {
                localStorage.setItem('selectedMovie', JSON.stringify({
                    title: title,
                    year: movie.querySelector('year').textContent,
                    rating: movie.querySelector('rating').textContent,
                    duration: movie.querySelector('duration').textContent,
                    genre: movie.querySelector('genre').textContent,
                    desc: movie.querySelector('desc').textContent,
                    poster: poster
                }));
                window.location.href = 'movie-detail.html';
            };
            
            // Определяем в какой контейнер добавлять
            if (type === 'series') {
                document.getElementById('seriesContainer')?.appendChild(card);
            } else if (category === 'action') {
                document.getElementById('moviesContainer')?.appendChild(card);
            } else if (category === 'comedy') {
                document.getElementById('moviesContainerComedy')?.appendChild(card);
            } else if (category === 'drama') {
                document.getElementById('moviesContainerDrama')?.appendChild(card);
            } else if (category === 'fantasy') {
                document.getElementById('moviesContainerFantasy')?.appendChild(card);
            } else if (category === 'horror') {
                document.getElementById('moviesContainerHorror')?.appendChild(card);
            }
        });
        
    } catch (error) {
        console.error('Ошибка загрузки:', error);
    }
}

// Запускаем загрузку
document.addEventListener('DOMContentLoaded', loadMovies);
