import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

// VERIFICAM DACA AM SELECTAT OK
console.log(listEl);

//PARCURGEREA OBIECTULUI GALERYITEMS SI CREARE ELEMENTELOR LISTEI SI ADAUGAM PROPRIETI DE CLASA ALT ETC
galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}"> 
  <img 
    class="gallery__image";
    src="${item.preview}" 
    alt="${item.description}"
   />
   </a>`;
  listEl.append(listItemEl);
});
