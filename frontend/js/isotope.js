// jQuery(function($) {
//     $('.jobs_list').isotope({
//         // hiddenStyle: {
//         //     opacity: 0
//         // },
//         // visibleStyle: {
//         //     opacity: 1
//         // },
//         // stagger: 30,
//         itemSelector: '.jobs_item',
//         layoutMode: 'fitRows',
//     })
//     $('.jobs_cites div,.jobs_location div').on('click', function() {
//         $('.jobs_cites div,.jobs_location div').removeClass('active-filter')
//         $(this).addClass('active-filter');

//         var selector = $(this).attr('data-filter');
//         $('.jobs_list').isotope({
//             filter: selector

//         });
//         return false;
//     })
// });
$(document).ready(function() {
    // get the action filter option item on page load
    var $filterType1 = $('#filter-cites li.active-button a').attr('class');
    var $filterType2 = $('#filter-location li.active-button a').attr('class');
    // get and assign the ourHolder element to the
    // $holder varible for use later
    var $holder = $('.jobs_list');

    // clone all items within the pre-assigned $holder element
    var $data = $holder.clone();
    // attempt to call Quicksand when a filter option
    // item is clicked
    $('#filter-cites li a').click(function(e) {
        // reset the active class on all the buttons
        $('#filter-cites li').removeClass('active-button');
        // assign the class of the clicked filter option
        // element to our $filterType variable
        var $filterType1 = $(this).attr('class');
        $(this).parent().addClass('active-button');
        if ($filterType1 == 'all') {
            // assign all li items to the $filteredData var when
            // the 'All' filter option is clicked
            var $filteredData = $data.find('li');
        } else {
            // find all li elements that have our required $filterType
            // values for the data-type element
            var $filteredData = $data.find('li[data-type=' + $filterType1 + ']');
        }

        // call quicksand and assign transition parameters
        $holder.quicksand($filteredData, {
            duration: 800,
            easing: 'easeInOutQuad'
        });
        return false;
    });
    $('#filter-location li a').click(function(e) {
        // reset the active class on all the buttons
        $('#filter-location li').removeClass('active-button');
        // assign the class of the clicked filter option
        // element to our $filterType variable
        var $filterType2 = $(this).attr('class');
        $(this).parent().addClass('active-button');
        if ($filterType2 == 'all') {
            // assign all li items to the $filteredData var when
            // the 'All' filter option is clicked
            var $filteredData = $data.find('li');
        } else {
            // find all li elements that have our required $filterType
            // values for the data-type element
            var $filteredData = $data.find('li[data-location=' + $filterType2 + ']');
        }

        // call quicksand and assign transition parameters
        $holder.quicksand($filteredData, {
            duration: 800,
            easing: 'easeInOutQuad'
        });
        return false;
    });
});