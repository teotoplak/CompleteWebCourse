var bottom = 680;
var fallingRange = 400;
var period = 10;
var boxNum = 1;


function createBox() {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    var boxId = "box" + boxNum;
    boxNum ++;
    temp.innerHTML = '<div id='+boxId+' class="box"></div>';
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    var my_elem = document.getElementById('insertPoint');
// You can use native DOM methods to insert the fragment:
    document.body.insertBefore(frag, my_elem);

    var target = document.getElementById(boxId);
    var x = Math.random();
    x = fallingRange * x;
    target.style.left = x +'px';
    target.style.top = 0 +'px';

    var w = new Worker("worker.js");
    w.onmessage = function(e) {
        var target = document.getElementById(e.data);
        var position = target.style.top;
        var positionNum = parseInt(position.substring(0, position.length - 2));
        positionNum = positionNum + 1;
        // alert(positionNum)
        target.style.top = positionNum +'px';
        if(positionNum > 680 ) {
            w.terminate();
        }
    };
    w.postMessage(boxId);


    target.onclick = function () {
        createBox();
    }
}

createBox();




