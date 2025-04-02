// Optimalizované animace pro web
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer pro fade-in efekty
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Najít všechny elementy s opacity:0
    document.querySelectorAll('[style*="opacity:0"]').forEach(element => {
        // Přidat výchozí styl pro animaci
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        element.style.transform = 'translateY(20px)';
        // Přidat do observeru
        fadeInObserver.observe(element);
    });
}); 