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

    // Smooth scroll pro navigační odkazy
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1500; // Prodloužíme na 1.5s pro plynulejší průběh
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Jednodušší easing funkce pro plynulejší průběh
                    const easeOutQuart = progress => {
                        return 1 - Math.pow(1 - progress, 4);
                    };
                    
                    window.scrollTo(0, startPosition + distance * easeOutQuart(progress));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
            }
        });
    });

    // Inicializace 3D efektu pro reference v gridu
    if (window.VanillaTilt) {
        document.querySelectorAll('.reference-card').forEach(card => {
            VanillaTilt.init(card, {
                max: 7.5,
                speed: 300,
                glare: true,
                "max-glare": 0.1,
                scale: 1.02,
                gyroscope: false
            });
        });
    }

    // Zobrazení potvrzení po odeslání kontaktního formuláře
    const successEl = document.getElementById('form-success-message');
    const urlParams = new URLSearchParams(window.location.search);
    if (successEl && urlParams.get('sent') === '1') {
        successEl.removeAttribute('hidden');
        successEl.style.transition = 'opacity 0.4s ease-out';
        successEl.style.opacity = '0';
        requestAnimationFrame(function() {
            successEl.style.opacity = '1';
        });
        history.replaceState(null, '', window.location.pathname + window.location.hash);
    }
}); 