'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', `${msg} has occured`);
}
function renderCountry(country1) {
  const [country] = country1;
  const html = `
    <article class="country">
      <img class="country__img" src="${country.flag}" />
      <div class="country__data">
        <h3 class="country__name">${country.name}</h3>
        <h4 class="country__region">${country.region}</h4>
        <p class="country__row"><span>👫</span>${country.population}</p>
        <p class="country__row"><span>🗣️</span>LANG</p>
        <p class="country__row"><span>💰</span>CUR</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}
const getApiJSON = function (url) {
  // console.log(url);
  return fetch(url).then(res => {
    // if (!res.ok) throw new Error('Country not found');
    return res;

  });
}
const getCountry = function (country) {
  // const request = new XMLHttpRequest();
  // request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
  // request.send();
  // request.addEventListener('load', function () {
  //   const data = JSON.parse(this.responseText);
  //   console.log(data);
  //   renderCountry(data[0])

  // })
  // console.log(getApiJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`))
  getApiJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`).then(data => {
    renderCountry(data);
    console.log(data);
    const neighbor = data[0].borders;
    if (!neighbor) throw new Error('neighbor not found');

    return getApiJSON(
      `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
    );
  }).then(data => { console.log(data); })
    .catch(err => renderError(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
}
btn.addEventListener('click', () => getCountry('portugal'));
// getCountry('portugal')
// console.log(getApiJSON);
// console.log(getCountry('portugal'));
// console.log(fetch('https://countries-api-836d.onrender.com/countries/name/portugal'));

const getData = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);
  return data
}

const data2 = getData().then(data => data)
console.log(data2);