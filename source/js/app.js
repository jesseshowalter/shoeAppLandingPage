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

window.sr = ScrollReveal();

sr.reveal('#header img.phone',{
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#features div.car',{
    delay: 200,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#features div.shoe',{
    delay: 400,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('#features div.device',{
    delay: 600,
    duration: 300,
    origin: 'bottom',
    distance: '100px'
});

sr.reveal('#discount .offer',{
    delay: 600,
    duration: 300,
    origin: 'right',
    distance: '200px'
});
sr.reveal('#discount picture',{
    delay: 600,
    duration: 300,
    origin: 'left',
    distance: '200px'
});
