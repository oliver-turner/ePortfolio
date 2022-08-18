/* Hamburger Menu functionality  */

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

/* check which theme is active */

function isThemeActive() {
    if (localStorage.getItem("theme") != null) {
        if (localStorage.getItem("theme") == "light") {
            document.body.classList.remove("dark");
        }
        else {
            document.body.classList.add("dark");
        }
    }
    iconUpdate();
}
isThemeActive();

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

/* Contact Me Email Functionality */

function mailSelf(event) {
    event.preventDefault();
    const contactModal = document.querySelector(".modal__contactMe");
    const pending = document.querySelector(".overlayPending");
    const success = document.querySelector(".overlaySuccess");
    /* hide contact me form and display pending icon */
    contactModal.style.display = "none";
    pending.classList += " overlayVisible";
    /* send email through email.js */
    emailjs
        .sendForm(
            "service_p1sroe1",
            "template_kjcxnpn",
            event.target,
            "XxhjlyCJzj1zuaixd"
        )
        /* if successful remove pending icon and display success message */
        .then(() => {
            pending.classList.remove("overlayVisible");
            success.classList += " overlayVisible";
        })
        /* if unsuccessful remove pending icon and display error message */
        .catch(() => {
            pending.classList.remove("overlayVisible");
            alert(
                "Email service is unavailable at this time :("
            );
        });
}

const project = document.querySelectorAll('.project');
const btns = document.querySelectorAll('.btn');
const nextButton = document.querySelector(".sliderButton.next");
const prevButton = document.querySelector(".sliderButton.prev");
const numberOfSlides = project.length;
var slideIndex = 0;

//next button functionality 
nextButton.addEventListener("click", () => {
    project.forEach((project) => {
        project.classList.remove("active");
    });
    btns.forEach((btns) => {
        btns.classList.remove("active");
    });

    slideIndex++;

    if (slideIndex > (numberOfSlides - 1)) {
        slideIndex = 0;
    }

    project[slideIndex].classList.add("active");
    btns[slideIndex].classList.add("active");
});

//previous button functionality
prevButton.addEventListener("click", () => {
    project.forEach((project) => {
        project.classList.remove("active");
    });
    btns.forEach((btns) => {
        btns.classList.remove("active");
    });

    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = numberOfSlides - 1;
    }

    project[slideIndex].classList.add("active");
    btns[slideIndex].classList.add("active");
});