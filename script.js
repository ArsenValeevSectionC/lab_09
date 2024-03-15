$(document).ready(function() {
    $('.filter_button').click(function() {
        let category = $(this).data('category');
        if (category === 'all') {
            $('.image').fadeIn();
        } else {
            $('.image').fadeOut();
            $('.' + category).fadeIn();
        }
    });

    $('#gallery').on('click', '.image img', function() {
        let src = $(this).attr('src');
        $('#lightbox .lightbox-content').attr('src', src);
        $('#lightbox').fadeIn();
    });

    $('#lightbox .close').click(function() {
        $('#lightbox').fadeOut();
    });
});
