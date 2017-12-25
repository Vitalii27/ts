jQuery(function($) {
    var $list = $('.jobs_list');
    var $item = $list.find('.jobs_item');
    var $itemContent = $item.find('.jobs_item-content');

    $item.on('click', function() {
            console.log('hi')
            var $this = $(this)
            var $itemContent = $this.find('.jobs_item-content');
            var $heightBlock = $this.find('.description_wrapper').outerHeight();
            var $list = $('.jobs_list')
                // var $heightSection = $list.outerHeight();

            if (!$item.find('.jobs_item-content').hasClass('open-description')) {
                $list.css('height', '100%')
                $item.find('.jobs_item-content, .description').css('height', '0')
                $itemContent.addClass('open-description')
                $item.removeClass('active-item')
                $this.addClass('active-item')
                $this.find('.jobs_item-content, .description').css('height', $heightBlock)
                    // $list.css('height', $heightSection + $heightBlock)
            } else {
                $list.css('height', 'auto')
                $item.find('.jobs_item-content').removeClass('open-description')
                $this.find('.jobs_item-content, .description').css('height', '0')
                $itemContent.removeClass('open-description');
                $this.removeClass('active-item')
                    // $list.css('height', $heightSection - $heightBlock)
            }

            // $this.on('mouseout', function() {
            //     $itemContent.addClass('open-description');
            // })

        })
        // $item.on('mouseover', function() {
        //     $itemContent.removeClass('open-description');

    // })



    $('body').on('click', function(e) {
        // $list.css('height', $heightSection)
        var target = $(e.target);
        console.log(target)
        if (target.is(".row, .big-title")) {
            $item.removeClass('active-item')
            $item.find('.jobs_item-content, .description').css('height', '0')
        }
    })
});


// jQuery(function($) {
//     var $list = $('.jobs_list');
//     var $item = $list.find('.jobs_item');
//     var $itemContent = $item.find('.jobs_item-content');

//     $item.on('click', function() {
//             var $this = $(this)
//             var $itemContent = $this.find('.jobs_item-content');
//             var $heightBlock = $this.find('.description_wrapper').outerHeight()
//             var $heightSection = $list.outerHeight();

//             if (!$item.find('.jobs_item-content').hasClass('open-description')) {
//                 $item.find('.jobs_item-content, .description').css('height', '0')
//                 $itemContent.addClass('open-description')
//                 $item.removeClass('active-item')
//                 $this.addClass('active-item')
//                 $this.find('.jobs_item-content, .description').css('height', $heightBlock)
//                 $list.css('height', $heightSection + $heightBlock)
//             } else {
//                 $item.find('.jobs_item-content').removeClass('open-description')
//                 $this.find('.jobs_item-content, .description').css('height', '0')
//                 $itemContent.removeClass('open-description');
//                 $this.removeClass('active-item')
//                 $list.css('height', $heightSection - $heightBlock)
//             }

//             // $this.on('mouseout', function() {
//             //     $itemContent.addClass('open-description');
//             // })

//         })
//         // $item.on('mouseover', function() {
//         //     $itemContent.removeClass('open-description');

//     // })



//     $('body').on('click', function(e) {
//         // $list.css('height', $heightSection)
//         var target = $(e.target);

//         if (target.is(".row, .big-title")) {
//             $item.removeClass('active-item')
//             $item.find('.jobs_item-content, .description').css('height', '0')
//         }
//     })
// });