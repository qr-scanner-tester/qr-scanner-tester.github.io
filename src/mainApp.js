document.addEventListener("DOMContentLoaded", function () {
    tWabApp = window.Telegram.WebApp
    const qrLink = document.getElementById("qrLink");

    init();

    function init() {
        tWabApp.MainButton.setText("Scan QR code");
        tWabApp.onEvent('mainButtonClicked', showQRScanner);
        tWabApp.onEvent('qrTextReceived', processQRCode);
        tWabApp.MainButton.show()
        tWabApp.MainButton.enable()
        window.location.replace("https://www.w3schools.com");
    }

    function showQRScanner() {
        window.location.href = 'https://hh.ru'
        // Sets QR message
        let par = {
            text: ""
        };
        tWabApp.showScanQrPopup(par);
    }

    function processQRCode(data) {
        tWabApp.closeScanQrPopup();
        qrLink.innerHTML = "<a id=\"qrLink\">Ссылка</a>";
        qrLink.href = "http://stackoverflow.com"
        window.location.replace("https://ya.ru");
    }
});