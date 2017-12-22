jQuery(function($) {
    var $list = $('.jobs_list');
    var $item = $list.find('.jobs_item');
    var $itemContent = $item.find('.jobs_item-content');

    $item.on('click', function() {
        var $this = $(this)
        var $itemContent = $this.find('.jobs_item-content');
        var $heightBlock = $this.find('.description_wrapper').outerHeight()

        if (!$item.find('.jobs_item-content').hasClass('open-description')) {
            $item.find('.jobs_item-content, .description').css('height', '0')
            $itemContent.addClass('open-description')
            $item.removeClass('active-item')
            $this.addClass('active-item')
            $this.find('.jobs_item-content, .description').css('height', $heightBlock)
        } else {
            $item.find('.jobs_item-content').removeClass('open-description')
            $this.find('.jobs_item-content, .description').css('height', '0')
            $itemContent.removeClass('open-description');
            $this.removeClass('active-item')
        }

        // $this.on('mouseout', function() {
        //     $itemContent.addClass('open-description');
        // })
    })
    $item.on('mouseover', function() {
        $itemContent.removeClass('open-description');

    })



    $('body').on('click', function(e) {

        var target = $(e.target);

        if (target.is(".row, .big-title")) {
            $item.removeClass('active-item')
            $item.find('.jobs_item-content, .description').css('height', '0')
        }
    })
});