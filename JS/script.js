function create() {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = '<div id="josko" class="box"></div>';
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    var my_elem = document.getElementById('insertPoint');
// You can use native DOM methods to insert the fragment:
    document.body.insertBefore(frag, my_elem);
}

var bottom = 700;
var period = 1;



function moveTarget(targetId) {
    var target = document.getElementById(targetId);
    var position = target.getBoundingClientRect().top;
    setInterval(function () {
        if(position < bottom) {
        position = position + 4;
        target.style.top = position +'px';git
        } else {
            clearInterval(period)
        }
    },period)

}



create();
moveTarget("josko")



