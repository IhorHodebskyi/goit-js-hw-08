
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

const list = document.querySelector(".gallery");

const cardsMarkup = createImg(galleryItems);
list.insertAdjacentHTML("beforeend", cardsMarkup);

function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
         </li>
      `;
    })
    .join("");
}

  var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });


