jQuery(function($) {
    // on canvas menu
    var $touch = $('.js-toggle-menu');
    var activeClass = "is-swipe-menu-shown";
    var $menu = $('.swipe-menu');
    var $close = $('.js-menu-close');
    var $wrapper = $("body");
    var startBreakpoint = "48em";

    // show/hide menu functions
    function showMenu() {
        $wrapper.addClass(activeClass);
        // ios scroll fix
        $("html, body").css({
            height: "100%"
        });

    }

    function hideMenu() {
        $wrapper.removeClass(activeClass);
        // ios scroll fix
        $("html, body").css({
            height: "auto",
            // "overflow-y": "auto"
        });
    }

    // event listeners
    $touch.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($wrapper.hasClass(activeClass)) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    $close.on('click', function(e) {
        e.stopPropagation();
        hideMenu();
    });

    $wrapper.on('click', function(e) {
        if (e.target.className !== "swipe-menu") {
            hideMenu();
        }
    });

    $menu.on('click', function(e) {
        e.stopPropagation();
    });

    // close menu if target is an anchor link
    $menu.find('a[href*="#"]:not([href="#"])').on('click', function(e) {
        setTimeout(hideMenu, 1000);
    });

    $(window).resize(function() {
        var media = window.matchMedia("only screen and (max-width: " + startBreakpoint + ")").matches;
        if (!media) {
            hideMenu();
        }
    });
    // on canvas menu end
});