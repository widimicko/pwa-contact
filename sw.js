importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);

if (workbox) {
    console.log(`Workbox Loaded`);
    workbox.precaching.precacheAndRoute(
        [
            {url: "/", revision: "1"},
            {url: "/css/materialize.min.css", revision: "1"},                    
            {url: "/js/materialize.min.js", revision: "1"},
            {url: "/index.html", revision: "1"},
            {url: "/manifest.json", revision: "1"},
            {url: "/js/ui.js", revision: "1"},
            {url: "/js/app.js", revision: "1"},
            {url: "/js/db.js", revision: "1"},
            {url: "/img/icons/icon192.png", revision: "1"},
            {url: "/img/icons/icon48.png", revision: "1"},
            {url: "https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2", revision: "1"},
            {url: "https://unpkg.com/snarkdown@1.0.2/dist/snarkdown.umd.js", revision: "1"}
        ],
        {
            ignoreUrlParametersMatching: [/.*/]
        }
    );
    
    
    workbox.routing.registerRoute(
        new RegExp('firestore.googleapis.com'),
        workbox.strategies.networkFirst({
            cacheName: 'MyContacts'
        })
    );
}
else {
    console.log(`Workbox fail to load`);
} 

