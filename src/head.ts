function addScript() {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js';
    document.getElementsByTagName('head')[0].appendChild(script);
}
