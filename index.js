let humberger = document.getElementById("humberger-menu");
let humbergerClose = document.getElementById("humberger-close")
let navUl = document.querySelector(".nav-ul")
humberger.addEventListener("click", displayNav)
humbergerClose.addEventListener('click', closeNav)

function aboutMe() {
          
}

function displayNav() {
          humberger.style.display = "none"
          humbergerClose.style.display = "block"
          navUl.style.display = "block"
          
}
function closeNav() {
          humberger.style.display = "block";
          humbergerClose.style.display = "none";
          navUl.style.display = "none"
          location.reload();
}
function getApi() {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.onload = function () {
    resp = this.responseText;
    let responses = JSON.parse(resp);

    responses.forEach((response) => {
      let country = response.name.common;
      JSON.stringify(country);
      let countrySelection = document.getElementById("country_selection");
      let option = document.createElement("option");
      option.innerHTML += country;
      countrySelection.appendChild(option);
    });
  };
  xhr.send();
}

getApi();