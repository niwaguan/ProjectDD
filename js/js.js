/**
 * Created by YangZi on 2016/6/15.
 */
function imgTranslate() {
    var index = 0;
    //»ñÈ¡°üº¬Í¼Æ¬ºÍÈý¸öÔ²µãµÄÈÝÆ÷£¨ÄÚ²¿°üº¬ÁËÍ¼Æ¬ÈÝÆ÷ºÍ¿ØÖÆÈÝÆ÷£©£¬idÎªindex-img-list
    var container = document.getElementById('index-img-list');
    //»ñÈ¡ÈÝÆ÷ÄÚ°üº¬Í¼Æ¬µÄÈÝÆ÷
    var images = container.firstElementChild;
    //»ñÈ¡Í¼Æ¬¸öÊý£¬¶¯Ì¬ÉèÖÃÆä¿í¶È
    var imgCount = images.children.length;
    //alert(imgCount);
    images.width = 100 * imgCount + '%';

    //ÒÔÏÂ´¦Àícontrols
    var controls = document.getElementById('controls');
    var controlCount = controls.childElementCount;
    var controlArr = controls.children;

    setInterval(function(){
        index = index + 1 < imgCount ? index+1 : 0;
        for (var i = 0; i < controlCount; i++){
            controlArr[i].classList.remove('active');
        }
        controlArr[index].classList.add('active');
        //ÒÆ¶¯Í¼Æ¬
        images.style.webkitTransform = 'translate3d(-'+ index*100/imgCount+'%,0,0'+')';
        images.style.transform='translate3d(-'+index*100.00/imgCount+'%,0,0)';
    },3000);
}

function onTableItemClick(e) {
    //»ñÈ¡ÒªÏÔÊ¾µÄºÐ×ÓID
    var activeID = e.getAttribute('href').substring(1);
    //¸ù¾ÝID»ñÈ¡ÒªÏÔÊ¾µÄºÐ×Ó
    var activePlan = document.getElementById(activeID);
    //¸Ä±ätableµ¼º½×´Ì¬
    change(e);
    //¸Ä±äÏÔÊ¾ºÐ×Ó×´Ì¬
    change(activePlan);
    event.preventDefault();
}
function change(e) {
    var changeEle = e.parentElement.children;
    var changeCount = changeEle.length;
    for (var i = 0; i < changeCount; i++) {
        changeEle[i].classList.remove('active');
    }
    e.classList.add('active');
}

function loadURL(url) {
	url = url.replace("https","goyaya");
    var iFrame;
    iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", url);
    iFrame.setAttribute("style", "display:none;");
    iFrame.setAttribute("height", "0px");
    iFrame.setAttribute("width", "0px");
    iFrame.setAttribute("frameborder", "0");
    document.body.appendChild(iFrame);
    // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
    iFrame.parentNode.removeChild(iFrame);
    iFrame = null;
}