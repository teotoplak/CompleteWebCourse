self.onmessage = function(e) {
    var boxId = e.data;
    var period = 6 * Math.random();
    period = period + 3;
    setInterval(function () {
        postMessage(boxId);
    },period);
};








