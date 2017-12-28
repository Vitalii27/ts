// var filterModule = (function() {
//     var _sortDuration = 500;

//     return {
//         filterInit: function() {

//         }

//     }
// })


jQuery(function($) {
    var $list = $('.jobs_list');
    var $item = $list.find('.jobs_item');
    var $itemContent = $item.find('.jobs_item-content');
    var $filterType = $('.filter_list-btn li .active-button').attr('class');

    var $data = $list.clone();
    $('.filter_list-btn li').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.jobs_item').removeClass('active-item')
        $('.jobs_item').find('.jobs_item-content').removeClass('open-description')
        $('.jobs_item').find('.jobs_item-content, .description').css('height', '0')
            // reset the active class on all the buttons
        $('.filter_list-btn li').removeClass('active-button');
        // assign the class of the clicked filter option
        // element to our $filterType variable
        var $filterType = $(this).attr('class');
        $(this).addClass('active-button');
        if ($filterType == 'all') {
            // assign all li items to the $filteredData var when
            // the 'All' filter option is clicked
            var $filteredData = $data.find('li');
        } else {
            // find all li elements that have our required $filterType
            // values for the data-type element
            var $filteredData = $data.find('li[data-type=' + $filterType + ']');
        }

        // call quicksand and assign transition parameters
        $list.quicksand($filteredData, {
            duration: 500,
            easing: 'easeInOutQuad'
        });
        return false;
    });

    $list.on('click', 'li', function(e) {
        var $this = $(this)

        var target = $(e.target);
        var $titleBlock = $this.find('.description_title h3');
        var $title = $titleBlock.text()
        var $btnForm = $this.find('.js-pop-up')
        $btnForm.on('click', function() {
            var $form = $('.order');
            var $input = $form.find('.js-position-text')
            $input.val($title)
        })

        var $itemContent = $this.find('.jobs_item-content');
        var $heightBlock = $this.find('.description_wrapper').outerHeight();
        var $list = $('.jobs_list')
        var $heightSection = $list.outerHeight();

        if (!$item.find('.jobs_item-content').hasClass('open-description')) {
            $list.css('height', '100%')
            $item.find('.jobs_item-content, .description').css('height', '0')
            $itemContent.addClass('open-description')
            $item.removeClass('active-item')
            $this.addClass('active-item')
            $this.find('.jobs_item-content, .description').css('height', $heightBlock)

        } else {
            if (target.is('img')) {
                $item.find('.jobs_item-content').removeClass('open-description')
                $this.find('.jobs_item-content, .description').css('height', '0')
                $itemContent.removeClass('open-description');
                $list.css('height', 'auto')
                $this.removeClass('active-item')
            }
        }
    })

    $item.on('mouseover', function() {
        if (!$(this).hasClass('active-item')) {
            $itemContent.removeClass('open-description');
        }
    })
    $item.on('mouseout', function() {
        if (!$(this).hasClass('active-item')) {
            $itemContent.addClass('open-description');
        }
    })

    $('.filter_list-btn li').on('click', function() {
        $item.removeClass('active-item')
        $item.find('.jobs_item-content').removeClass('open-description')
        $item.find('.jobs_item-content, .description').css('height', '0')
    })

    $('body').on('click', function(e) {

        var target = $(e.target);

        if (target.is(".row, .big-title, a")) {
            $item.removeClass('active-item')
            $item.find('.jobs_item-content, .description').css('height', '0')
        }
    })
});