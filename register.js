    const registerForm = document.getElementById('registerForm');
        const successMessage = document.getElementById('successMessage');
        const form = document.getElementById('registrationForm');

        // Обработка отправки формы
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Останавливаем перезагрузку страницы
            
            // Получаем значения полей
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Простая проверка
            if (email && username && password && password === confirmPassword) {
                // Скрываем форму, показываем сообщение об успехе
                registerForm.style.display = 'none';
                successMessage.style.display = 'block';
            } else {
                alert('Пожалуйста, заполните все поля правильно. Пароли должны совпадать!');
            }
        });