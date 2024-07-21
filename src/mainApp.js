document.addEventListener("DOMContentLoaded", function () {
    let tWabApp = window.Telegram.WebApp

    const urlStorage = new UrlStorage()
    const infoStart = document.getElementById("info-text-start");
    const infoLoad = document.getElementById("info-text-load");
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
        let par = {
            text: ""
        };
        tWabApp.showScanQrPopup(par)
    }

    function processQRCode(data) {
        tWabApp.closeScanQrPopup()

        loader.display = "block"
        infoLoad.display = "block"
        infoStart.display = "none"

        window.location.replace(urlStorage.getUrl())
    }
});