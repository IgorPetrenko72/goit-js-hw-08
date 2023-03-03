 import { galleryItems } from './gallery-items';
 import SimpleLightbox from "simplelightbox";
 import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const galleryMarkup = createGalleryCard(galleryItems);
const galleryPhotos = document.querySelector(".gallery");

galleryPhotos.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCard(galleryItems) {
return galleryItems.map(({ preview, original, description}) => {
  return `
<li>
<a class="gallery__item" href = "${original}">
<img
class="gallery__image"
src="${preview}"  
alt="${description}"
/>
</a>
</li>
`;
})
  .join('');
};

new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});