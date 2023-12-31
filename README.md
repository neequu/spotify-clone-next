# [Music App (~ spotify clone ~)](https://spotify-clone-next-six.vercel.app/)

Мой pet-project и совместо первый проект на Next.js. О функционале и особенностях можно почитать [ниже](#технологии-стек)

## Lighthouse Report

На всех страницах сайта высокие показатели проиводительности и SEO.
[Проверить](https://pagespeed.web.dev/analysis/https-spotify-clone-next-six-vercel-app/k6jh8i46at?form_factor=desktop)

![image](https://github.com/neequu/spotify-clone-next/assets/69749247/43dc5cb6-9548-46f5-818a-e8f0dddfa4c2)

## Технологии (стек)

- [Next.js](https://nextjs.org/) 14 версия. Очень активно используются Server Actions и Route Handlers для создания бэкенда.

- [Typescript](https://www.typescriptlang.org) великий инструмент, позволяющий писать код и сразу видеть потенциальные ошибки.
  
- [Tailwind CSS](https://tailwindcss.com/) - CSS препроцессор + плагин prettier для автоматического распределения позиций классов. [Shadcn](https://ui.shadcn.com) для реиспользуемых компонентов.

- [Supabase](https://supabase.io/) PostgreSQL БД

- Деплой на [Vercel](https://vercel.com/)

## Особенности

- 🔒 **Аутентификация через GitHub:** вход в свою учетную запись при помощи GitHub, используя файлы cookie. Удаление файлов cookie при выходе из аккаунта. Есть защищенные роуты, доступ к которым есть только у авторизированного пользователя. Функционал приложения (лайки, загрузка песен) также доступен только авторизованным пользователям.

- 📤 **Загрузка песен в базу данных.** 

- 🔎 **Поиск песен:** Страница поиска музыки с формой, инпутом и загрузочными состояниями. 

- 🎶 **Музыкальный проигрыватель:** Кастомно стилизованный HTML5 audio тэг. Реализован функциоал воспроизведением музыки, паузы, пропуска и перехода к предыдущей песне, регулировки громкости и отключения звука (с сохраненим состояния при переключения песен).

- 📚 **Библиотека:** Загруженные пользователем треки будут отображатся в сайдбаре.

- 🖤 **Лайк:** Кликнув на кнопку лайка изменится состояние кнопки и будет отправлен запрос в базу данных на лайк песни.

- 🎵 **Страницы песен:** Нажав на название песни, откроется страница с текстом песни (через genius api) и дополнительной информацией о ней. Фон страницы динамичный - изменяется в зависимости от цветов обложки.

- 📱 **Адаптация к мобильным устройствам.** Дизайн полностью доступен для пользоваетелей с различных устройств и браузеров.

- ⏳ **Анимация и состояния загрузки.** Плавная анимация и состояния загрузки при переходе между страницами и при загрузке данных.

- 🔔 **Оповещения** При определенных действиях (загрузке песни, лайке песни) будет высвечено соответствующее оповещение с результатом этого действия.

## Скриншоты
### [Домашняя страница](https://spotify-clone-next-six.vercel.app)
![Home page](https://github.com/neequu/spotify-clone-next/assets/69749247/150a3365-e823-4064-a6c6-faf0a9bd7d86)
### [Страница поиска](https://spotify-clone-next-six.vercel.app/search)
![Search page](https://github.com/neequu/spotify-clone-next/assets/69749247/93050f9f-8c58-4371-99c8-cf03aee0dd5f)
### [Страница песни](https://spotify-clone-next-six.vercel.app/songs/1)
![Song page](https://github.com/neequu/spotify-clone-next/assets/69749247/05db822a-2bf6-46d7-b21b-6cbc7787b2fc)
### [Страница лайкнутых песен](https://spotify-clone-next-six.vercel.app/liked-songs)
![Liked page](https://github.com/neequu/spotify-clone-next/assets/69749247/ea22f697-155e-4a5d-95fd-65d99d1b7494)
### Форма добавления песни (язык в файл-инпуте зависит от языка браузера 💢)
![Upload](https://github.com/neequu/spotify-clone-next/assets/69749247/45e377e1-76f0-4784-ad05-99cbd99886d9)
### Вид с мобильного устройства
<div align="center">
  
  ![Mobile](https://github.com/neequu/spotify-clone-next/assets/69749247/3dd4f0c1-4594-4bbe-85bb-01dbab0ab1ec)
</div>

Ссылка на сайт: https://spotify-clone-next-six.vercel.app

