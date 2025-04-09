//TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector(".navbar-nav");

//IF HAMBURGER MENU GOT KLICK
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};
