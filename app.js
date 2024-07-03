fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    let tblCountries = document.getElementById("tbl");

    let tblBody = `<tr>
                    <th>Name</th>
                    <th>Flag</th>
                </tr>`;

    data.forEach((element) => {
      tblBody += `<tr>
                    <td>${element.name.common}</td>
                    <td><img src="${element.flags.png}" alt="${element.name.common} flag" width="50" height="30"></td>
                </tr>`;
    });

    tblCountries.innerHTML = tblBody;
  });

function serchCuntrie() {
  let searchValue = document.getElementById("txtSearchValue").value;

  let offitalName = document.getElementById("offitalName");
  let name = document.getElementById("name");
  let countryCurrencies = document.getElementById("currencies");
  let countryRegion = document.getElementById("region");
  let countryPopulation = document.getElementById("population");
  let countryLanguages = document.getElementById("languages");
  let img = document.getElementById("img");

  console.log(searchValue);
  fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((obj) => {
        offitalName.innerText = obj.name.official;
        name.innerText = obj.name.common;

        let currencies = "Currencies : ";
        for (let key in obj.currencies) {
          currencies += `${obj.currencies[key].name} (${obj.currencies[key].symbol}) `;
        }
        countryCurrencies.innerText = currencies;

        countryRegion.innerHTML = "Region : " + obj.region;

        let languages = "Languages : ";
        for (let key in obj.languages) {
          languages += `${obj.languages[key]} `;
        }
        countryLanguages.innerText = languages;

        countryPopulation.innerHTML = "Population : " + obj.population;

        img.innerHTML = `<img src="${obj.flags.png}" alt="">`;
      });
      console.log(data);
    });
}
