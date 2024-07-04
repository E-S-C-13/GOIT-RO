Tema 7



Sarcina 1



HTML conține o listă de categorii ul#categories.



<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>



Scrie un script care:



Numără și afișează în consolă numărul de categorii din ul#categories, adică elementele li.item.
Pentru fiecare element li.item din lista ul#categories, să găsească și să afișeze în consolă textul titlului elementului (tag-ul <h2>) și numărul de elemente din categoria respectivă (toate <li>, imbricate în ea).
Astfel, în consolă vor fi afișate următoarele mesaje:


Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5



Sarcina 2



HTML conține o listă goală ul#ingredients.



<ul id="ingredients"></ul>



JavaScript conține un array de șiruri de caractere.



const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



Scrie un script care, pentru fiecare element din array-ul ingredients:



Să creeze un element <li> separat. Nu uita să folosești metoda document.createElement().
Va adăuga numele ingredientului ca și conținut text.
Va adăuga clasa item la element.
Va insera toate <li> într-o singură operație în lista ul#ingredients.


Sarcina 3



Scrie un script care să creeze o galerie de imagini dintr-un set de date. Codul HTML conține lista ul.gallery.



<ul class="gallery"></ul>



Folosește array-ul de obiecte images pentru a crea elemente <img>, imbricate în <li>. Utilizează șiruri de șabloane și metoda insertAdjacentHTML() pentru a crea tag-uri.



Toate elementele galeriei trebuie adăugate la DOM printr-o singură operație de adăugare.
Stilizează ușor galeria folosind flexbox sau grids prin clase CSS.


const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];