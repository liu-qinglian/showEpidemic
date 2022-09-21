(function (doc, win) {
    var doc1 = doc.documentElement;
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    recalc = function () {
        var clientWidth = doc1.clientWidth;//获取设备宽度
        if (!clientWidth) return;
        if (clientWidth >= 750) {
            doc1.style.fontSize = '100px';
        } else {
            // 移动端的适配
            // 设置根元素的大小    100设计稿的html大小  750设计稿

            doc1.style.fontSize = 100 * (clientWidth / 750) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)