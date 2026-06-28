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

function changeServer(newUrl, btnElement) {
    document.getElementById('main-player').src = newUrl;
    
    // Server button selection update
    const allBtns = document.querySelectorAll('.server-btn');
    allBtns.forEach(btn => btn.classList.remove('active-fire'));
    btnElement.classList.add('active-fire');
}

function refreshPlayer() {
    const player = document.getElementById('main-player');
    player.src = player.src;
}

function shareSite() {
    const siteUrl = window.location.href;
    const shareText = "🔥 Watch Live Matches strictly on MKS Sports Premium OTT! Join now: " + siteUrl;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`);
}

// Security
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123) return false; 
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) return false;
    if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) return false; 
});
document.addEventListener('dragstart', (e) => e.preventDefault());
