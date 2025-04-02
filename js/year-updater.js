document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.footer-year-text');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}); 