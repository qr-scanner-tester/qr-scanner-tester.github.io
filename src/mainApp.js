document.addEventListener("DOMContentLoaded", function () {
    tWabApp = window.Telegram.WebApp
    const outputTextMessage = document.getElementById("outputMessage");

    init();

    function init() {
        tWabApp.MainButton.setText("Scan QR code");
        tWabApp.onEvent('mainButtonClicked', showQRScanner);
        tWabApp.onEvent('qrTextReceived', processQRCode);
        tWabApp.MainButton.show()
        tWabApp.MainButton.enable()
        outputTextMessage.value = "start"
    }

    function showQRScanner() {
        // Sets QR message
        let par = {
            text: ""
        };
        tWabApp.showScanQrPopup(par);
    }

    function processQRCode(data) {
        outputTextMessage.value = data.data
        tWabApp.closeScanQrPopup();
    }
});