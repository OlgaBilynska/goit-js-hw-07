import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);


// console.log(instance);
// instance.show();


const galleryContainer = document.querySelector('.gallery');
const imagesMarkup = makeGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onImageClick);

function makeGalleryMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
          `  ;
    }).join('');
};

function onImageClick(event) {
    const isImgEl = event.target.classList.contains('gallery__image');

    if (!isImgEl) {
        return;
    }

    const imgEl = event.target;
    const imgGallery = imgEl.closest('.gallery__item');

    console.log(imgGallery);
}




