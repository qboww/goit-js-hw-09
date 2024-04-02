import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './img-array.js';

const galleryContainer = document.querySelector('.gallery');

const galleryItemsHTML = images.map(
  ({ preview, original, description }) => `
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

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsHTML.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});
