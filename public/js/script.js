// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.add("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});


// Profile DropDown
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropBtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
