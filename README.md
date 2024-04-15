# VK-trainee-task

## Тестовое задание

### Данные для входа в админ панель Django
**Логин:** root  
**Пароль:** root

### Запуск приложения

#### С помощью Docker
1. В корневой директории выполните команду:
    ```
    docker-compose up --build
    ```

#### Запуск вручную
1. **Запуск frontend части:**
    - Перейдите в папку `frontend`
    - Установите зависимости:
        ```
        yarn
        ```
    - Запустите сервер:
        ```
        yarn start
        ```

2. **Запуск backend части:**
    - Перейдите в папку `backend/app`
    - Установите зависимости:
        ```
        pip install -r requirements.txt
        ```
    - Выполните миграции:
        ```
        python3 manage.py makemigrations
        python3 manage.py migrate
        ```
    - Запустите сервер:
        ```
        python3 manage.py runserver
        ```

### Использованные библиотеки и архитектура
- **Библиотека стилей:** [PicoCSS](https://picocss.com/)
- **Архитектура frontend:** [FSD (Feature Sliced Design)](https://feature-sliced.design/)