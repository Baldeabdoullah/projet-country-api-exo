//variables
const countriesContainer = document.querySelector(".countries-container");
const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
let countries = [];

// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// api valide

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));
  console.log(countries);
}

// 3 - Passer les données à une variable
//valide

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
function countriesDisplay() {
  if (countries === null) {
    countriesContainer.innerHTML = "<h2>Pas de resultat</h2>";
  } else {
    countries.length = 12;
    countriesContainer.innerHTML = countries
      .map(
        (countrie) =>
          `
        <div class="card">
        <img src="${countrie.coatOfArms.png}">
         <h3>${countrie.altSpellings[1]}</h3>
         <h4>Capital: ${countrie.capital}</h4>
         <p>Population: ${countrie.population}</p>
        </div>
        
         `
      )
      .join("");
  }
}

inputSearch.addEventListener("input", () => {
  fetchCountries().then(() => countriesDisplay());
});

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

// s'appuyer sur l'architecture de l'api cuisine

//Architecture de la fonction d'affichage
countriesContainer.innerHTML = MonTableau.map(
  (country) => `
<div class="card">

</div>`
);
