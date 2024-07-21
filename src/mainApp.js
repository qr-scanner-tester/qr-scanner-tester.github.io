document.addEventListener("DOMContentLoaded", function () {
    tWabApp = window.Telegram.WebApp
    const urlStorage = new UrlStorage()
    const loader = document.getElementById("loader");

    init();

    function init() {
        tWabApp.MainButton.setText("Scan QR code");
        tWabApp.onEvent('mainButtonClicked', showQRScanner);
        tWabApp.onEvent('qrTextReceived', processQRCode);
        tWabApp.MainButton.show()
        tWabApp.MainButton.enable()
    }

    function showQRScanner() {
        // Sets QR message
        let par = {
            text: ""
        };
        tWabApp.showScanQrPopup(par)
    }

    function processQRCode(data) {
        tWabApp.closeScanQrPopup()
        loader.display = "block"
        window.location.replace(urlStorage.getUrl())
    }
});