import { galleryItems } from "./gallery-items.js";
// Change code below this line

// VERIFICAM DACA A FOST IMPORTATA OK GALERIA
console.log("galleryItems:", galleryItems);

const listEl = document.querySelector(".gallery");

// VERIFICAM DACA AM SELECTAT OK GALERIA
console.log("listEl:", listEl);

//PARCURGEREA OBIECTULUI GALERYITEMS SI CREARE ELEMENTELOR LISTEI SI ADAUGAM PROPRIETI DE CLASA ALT ETC
galleryItems.forEach((item, index) => {
  // ADAUGAM SI UN INDEX PENTRU A NE FOLOSI DE EL MAI TARZIU
  console.log(item); // VERIFICAM CA ITEM ESTE INITIALIZAT CU VALORILE DIN GALERIE
  console.log(index); // VERIFICAM CA INDEX ESTE INITIALIZAT
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"
   />
   </a>`;
  // ADAUGAM UN ATRIBUT PERSONALIZAT DATA-INDEX PENTRU A TINE EVIDENTA INDEXULUI IMAGINII
  listItemEl.setAttribute("data-index", index);
  console.log(listItemEl); // VERIFICAM DACA SI-A LUAT DATA-INDEX IN FUNCTIE DE INDEX
  listEl.append(listItemEl); // CREAM LI-URI IN CADRUL GALERIEI UL CU PROPRIETATILE SETATE MAI SUS
});

// CREAREA SI INITIALIZAREA SIMPLELIGHTBOX CU LISTA DE IMAGINI
const lightbox = new SimpleLightbox(".gallery a", {
  // ALTE OPTIUNI GEN CAPTION, TRANSITION, DELAY
  captionsData: "alt",
  captionDelay: 250,
});

// DESCHIDEM GALERIA LA CLICK PE ORICE POZA
listEl.addEventListener("click", (event) => {
  event.preventDefault(); // OPRIRE COMPORTAMENT DEFAULT
  if (event.target.classList.contains("gallery__image")) {
    const clickedImage = event.target;
    const imageIndex = clickedImage.closest(".gallery__item").getAttribute("data-index");
    lightbox.open(parseInt(imageIndex)); // DESCHIDE LIGHTBOX LA IMAGINEA SPECIFICATA
    console.log("Opened lightbox");
  }
});
