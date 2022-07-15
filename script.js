
/* Hamburger Menu functionality */

function toggleBurger() {
    let toggleMenu = document.getElementById("toggle");
    let burgerItems = document.querySelectorAll(".hamburgerMenu a");
    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            burgerItems[0].style.transform = "translate(-90px, 50px)";
            burgerItems[1].style.transform = "translate(-95px, 0px)";
            burgerItems[2].style.transform = "translate(-50px, 85px)";
            burgerItems[3].style.transform = "translate(0, 100px)";
        }
        else {
            burgerItems.forEach((menuItem) => {
                menuItem.style.transform = "translate(0,0)";
            });
        }
    });
}

/* "About Me" modal toggler */

let modalOpen = false;
function toggleModal() {
    if (modalOpen) {
        modalOpen = false;
        return document.body.classList.remove("modalOpen");
    }
    modalOpen = true;
    document.body.classList.toggle("modalOpen");
}

/* dark mode/light mode switcher */

const themeSwitch = document.querySelector(".themeSwitch");
themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
    iconUpdate();
})

function iconUpdate() {
    if (document.body.classList.contains("dark")) {
        themeSwitch.querySelector("i").classList.remove("fa-moon");
        themeSwitch.querySelector("i").classList.add("fa-sun");
    }
    else {
        themeSwitch.querySelector("i").classList.remove("fa-sun");
        themeSwitch.querySelector("i").classList.add("fa-moon");
    }
}