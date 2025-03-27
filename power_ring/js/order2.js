// Get the hamburger menu icon and nav items container
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItemsContainer = document.querySelector('.main-nav-item-parent');

// Add event listener to hamburger menu icon
hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger menu icon
    hamburgerMenu.classList.toggle('active');

    // Toggle the display of nav items
    const navItems = document.querySelectorAll('.main-nav-item-parent > div:not(.hamburger-menu)');
    navItems.forEach((navItem) => {
        navItem.style.display = hamburgerMenu.classList.contains('active') ? 'block' : 'none';
    });
});

const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
    console.log("toggle switched!!!!!")
});