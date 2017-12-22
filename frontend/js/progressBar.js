$(function() {
    // var progressBar = $('#progressbar');
    // $('#order-form').on('submit', function(e) {
    //     e.preventDefault();
    //     var $that = $(this),
    //         formData = new FormData($that.get(0));
    //     $.ajax({
    //         url: $that.attr('action'),
    //         type: $that.attr('method'),
    //         contentType: false,
    //         processData: false,
    //         data: formData,
    //         dataType: 'json',
    //         xhr: function() {
    //             var xhr = $.ajaxSettings.xhr(); // получаем объект XMLHttpRequest
    //             xhr.upload.addEventListener('progress', function(evt) { // добавляем обработчик события progress (onprogress)
    //                 if (evt.lengthComputable) { // если известно количество байт
    //                     // высчитываем процент загруженного
    //                     var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
    //                     // устанавливаем значение в атрибут value тега <progress>
    //                     // и это же значение альтернативным текстом для браузеров, не поддерживающих <progress>
    //                     progressBar.val(percentComplete).text('Загружено ' + percentComplete + '%');
    //                 }
    //             }, false);
    //             return xhr;
    //         },
    //         success: function(json) {
    //             if (json) {
    //                 $that.after(json);
    //             }
    //         }
    //     });
    // });
    var inputs = document.querySelectorAll('.form-order_file');
    Array.prototype.forEach.call(inputs, function(input) {
        var label = input.previousElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();

            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });
});