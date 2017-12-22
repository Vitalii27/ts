var detectModule = (function($) {
    // prived block

    function isMobile() {
        if (device.mobile() || $('html').hasClass("tablet") || $('html').hasClass("detect-mobile")) {
            return true;
        }
    }

    function isMicrosoft() {
        if (navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./)) {
            $('html').addClass("detect-microsoft");
            return true;
        }
    }

    function isIE() {
        if (navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident\/7\./)) {
            $('html').addClass("detect-ie");
            return true;
        }
    }

    function isEdge() {
        if (navigator.userAgent.match(/Edge\//)) {
            $('html').addClass("detect-edge");
            return true;
        }
    }

    function getScrollBarWidth() {
        var $outer = $('<div>').css({
                visibility: 'hidden',
                width: 100,
                overflow: 'scroll'
            }).appendTo('body'),
            widthWithScroll = $('<div>').css({
                width: '100%'
            }).appendTo($outer).outerWidth();
        $outer.remove();
        return 100 - widthWithScroll;
    }

    return {
        // public methods
        scrollBarWidth: getScrollBarWidth(),
        isMobile: isMobile(),
        isMicrosoft: isMicrosoft(),
        isIE: isIE(),
        isEdge: isEdge()
    }
}(jQuery));