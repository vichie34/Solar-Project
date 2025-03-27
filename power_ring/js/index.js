// Get the hamburger menu icon and nav items container
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navItemsContainer = document.querySelector('.main-nav-item-container');
// const navItemsContainer = document.querySelector('.main-nav1');  

// Get the hamburger menu icon and nav items container
// Add event listener to hamburger menu icon
hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger menu icon
    hamburgerMenu.classList.toggle('active');

    // Toggle the display of nav items
    if (hamburgerMenu.classList.contains('active')) {
        // navItemsContainer.style.display = 'block';
    } else {
        // navItemsContainer.style.display = 'none';
    }
});

// Add event listener to nav items to close the menu when clicked
navItemsContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navItemsContainer.style.display = 'none';
        hamburgerMenu.classList.remove('active');
    }
});

// Add event listener to document to close the menu when clicked outside
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navItemsContainer.contains(e.target)) {
        // navItemsContainer.style.display = 'none';
        hamburgerMenu.classList.remove('active');
    }
});



