/**
 * Created by YangZi on 2016/6/15.
 */
function imgTranslate() {
    var index = 0;
    //获取包含图片和三个圆点的容器（内部包含了图片容器和控制容器），id为index-img-list
    var container = document.getElementById('index-img-list');
    //获取容器内包含图片的容器
    var images = container.firstElementChild;
    //获取图片个数，动态设置其宽度
    var imgCount = images.children.length;
    //alert(imgCount);
    images.width = 100 * imgCount + '%';

    //以下处理controls
    var controls = document.getElementById('controls');
    var controlCount = controls.childElementCount;
    var controlArr = controls.children;

    setInterval(function(){
        index = index + 1 < imgCount ? index+1 : 0;
        for (var i = 0; i < controlCount; i++){
            controlArr[i].classList.remove('active');
        }
        controlArr[index].classList.add('active');
        //移动图片
        images.style.webkitTransform = 'translate3d(-'+ index*100/imgCount+'%,0,0'+')';
        images.style.transform='translate3d(-'+index*100.00/imgCount+'%,0,0)';
    },3000);
}

function onTableItemClick(e) {
    //获取要显示的盒子ID
    var activeID = e.getAttribute('href').substring(1);
    //根据ID获取要显示的盒子
    var activePlan = document.getElementById(activeID);
    //改变table导航状态
    change(e);
    //改变显示盒子状态
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