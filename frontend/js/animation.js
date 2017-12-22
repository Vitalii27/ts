(function($) {
    $.fn.animated = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            }
        }, {
            offset: $(window).height()
        }).waypoint(function(dir) {
            if (dir === "down") {
                $(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
            } else {
                $(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
            }
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);

(function($) {
    $.fn.animated_once = function(inEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {

            $(this).addClass(inEffect).css("opacity", "1");

        }, {
            offset: $(window).height()
        });
    };
})(jQuery);

(function($) {
    $.fn.waypointTriger = function(cb) {
        $(this).waypoint(function(dir) {
            if (dir === "down") {
                cb($(this));
            }
        }, {
            offset: $(window).height()
        }).waypoint(function(dir) {
            if (dir === "up") {
                cb($(this));
            }
        }, {
            offset: -$(window).height()
        });
    };
})(jQuery);

(function($) {

    if (!device.mobile()) {
        $(".js-animations-up").animated("fadeInUp", "fadeOutDown");
        $(".js-animation-up").animated_once("fadeInUp");
        $(".js-animation-in").animated_once("fadeIn");
        $(".js-animation-left").animated_once("fadeInLeft");
        $(".js-animation-right").animated_once("fadeInRight");
        $(".js-animation-pulse").animated_once("pulse");
        $(".js-trigger").waypointTriger(function($this) {
            console.log("waypoint trigger cb");
        });
    }

    $(window).on("load", function() {
        $("body").css("opacity", 1);
        var media = window.matchMedia("only screen and (max-width: 62em)").matches;
        if (!detectModule.isMobile && !media) {
            // $(".js-animations-up").animated("fadeInUp", "fadeOutDown");
            $(".js-animation-up").animated_once("fadeInUp");
            $(".js-animation-down").animated_once("fadeInDown");
            $(".js-animation-in").animated_once("fadeIn");
            $(".js-animation-left").animated_once("fadeInLeft");
            $(".js-animation-right").animated_once("fadeInRight");
            $(".js-animation-pulse").animated_once("pulse");
        }
    });
})(jQuery);