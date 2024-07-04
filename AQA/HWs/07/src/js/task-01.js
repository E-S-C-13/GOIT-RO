const originalLog = console.log;
console.log = (...e) => {
  originalLog(...e); // Output to browser's console
  document.getElementById("log").innerHTML += e.join(" ") + "<br />";
};

//Selecteaza lista de categorii (#ID)
const categories = document.querySelector("#categories");

//Selecteaza toate elementele din lista din lista de categorii (.class)
const items = categories.querySelectorAll(".item");

//Afiseaza numarul de elemente(items) din lista de categorii
console.log(`Number of categories: ${items.length}`);

//Itereaza peste fiecare element
items.forEach((item) => {
  //Selecteaza textul titlului categoriei
  const categoryTitle = item.querySelector("h2").textContent;
  //Selecteaza numarul de elemente totale din categoria respectiva
  const categoryCount = item.querySelectorAll("li").length;

  //Afiseaza titlul categoriei
  console.log(`Category: ${categoryTitle}`);
  //Afiseaza numarul total de elemente
  console.log(`Elements: ${categoryCount}`);
});
