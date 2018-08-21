$(document).ready(function () {
    var $sidebar = $('.sidebar'),
        $wrapper = $('.wrapper');


    if ($(window).width() < 992) {
        $sidebar.addClass('hide-sidebar');
        $wrapper.removeClass('nav-collapsed menu-collapsed');
    }

    $(window).resize(function () {
        if ($(window).width() < 992) {
            $sidebar.addClass('hide-sidebar');
            $wrapper.removeClass('nav-collapsed menu-collapsed');
        }

        if ($(window).width() > 992) {
            $sidebar.removeClass('hide-sidebar');
        }
    });
});