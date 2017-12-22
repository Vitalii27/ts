var PopUpModule = (function($) {
    // private methods
    var _removalDelay = 500;
    var _scrollBarWidth = detectModule.scrollBarWidth;

    var isOpenPopup = function() {
        // console.log("open pop-up");
        $('body').css('margin-right', _scrollBarWidth + "px");
        $("html").addClass("pop-up-is-showed");
    };

    var isClosePopup = function() {
        // console.log("close pop-up");
        $("html").removeClass("pop-up-is-showed");
        $('body').css('padding-right', 0);
    };


    return {
        // public methods
        initInline: function(selector) {

            $(selector).data("ignore-scroll", true);
            $(selector).magnificPopup({
                type: 'inline',
                preloader: false,
                removalDelay: _removalDelay,
                mainClass: 'mfp-fade',
                overflowY: 'hidden',
                showCloseBtn: true,
                callbacks: {
                    open: function() {
                        isOpenPopup();
                    },
                    close: isClosePopup
                }
            });
        },
        initImg: function(selector) {
            $(selector).data("ignore-scroll", true);
            var parentPopup = false;
            $.magnificPopup.open({
                items: { src: '#advantages-more' },
                type: 'inline',
                preloader: false,
                overflowY: 'hidden',
                // removalDelay: _removalDelay,
                showCloseBtn: true,
                mainClass: 'mfp-fade',
                callbacks: {
                    open: function() {
                        isOpenPopup();
                        $('.advantages-more_list').off('click').on('click', 'a', function(e) {
                            e.stopPropagation();
                            // If an instance is open, keep track and close it
                            if ($.magnificPopup.instance.isOpen) {
                                parentPopup = true;
                                // Here we could also store the parent instance in a global var using $.magnificPopup.instance.clone() to, for example, know which was the parent popup if we have multiple of them.
                                $.magnificPopup.close();
                            }
                        }).magnificPopup({
                            delegate: 'a',
                            type: 'image',
                            preloader: false,
                            overflowY: 'hidden',
                            mainClass: 'mfp-fade',
                            removalDelay: _removalDelay,
                            gallery: {
                                enabled: true
                            },
                            callbacks: {
                                afterClose: function() {
                                    // If we come from a parent popup
                                    if (parentPopup === true) {
                                        // Reopen initial popup here            
                                    }
                                }
                            }
                        });
                    }
                }
            });

        },


    }
}(jQuery));

jQuery(function($) {
    PopUpModule.initInline(".js-pop-up");
    $('.js-pop-up-img').on('click', function() {
        PopUpModule.initInline(".js-pop-up");
        PopUpModule.initImg('.js-pop-up-img');
    })

});