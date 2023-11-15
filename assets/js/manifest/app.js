window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    showInstallPrompt();
});

console.log('app.js is loaded successfully!');

