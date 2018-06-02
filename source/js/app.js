function showNav() {
    console.log("this is working");
    var x = document.getElementById("responsive-nav");
    if (x.className === "responsive-nav") {
        x.className += " unfold"; 
    } else {
        x.className = "responsive-nav";
    }
}