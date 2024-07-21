document.addEventListener("DOMContentLoaded", function () {
    tWabApp = window.Telegram.WebApp
    // const qrLink = document.getElementById("qrLink");

    const urlStorage = new UrlStorage()

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
        window.location.replace(urlStorage.getUrl())
        // tWabApp.MainButton.hide()
        // qrLink.innerHTML = "<a id=\"qrLink\">Ссылка</a>";
        // qrLink.href = "http://stackoverflow.com"
    }
});