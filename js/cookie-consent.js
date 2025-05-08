document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('cookie-accept');
    const declineButton = document.getElementById('cookie-decline');

    // Kontrola, zda uživatel již dal souhlas
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }

    // Funkce pro nastavení Google Analytics
    function enableGoogleAnalytics() {
        // Povolení Google Analytics
        window['ga-disable-G-X7272ZK89Z'] = false;
        // Znovu načtení Google Analytics
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }

    // Funkce pro uložení souhlasu
    function saveConsent(consent) {
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        cookieConsent.classList.remove('show');
    }

    // Event listener pro tlačítko "Přijmout vše"
    acceptAllButton.addEventListener('click', function() {
        const consent = {
            analytics: true,
            marketing: true,
            necessary: true,
            timestamp: new Date().toISOString()
        };
        saveConsent(consent);
        enableGoogleAnalytics();
    });

    // Event listener pro tlačítko "Nastavení"
    settingsButton.addEventListener('click', function() {
        // Zde můžete přidat logiku pro zobrazení detailního nastavení cookies
        // Pro jednoduchost zatím jen zakážeme Google Analytics
        window['ga-disable-G-X7272ZK89Z'] = true;
        const consent = {
            analytics: false,
            marketing: false,
            necessary: true,
            timestamp: new Date().toISOString()
        };
        saveConsent(consent);
    });
}); 