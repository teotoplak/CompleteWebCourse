self.onmessage = function(e) {
    var boxId = e.data;
    setInterval(function () {
        postMessage(boxId);
    },1);
};








