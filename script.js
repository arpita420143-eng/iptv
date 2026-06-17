/* ==========================================
   1. SECURITY LAYER (ANTI-INSPECT & THEFT)
========================================== */

// Right-Click Block
document.addEventListener('contextmenu', event => event.preventDefault());

// Keyboard Shortcuts Block (F12, Ctrl+U, Ctrl+Shift+I)
document.onkeydown = function(e) {
    if (e.keyCode === 123) return false; 
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false; 
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) return false; 
    if (e.ctrlKey && e.keyCode === 85) return false; 
};

// Anti-Debugger Loop
setInterval(function() {
    const before = new Date().getTime();
    debugger; 
    const after = new Date().getTime();
    if (after - before > 100) {
        document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:20%; font-family:sans-serif;'>Security Alert: Inspecting is not allowed on MKS Sports!</h1>";
    }
}, 1000);


/* ==========================================
   2. CHANNELS DATA (WITH IDs)
========================================== */

const channels = [
    { id: "fox1", name: "FOX SPORTS 1 US (ENG)", bitrate: "7.50 Mbps", type: "dash", url: "https://otte-tim.live.pv-cdn.net/pdx-nitro/live/clients/dash/enc/ajfoeddkbz/out/v1/b78800b9b2304879b15843f455836829/cenc.mpd", keyId: "f6564ec2aee819046328a0e153be574d", key: "ff46a8a1031eb27ef22576a077c98ab7" },
    { id: "fox2", name: "FOX SPORTS 2 US (ENG)", bitrate: "7.50 Mbps", type: "dash", url: "https://cors-everywhere-wc8b4.ondigitalocean.app/https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/tmpzbbdj9y/out/v1/962736723a534ba294e7592fef49827b/cenc.mpd", keyId: "5466ebd70704bdeb657f0abf3c5ca4ef", key: "bdd79b72d8e48ed483aa623cc38a8a16" },
    { id: "rte", name: "RTÉ 2 (ENG)", bitrate: "6 Mbps", type: "dash", url: "https://otte.live.fly.ww.aiv-cdn.net/iad-nitro/live/clients/dash/enc/awxnrqkbo5/out/v1/716529a4091947b0877e6cb80dbd6ccb/cenc.mpd", keyId: "09453ce820d65fbc675de3185f9e454c", key: "98cff9600995fa381c76fdacf3c7edae" },
    { id: "cignal", name: "CIGNAL TV (ENG)", bitrate: "4.77 Mbps", type: "dash", url: "https://dai.google.com/linear/dash/pa/event/antwa0EiQm2PoHtx4rBtVw/stream/0c8b0b72-7a38-4852-ab2e-3fd88cbe71cc:GRQ/manifest.mpd", keyId: "d816287e21496989eae1312925a423c5", key: "00da00f13180e7e6cd5ce87d1c974e8d" },
    { id: "dsport", name: "D SPORT (SPANISH)", bitrate: "8.20 Mbps", type: "dash", url: "https://qp-pldt-live-bpk-ucd-prod.akamaized.net/bpk-tv/ch299/default/index.mpd", keyId: "549ab7cd35a64bb6bb479ecead04d69d", key: "829799ed534d11fcadeb4b192467e050" },
    { id: "telemundo", name: "TELEMUNDO (SPANISH)", bitrate: "7.80 Mbps", type: "dash", url: "https://otte.cache.aiv-cdn.net/bom-nitro/live/clients/dash/enc/ubehitlwzo/out/v1/8e09c381a51f4366a19e979418112e8f/cenc.mpd", keyId: "a7d11d37a1f7611ee88d4db880171f32", key: "68f96d618b0b956b008c445896a25a79" },
    { id: "sportv", name: "SPOR TV BR (Portu)", bitrate: "8.20 Mbps", type: "dash", url: "https://live-oneapp-prd-news.akamaized.net/Content/CMAF_OL2-CTR-4s-v2/Live/channel(kvea)/master.mpd", keyId: "ce7ab3022e753307997f58afe001bac4", key: "72d631a66e635c60829a0fe7705516c1" },
    { id: "sony", name: sony hindi" , type: "dash", url: "jiotvpllive.cdn.jio.com/bpk-tv/SonySportsTen3HinHDSTB_BTS/WDVLive/index.mpd",keyId: "08638117638b55649c6befa7f5cb34f6", key: "58ddb6bbdf8d8b1e2aac2b5312e99086" cookie: "__hdnea__=st=1781659826~exp=1781681426~acl=/bpk-tv/SonySportsTen3HinHDSTB_BTS/WDVLive/*~hmac=a9a3924f8c7615c3d598c26b6cd0931c5af9be29cc6ef0784bfea80884fd252a" },
    { id: "matchrus", name: "MATCH! FUTBOL 1 (RUS)", bitrate: "5 Mbps", type: "dash", url: "https://a151aivottlinear-a.akamaihd.net/OTTB/sin-nitro/live/dash/enc/m7duvnk2bu/out/v1/d1ad69118b5647309b1eb7213affdb3d/cenc.mpd", keyId: "4bbcff3289d457b4dd5dbdd21221de9a", key: "c4906b9a9f8dda3c0725bddb8c497733" },
    { id: "france", name: "FRANCE TV (FRENSH)", bitrate: "8 Mbps", type: "dash", url: "https://origin-m6web.live.6cloud.fr/out/v1/6play/6play-m6/cmaf_cenc00/dash-short-hd.mpd", keyId: "433ffba670963e70857859a9dff4be04", key: "51ede3a821229fe81e71282c8eff80e3" },
    { id: "trt", name: "TRT 1 (TURKISH) 2K", bitrate: "10.50 Mbps", type: "hls", url: "https://trt.daioncdn.net/trt-1/master.m3u8?app=web" },
    { id: "uzsport", name: "UZ SPORT (UZBEK)", bitrate: "5.50 Mbps", type: "hls", url: "https://stream1.cinerama.uz/1004/index.m3u8" },
    { id: "caze", name: "CAZE TV (PORTU)", bitrate: "5.20 Mbps", type: "hls", url: "https://dfr80qz435crc.cloudfront.net/MNOP/Amagi/Caze/Caze_TV_BR/Caze_TV.m3u8" },
    { id: "tele_hls", name: "TELEMUNDO (HLS)", bitrate: "4.80 Mbps", type: "hls", url: "https://nbculocallive.akamaized.net/hls/live/2037499/puertorico/stream1/master.m3u8" },
    { id: "rtbgo", name: "RTB Go (ENG)", bitrate: "4 Mbps", type: "hls", url: "https://d1211whpimeups.cloudfront.net/smil:rtbgo/playlist.m3u8" },
    { id: "tvri", name: "TVRI SPORT (ENG)", bitrate: "3 Mbps", type: "hls", url: "https://ott-balancer.tvri.go.id/live/eds/SportHD/hls/SportHD.m3u8" }
];


/* ==========================================
   3. PLAYER & APP LOGIC
========================================== */

let player;

async function initApp() {
    shaka.polyfill.installAll();
    
    if (shaka.Player.isBrowserSupported()) {
        const video = document.getElementById('video');
        const videoContainer = document.getElementById('video-container');
        
        player = new shaka.Player(video);
        
        const uiConfig = {
            controlPanelElements: [
                'play_pause', 'time_and_duration', 'spacer', 
                'mute', 'volume', 'quality', 'picture_in_picture', 'fullscreen'
            ],
            addSeekBar: true
        };
        const ui = new shaka.ui.Overlay(player, videoContainer, video);
        ui.configure(uiConfig);
        
        player.addEventListener('error', onErrorEvent);
        
        buildPlaylist();
        
        // URL Param Logic (?id=xyz)
        const urlParams = new URLSearchParams(window.location.search);
        const channelId = urlParams.get('id');
        
        let startIndex = 0; 
        
        if (channelId) {
            const foundIndex = channels.findIndex(c => c.id === channelId);
            if (foundIndex !== -1) {
                startIndex = foundIndex;
            }
        }

        loadChannel(startIndex);
        startFakeViewers();
    } else {
        alert("Browser not supported!");
    }
}

function buildPlaylist() {
    const playlistDiv = document.getElementById('playlist');
    playlistDiv.innerHTML = ''; 
    
    channels.forEach((ch, index) => {
        const item = document.createElement('div');
        item.className = 'channel-item';
        item.id = `channel-${index}`;
        item.setAttribute('data-name', ch.name.toLowerCase());
        item.innerHTML = `
            <div class="channel-info">
                <h3>${ch.name}</h3>
                <p>🔴 Live • ${ch.bitrate}</p>
            </div>
            <div class="badge">${ch.type.toUpperCase()}</div>
        `;
        item.onclick = () => loadChannel(index);
        playlistDiv.appendChild(item);
    });
}

function filterChannels() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.channel-item');
    items.forEach(item => {
        const name = item.getAttribute('data-name');
        if (name.includes(input)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
}

function startFakeViewers() {
    const viewerEl = document.getElementById('viewer-count');
    let baseViewers = 1200450;
    setInterval(() => {
        let randomFluctuation = Math.floor(Math.random() * 5000) - 2000;
        baseViewers += randomFluctuation;
        if(viewerEl) viewerEl.innerText = baseViewers.toLocaleString();
    }, 5000);
}

async function loadChannel(index) {
    document.querySelectorAll('.channel-item').forEach(el => el.classList.remove('active'));
    document.getElementById(`channel-${index}`).classList.add('active');

    const channel = channels[index];

    // URL Update (Bina page load kiye)
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id=' + channel.id;
    window.history.pushState({path:newUrl}, '', newUrl);

    if (channel.type === 'dash' && channel.keyId && channel.key) {
        let clearKeys = {};
        clearKeys[channel.keyId] = channel.key;
        player.configure({ drm: { clearKeys: clearKeys } });
    } else {
        player.configure({ drm: { clearKeys: {} } });
    }

    try {
        await player.load(channel.url);
        console.log("MKS Sports stream loaded successfully.");
    } catch (e) {
        console.error('MKS Stream Error:', e);
    }
}

function onErrorEvent(event) {
    console.error('Shaka Player Error Object:', event.detail);
}

document.addEventListener('DOMContentLoaded', initApp);
