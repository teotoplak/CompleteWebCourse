var bottom = 680;
var fallingRange = 800;
var period = 10;
var boxNum = 1;
var fail = false;


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
    target.style.top = -300 +'px';

    target.onclick = function () {
        if(fail) {
            return;
        }
        target.parentNode.removeChild(target);
        createBox();
        if(Math.random() > 0.7) {
        createBox();
        }
    }

    var w = new Worker("worker.js");
    w.onmessage = function(e) {
        var target = document.getElementById(e.data);
        var position = target.style.top;
        var positionNum = parseInt(position.substring(0, position.length - 2));
        positionNum = positionNum + 1;
        // alert(positionNum)
        target.style.top = positionNum +'px';
        if(positionNum > 725 ) {
            if(!fail) {
            alert("Trumped! Refresh for one more play :)")
            }
            w.terminate();
            fail = true;
        }
    };
    w.postMessage(boxId);


}

createBox();




