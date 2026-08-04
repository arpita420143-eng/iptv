// Telegram Alert Popup
window.onload = function() {
  setTimeout(() => {
    if (confirm("Join Our Telegram Channel MKS sports for Live Updates!")) {
      window.open("https://t.me/MKSsports_3", '_blank');
    }
  }, 1000); // Website load hone ke 1 second baad popup aayega
};

// JSON aur Player Links
const DATA_URL = "https://raw.githubusercontent.com/doctor-8trange/zyphx8/refs/heads/main/data/fancode.json"; 
const PLAY_BASE = "player.html?url="; // Yeh aapke player.html par bhejeka

const container = document.getElementById("matches");

function makeBtn(label, url) {
  const a = document.createElement("a");
  a.href = PLAY_BASE + encodeURIComponent(url);
  a.className = "px-4 py-2 rounded-lg text-sm flex items-center justify-center shadow-md transition-all bg-red-600 hover:bg-red-700 text-white";
  a.innerHTML = `<i class="fas fa-play mr-2"></i>${label}`;
  return a;
}

fetch(DATA_URL)
  .then(r => r.json())
  .then(data => {
    let matches = data.matches || [];

    /* SORT: STREAMING FIRST */
    matches.sort((a, b) => {
      const aLive = (a.streamingStatus || "").toUpperCase() === "STARTED";
      const bLive = (b.streamingStatus || "").toUpperCase() === "STARTED";
      return (bLive ? 1 : 0) - (aLive ? 1 : 0);
    });

    matches.forEach(match => {
      const isLive = (match.streamingStatus || "").toUpperCase() === "STARTED";
      
      const imgSrc = match.image || match.image_cdn?.APP || match.image_cdn?.BG_IMAGE || "https://www.fancode.com/skillup-uploads/cms-media/Cricket_Fallback_Old_match-card.jpg";
      
      const t1 = match.team?.[0];
      const t2 = match.team?.[1];
      const teamLine = t1 && t2 ? `${t1.name} vs ${t2.name}` : match.title;

      const card = document.createElement("div");
      card.className = `rounded-2xl overflow-hidden shadow-xl border border-gray-800 match-card ${isLive ? "ring-2 ring-red-600" : ""}`;

      card.innerHTML = `
        <div class="relative">
          <img src="${imgSrc}" class="w-full h-52 object-cover object-top">
          ${isLive ? `<span class="absolute top-3 left-3 bg-red-600 px-3 py-1 rounded-full text-xs live-badge">LIVE</span>` : ""}
        </div>
      `;

      const body = document.createElement("div");
      body.className = "p-4";
      body.innerHTML = `
        <h2 class="text-lg font-semibold">${teamLine}</h2>
        <p class="text-gray-400 text-sm">${match.tournament || ""}</p>
        <p class="text-gray-500 text-xs">${match.startTime || ""}</p>
        <p class="text-gray-500 text-xs">${match.language || ""}</p>
      `;

      const btnWrap = document.createElement("div");
      btnWrap.className = "grid grid-cols-2 gap-2 mt-3 hidden";

      if (isLive && match.auto_streams?.length) {
        const master = match.auto_streams[0].auto;
        const lines = master.split("\n");
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes("RESOLUTION")) {
            const res = lines[i].match(/RESOLUTION=\d+x(\d+)/);
            const quality = res ? res[1] + "p" : "Auto";
            const url = lines[i + 1];
            btnWrap.appendChild(makeBtn(quality, url));
          }
        }
      }

      if (isLive) {
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 py-2 rounded-lg mt-3";
        toggleBtn.innerHTML = `<i class="fas fa-tv mr-2"></i>Watch Now`;
        toggleBtn.onclick = () => {
          btnWrap.classList.toggle("hidden");
        };
        body.appendChild(toggleBtn);
        body.appendChild(btnWrap);
      } else {
        const noStream = document.createElement("div");
        noStream.className = "w-full bg-gray-800 text-gray-400 py-2 rounded-lg mt-3 text-center";
        noStream.innerHTML = `<i class="fas fa-clock mr-2"></i>Upcoming`;
        body.appendChild(noStream);
      }

      card.appendChild(body);
      container.appendChild(card);
    });
  });
