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
    }

    function showQRScanner() {
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
        window.location.replace("http://www.google.com");
    }
});