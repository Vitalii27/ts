function Alert(selector) {

    this.selector = selector;

    this.alertClass = "is-shown";

    this.alertTimeout = null;

    this.init();

}
Alert.prototype = {
    //constructor: Alert,
    init: function() {
        var _this = this;

        //close btn
        $(_this.selector).find(".js-alert-close").on("click", function(e) {
            e.stopPropagation();
            _this.hideAlert.apply(_this);
        });

        // hover
        $(_this.selector).hover(function() {
                _this.mouseIn.apply(_this);
            },
            function() {
                _this.mouseOut.apply(_this);
            });
    },
    showAlert: function(text) {
        var _this = this;
        $(_this.selector).addClass(_this.alertClass);
        $(_this.selector).find(".alert_text").html(text);

        _this.alertTimeout = setTimeout(function() {
            _this.hideAlert.apply(_this);
        }, 3000);
    },

    hideAlert: function() {
        var _this = this;
        $(_this.selector).removeClass(_this.alertClass);
        if (_this.alertTimeout) {
            clearTimeout(_this.alertTimeout);
            _this.alertTimeout = null;
        }

    },

    mouseIn: function() {
        clearTimeout(this.alertTimeout);
        this.alertTimeout = null;
    },

    mouseOut: function() {
        var _this = this;
        _this.alertTimeout = setTimeout(function() {
            _this.hideAlert.apply(_this);
        }, 3000);
    }
};

var alertSucsess;
var alertError;
$(function() {
    alertSucsess = new Alert(".js-alert-sucsess");
    alertError = new Alert(".js-alert-error");
    // if ($(alertSucsess.selector).length) {
    //     alertSucsess.showAlert('<i class="fa fa-info-circle" aria-hidden="true"></i> Ваша подписка оформлена!');
    // }
    // $("body").on("click", function() {
    //     alertSucsess.showAlert('<i class="fa fa-info-circle" aria-hidden="true"></i> Error');
    // });
}); //ready


// alert.js end