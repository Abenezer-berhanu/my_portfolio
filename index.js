let humberger = document.getElementById("humberger-menu");
let humbergerClose = document.getElementById("humberger-close")
let navUl = document.querySelector(".nav-ul")
humberger.addEventListener("click", displayNav)
humbergerClose.addEventListener('click', closeNav)


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