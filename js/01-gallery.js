import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesHTML = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
   </a>
   </div>`;
});
gallery.insertAdjacentHTML("beforeend", imagesHTML.join(""));

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"/>
  `);
    instance.show();
  }
});
