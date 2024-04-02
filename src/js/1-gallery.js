// Описаний в документації
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './img-array.js';

const galleryContainer = document.querySelector('.gallery');

images.forEach(({ preview, original, description }) => {
  galleryContainer.insertAdjacentHTML(
    'beforeend',
    `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
