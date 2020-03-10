// 控制iframe canvas、代码演示窗口变化
const iframeWidth = document.documentElement.offsetWidth;
if(iframeWidth <= 809) {
    document.getElementById("canvas").style.zoom = iframeWidth/809 - 0.1;
    document.getElementById("canvas1").style.zoom = iframeWidth/809 - 0.1;
    document.getElementsByTagName("pre")[0].style.zoom = iframeWidth/809 - 0.1;
} else if(iframeWidth > 809) {
    document.getElementById("canvas").style.zoom = 1;
    document.getElementById("canvas1").style.zoom = 1;
    document.getElementsByTagName("pre")[0].style.zoom = 1;
}
window.onresize = throttle(resize, 100);

function resize() {
    const iframeWidth = document.documentElement.offsetWidth;
    if(iframeWidth <= 900 && iframeWidth > 414) {
        document.getElementById("canvas").style.zoom = iframeWidth/809 - 0.1;
        document.getElementById("canvas1").style.zoom = iframeWidth/809 - 0.1;
        document.getElementsByTagName("pre")[0].style.zoom = iframeWidth/809 - 0.1;
    }
}

// 定时绘制
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// 开源节流
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;  // 当前时间与之前的时间相等，则不会进入到 if 分支里
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {  // 判断（包括修改系统时间导致计算错误等情况）
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    
    // 取消函数
    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    }
    return throttled;
}