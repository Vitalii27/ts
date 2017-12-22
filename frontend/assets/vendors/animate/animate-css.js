//Animate CSS + WayPoints javaScript Plugin + device.js
//Example: $(".element").animated("zoomInUp", "zoomOutDown");
(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: "85%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
						};
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
						offset: "85%"
				});
		};
})(jQuery);

$(window).load(function() {
	
if (device.mobile() === false) { //disable on mobile

	// just add this classes for animated elements
	$(".js-animation-up").animated("fadeInUp", "fadeOutDown");
	$(".animation_once-up").animated_once("fadeInUp");
	$(".animation-left").animated("fadeInLeft", "fadeOutDown");
	$(".animation-right").animated("fadeInRight", "fadeOutDown");
	$(".animation-down").animated("fadeInDown", "fadeOutUp");
}
}); 