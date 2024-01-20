const searchInput = document.getElementById('search-input');

const searchButton = document.getElementById('search-button');

const regionFilter = document.getElementById('region-filter');

const countriesSection = document.getElementById('countries');

let countries = [];

// Fetch data from the REST Countries 
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then data => 
  data.forEach country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
}

// Display the countries on the webpage
function displayCountries(countries) {
  countriesSection.innerHTML = '';
  countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    countryDiv.innerHTML = `
      <img src="${country.flags.png}" alt="${country.name.common}" />
      <h2>${country.name.common}</h2>
      <p>Population: ${country.population.toLocaleString()}</p>
      <p>Region: ${country.region}</p>
      <p>Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
    `;
    countriesSection.appendChild(countryDiv);
  });
}

// Filter countries by region
regionFilter.addEventListener('change', () => {
  const filteredCountries = countries.filter(country => country.region === regionFilter.value || regionFilter.value === 'all');
  displayCountries(filteredCountries);
});

// Search for a country by name
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm));
  displayCountries(filteredCountries);
});

// Initialize the webpage
fetchData();