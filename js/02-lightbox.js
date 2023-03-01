// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли:
//    simple-lightbox.min.js і simple-lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox -
//    насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу
//    і з'являється через 250 мілісекунд після відкриття зображення.

// ------------------------------------------------------------------------

// Імпорт вже існуючої галереї

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

// Створення бібіліотеки зображень і виведення на сайт
const imagesContainer = document.querySelector('.gallery');

const imgElements = ({ preview, original, description }) => {
  return `  <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            title="${description}"
            alt="${description}"/>
            </a>`;
};

const addImg = galleryItems.map(imgElements).join('');
imagesContainer.insertAdjacentHTML('afterbegin', addImg);

// Додаємо дію при кліку

imagesContainer.addEventListener('click', imgClick);

function imgClick(event) {
  const imageSelected = event.target.getAttribute('data-source');

  // Відміна поведінки за замовчуванням (відміна завантаження файлу)
  event.preventDefault();

  // Перевірка, що клік на зображенні
  if (!imageSelected) {
    return;
  }
}

// Підключення SimpleLightbox (модальне вікно)
new SimpleLightbox('.gallery a', { captionDelay: 250, showCounter: false });
