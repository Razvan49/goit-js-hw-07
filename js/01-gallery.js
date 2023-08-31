import { galleryItems } from "./gallery-items.js";
// Change code below this line

// VERIFICAM DACA AM IMPORTAT OK GALERIA
console.log(galleryItems);

//SELECTAM LISTA NEORDONATA CU CLASA GALLERY
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
    data-source="${item.original}" 
    alt="${item.description}"
   />
   </a>`;
  listEl.append(listItemEl);
});

// ADAUGARE EVENIMENT DE CLICK PENTRU DESCHIDEREA IMAGINILOR INTR-UN LIGHTBOX
listEl.addEventListener("click", openImageInLightbox);

//ACEASTA FUNCTIE ESTE APELATA ATUNCI CAND SE FACE CLICK PE O IMAGINE DIN GALERIE
function openImageInLightbox(event) {
  console.dir(event);
  const clickedOn = event.target;

  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  //AICI SE CREEAZA O INSTANTA A FERESTREI MODALE
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${clickedOn.dataset.source}" />`,
    {
      // AICI ESTE O FUNCTIE DE INCHIDERE CARE ELIMINA ASCULTATORUL DE AVENIMENTE
      onClose: () => {
        document.removeEventListener("keydown", handleKeyPress);
      },
    }
  );
  // AFISAM FEREASTRA MODALA CU IMAGINEA
  instance.show();

  // AICI ESTE FUNCTIA CARE VA FI APELATA ATUNCI CAND SE APASA ESCAPE SI SE INCHIDE FEREASTRA MODALA
  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  document.addEventListener("keydown", handleKeyPress);

  // INCHIDE AUTOMAT FERESTRA MODALA DUPA 3 SECUNDE
  setTimeout(() => {
    instance.close();
  }, 3000);
}
