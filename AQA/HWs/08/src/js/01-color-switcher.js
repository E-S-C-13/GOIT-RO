//Variabila pentru stocarea intervalul
let nrInterval;

//Functie pentru a genera o culoare aleatori in format hexazecimal
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

//Asteapta incarcarea completa a paginii
document.addEventListener("DOMContentLoaded", function() {
  //Selecteaza butonul "Start"
  const startButton = document.querySelector("[data-start]");
  //Selecteaza butonul "Stop"
  const stopButton = document.querySelector("[data-stop]");

  //Actiuni cand se face click pe butonul "Start"
  startButton.addEventListener("click", function() {
    //Dezactiveaza butonul "Start" pentru a preveni apasarea repetata
    startButton.disabled = true;
    //Interval ce schimba aleatoriu culoarea fundalului din <body> la fiecare secunda
    nrInterval = setInterval(function() {
      const newColor = getRandomHexColor();
      document.body.style.background = newColor;
      //Afiseaza noua culoare in consola
      console.log("New background color: ", newColor)
    }, 1000);
  });
  
  //Actiuni cand se face click pe butonul "Stop"
  stopButton.addEventListener("click", function() {
    //Opreste intervalul care schimba culoarea de fundal
    clearInterval(nrInterval);
    //Reactiveaza butonul "Start"
    startButton.disabled = false;
  });
});


