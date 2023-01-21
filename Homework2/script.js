const urlPage1 = "https://swapi.dev/api/planets/?page=1";
const urlPage2 = "https://swapi.dev/api/planets/?page=2";
const btn = document.getElementById("btn");
const tableBody = document.getElementById("tableBody");

function getPlanetsFromAPI(urlPage1) {
  return fetch(urlPage1)
    .then(response => response.json())
    .then(data => {
      return data.results
    });
};

function printPlanets(planets) {
  tableBody.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const planet = planets[i];

    const row = document.createElement("tr");
    const planetName = document.createElement("td");
    const population = document.createElement("td");
    const climate = document.createElement("td");
    const gravity = document.createElement("td");

    tableBody.appendChild(row);
    row.appendChild(planetName);
    row.appendChild(population);
    row.appendChild(climate);
    row.appendChild(gravity);

    planetName.innerHTML = planet.name;
    population.innerHTML = planet.population;
    climate.innerHTML = planet.climate;
    gravity.innerHTML = planet.gravity;
  };
};

let nextBtn;
function showNextBtn() {
  if (!nextBtn) {
    nextBtn = document.createElement("button");
    nextBtn.innerHTML = "NEXT 10";
    nextBtn.addEventListener("click", function () {
      getPlanetsFromAPI(urlPage2).then(printPlanets);
      nextBtn.remove();
      showPrevBtn();
    });
    document.body.appendChild(nextBtn);
  } else {
    document.body.appendChild(nextBtn);
  };
};

let prevBtn;
function showPrevBtn() {
  if (!prevBtn) {
    prevBtn = document.createElement("button");
    prevBtn.innerHTML = "PREVIOUS 10";
    prevBtn.addEventListener("click", function () {
      getPlanetsFromAPI(urlPage1).then(printPlanets);
      prevBtn.remove();
      showNextBtn();
    });
    document.body.appendChild(prevBtn);
  } else {
    document.body.appendChild(prevBtn);
  };
};

btn.addEventListener("click", function () {
  getPlanetsFromAPI(urlPage1).then(printPlanets);
  showNextBtn();
});