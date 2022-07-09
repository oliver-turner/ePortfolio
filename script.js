let modalOpen = false;

function toggleBurger() {
    let toggleMenu = document.getElementById("toggle");
    let burgerItems = document.querySelectorAll(".hamburgerMenu a");
    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            burgerItems[0].style.transform = "translate(-95px, 0px)";
            burgerItems[1].style.transform = "translate(-90px, 50px)";
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

function toggleModal() {
    if (modalOpen) {
        modalOpen = false;
        return document.body.classList.remove("modalOpen");
    }
    modalOpen = true;
    document.body.classList += "modalOpen";
}

