document.getElementById('connectButton').addEventListener('click', function() {
    const socket = new WebSocket('ws://kohakuserver.f5.si:8443');
    
    socket.onopen = function() {
      document.getElementById('status').textContent = "Connected to the server!";
    };
  
    socket.onerror = function() {
      document.getElementById('status').textContent = "Failed to connect!";
    };
  
    socket.onclose = function() {
      document.getElementById('status').textContent = "Disconnected!";
    };
  });
  
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
  }
  
