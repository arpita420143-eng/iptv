// --- 1. Splash Screen Logic ---
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const mainContent = document.getElementById('main-content');
        
        splash.style.opacity = '0';
        
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.style.display = 'block';
        }, 500); 
    }, 2500);
});

// --- 2. Change Server Functionality ---
function changeServer(newUrl, btnElement) {
    const player = document.getElementById('main-player');
    player.src = newUrl;

    const allBtns = document.querySelectorAll('.server-btn');
    allBtns.forEach(btn => btn.classList.remove('active-fire'));
    btnElement.classList.add('active-fire');
}

// --- 3. Refresh Player ---
function refreshPlayer() {
    const player = document.getElementById('main-player');
    player.src = player.src;
}

// --- 4. Share Site ---
function shareSite() {
    const siteUrl = window.location.href;
    const shareText = "🔥 Watch Live Matches strictly on MKS Sports Premium OTT! Join now: " + siteUrl;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`);
}

// --- 5. Anti-Theft Security Activated ---
document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123) return false; // F12
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) return false;
    if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) return false; // Ctrl+U, Ctrl+S
});

document.addEventListener('dragstart', (e) => e.preventDefault());
