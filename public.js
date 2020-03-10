// 控制iframe canvas、代码演示窗口变化
const iframeWidth = document.documentElement.offsetWidth;
if(iframeWidth <= 809) {
    document.getElementById("canvas").style.zoom = iframeWidth/809 - 0.1;
    document.getElementById("canvas1") ? document.getElementById("canvas1").style.zoom = iframeWidth/809 - 0.1 : null;
    document.getElementById("code").style.zoom = iframeWidth/809 - 0.1;
} else if(iframeWidth > 809) {
    document.getElementById("canvas").style.zoom = 1;
    document.getElementById("canvas1") ? document.getElementById("canvas1").style.zoom = iframeWidth/809 - 0.1 : null;
    document.getElementById("code").style.zoom = 1;
}
window.onresize = throttle(resize, 100);

function resize() {
    const iframeWidth = document.documentElement.offsetWidth;
    if(iframeWidth <= 900 && iframeWidth > 414) {
        document.getElementById("canvas").style.zoom = iframeWidth/809 - 0.1;
        document.getElementById("canvas1") ? document.getElementById("canvas1").style.zoom = iframeWidth/809 - 0.1 : null;
        document.getElementById("code").style.zoom = iframeWidth/809 - 0.1;
    }
}

// 定时绘制
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}