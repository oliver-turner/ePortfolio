function toggleBurger() {
    let toggleMenu = document.getElementById("toggle");
    let burgerItems = document.querySelectorAll(".hamburgerMenu a");
    toggleMenu.addEventListener('change', function () {
        if (toggleMenu.checked) {
            burgerItems[0].style.transform = "translate(0, 100px)";
            burgerItems[1].style.transform = "translate(-95px, 0px)";
            burgerItems[2].style.transform = "translate(-90px, 50px)";
            burgerItems[3].style.transform = "translate(-50px, 85px)";
        }
        else {
            burgerItems.forEach((menuItem) => {
                menuItem.style.transform = "translate(0,0)";
            });
        }
    });
}

