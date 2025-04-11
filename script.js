//TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

//IF HAMBURGER MENU GOT KLICK
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// KLICK ON OUT SIDE SIDEBAR FOR REMOVE FUNGTION

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener("click" ,function(e) {
 if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
  navbarNav.classList.remove("active");
 }
});