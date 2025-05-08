document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button-2');
    const navMenu = document.querySelector('.nav-menu-2');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            console.log('Menu button clicked'); // Debug log
            menuButton.classList.toggle('w--open');
            navMenu.classList.toggle('w--nav-menu-open');
            
            // Přidáme inline styly pro jistotu
            if (navMenu.classList.contains('w--nav-menu-open')) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        });
    }
}); 