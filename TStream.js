var ws;

function connect() {
    if ("WebSocket" in window) {

        ws = new WebSocket("ws://" + document.getElementById('ipaddr').value + "/connect");

        ws.onopen = function () {
            console.log("Connection open");
        };

        ws.onmessage = function (evt) {

            if (evt.data.indexOf("MEDIA") > -1) {
                var audio = document.getElementById("audio");
                var obj = JSON.parse(evt.data.substring(8, evt.data.length));
                audio.src = obj.URL;
                audio.play();
            }
        };

        ws.onclose = function () {
            console.log("Connection closed");
        };
    }

    else {
        alert("WebSocket NOT supported by your Browser!");
    }
}

