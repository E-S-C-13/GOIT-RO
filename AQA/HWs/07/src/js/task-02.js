const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Selecteaza lista de ingrediente HTML
const ingredientsList = document.querySelector("#ingredients");

//Itereaza peste array-ul cu ingrediente JS
ingredients.forEach((ingredient) => {
  //Creaza un element <li>
  const listItem = document.createElement("li");
  //Atribuie elementele sub clasa "item"
  listItem.classList.add("item");
  //Atribuie numele fiecarui ingredient
  listItem.textContent = ingredient;
  //Adaugare in lista de ingrediente HTML
  ingredientsList.append(listItem);
});
