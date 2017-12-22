jQuery(function($) {
    $('.jobs_list').isotope({
        itemSelector: '.jobs_item',
        layoutMode: 'fitRows',
    })
    $('.jobs_cites div,.jobs_location div').on('click', function() {
        $('.jobs_cites div,.jobs_location div').removeClass('active-filter')
        $(this).addClass('active-filter');

        var selector = $(this).attr('data-filter');
        $('.jobs_list').isotope({
            filter: selector

        });
        return false;
    })
});