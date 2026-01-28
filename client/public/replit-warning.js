
// WARNING: This script detects if the user is testing on the old Replit URL
(function () {
    if (window.location.hostname.includes('replit.app')) {
        const warning = document.createElement('div');
        warning.style.position = 'fixed';
        warning.style.top = '0';
        warning.style.left = '0';
        warning.style.width = '100%';
        warning.style.background = '#f59e0b';
        warning.style.color = '#000';
        warning.style.textAlign = 'center';
        warning.style.padding = '10px';
        warning.style.zIndex = '99999';
        warning.style.fontWeight = 'bold';
        warning.innerHTML = `⚠️ VOCÊ ESTÁ NO ENDEREÇO ERRADO (REPLIT)! <br/> As correções estão no VERCEL (slx-codm.vercel.app ou equivalente).`;
        document.body.appendChild(warning);
    }
})();
