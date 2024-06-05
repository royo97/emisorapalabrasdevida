// Instalar el Service Worker
self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
});

// Activar el Service Worker
self.addEventListener('activate', function(event) {
    console.log('Service Worker activado');
});

// Manejar eventos de fetch
self.addEventListener('fetch', function(event) {
    console.log('Service Worker interceptando fetch:', event.request.url);
});

// Manejar eventos de notificación
self.addEventListener('notificationclick', function(event) {
    console.log('Service Worker clic en notificación');
});

self.addEventListener('notificationclose', function(event) {
    console.log('Service Worker cerrar notificación');
});
