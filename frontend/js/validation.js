var validateOption = {
    //debug: true, // debug mode
    ignore: ".ignore",
    onclick: false, //Validate checkboxes and radio buttons on click
    errorClass: "invalid",
    errorElement: "span",
    onfocusout: false,
    messages: {
        name: {
            required: "Введите имя"
        },
        email: {
            required: "Введите E-mail адрес"
        },
        phone: {
            required: "Введите телефон"
        }
    },
    highlight: function(element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
        setTimeout(function() {
            $(element).removeClass(errorClass);
            $(element).next("span[class=" + errorClass + "]").fadeOut(500);
        }, 2000);
    },
    unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
    },
    submitHandler: function(form) {
        ajaxSubmit.call(form);
    }
};

// send message function
if (typeof ajaxSubmit !== "function") {
    function ajaxSubmit() {
        var $form = $(this);
        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            success: function(data) {
                $.magnificPopup.close();
                alertSucsess.showAlert('<i class="fa fa-info-circle" aria-hidden="true"></i> Ваше резюме отправлено');
                $form[0].reset();
                //showPopUp (data);
            },
            error: function(e) {
                alertError.showAlert('<i class="fa fa-info-circle" aria-hidden="true"></i> Ошибка');
            }
        });
    }
}

$(function() {

    var $form = $(".js-validate");
    // custom error messages
    jQuery.extend(jQuery.validator.messages, {
        required: "Поле не может быть пустым.",
        remote: "Поле заполнено неверно.",
        email: "Введите корректный E-mail адрес, например energoclub@gmail.com",
        url: "Введите корректный URL.",
        date: "Введите дату в формате Y-m-d (ISO).",
        dateISO: "Введите дату в формате Y-m-d (ISO).",
        number: "Только числа.",
        digits: "Только числа.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Пароли не совпадают.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Максимум {0} символов."),
        minlength: jQuery.validator.format("Минимум {0} символов."),
        rangelength: jQuery.validator.format("Значение от {0} до {1} символов."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });

    $form.each(function() { // <- selects every <form> on set
        // init validation plugin
        $(this).validate(validateOption);

        // prevent default form submitted
        $(this).on("submit", function(e) {
            e.preventDefault();
        });
    });

    // registration form validation end
}); //ready