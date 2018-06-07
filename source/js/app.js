// I wished I could use ES6 for this. However, the setup is non-trivial

var navButton = document.getElementById("nav-toggle-button");

function toggleNavDisplay(event) {
    // prevent hyperlink from running
    event.preventDefault();

    // get the resonsive-nav container
    var responsiveNav = document.getElementById("responsive-nav");

    // toggle the showNav CSS on the responsive nav container
    // if the showNav class is there, it is removed; else it is added
    // with a single property: toggle
    responsiveNav.classList.toggle("showNav");
}

navButton.addEventListener("click", toggleNavDisplay);