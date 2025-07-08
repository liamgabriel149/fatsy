self.addEventListener('push', function(event) {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: data.icon || 'icon.png',
    vibrate: [200, 100, 200],
    badge: 'badge.png'
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
