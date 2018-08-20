$(document).ready(function () {


    var $sidebar = $('.sidebar'),
        $sidebar_content = $('.sidebar-content'),
        $wrapper = $('.wrapper');

    //$sidebar_content.perfectScrollbar();


    $('.nav-toggle').on('click', function () {
        var $this = $(this),
            toggle_icon = $this.find('.toggle-icon'),
            toggle = toggle_icon.attr('data-toggle');
        compact_menu_checkbox = $('.cz-compact-menu');

        if (toggle === 'expanded') {
            $wrapper.addClass('nav-collapsed');

            $('.nav-toggle').find('.toggle-icon').removeClass('ft-toggle-right').addClass('ft-toggle-left');
            toggle_icon.attr('data-toggle', 'collapsed');
            if (compact_menu_checkbox.length > 0) {
                compact_menu_checkbox.prop('checked', true);
            }
        }
        else {
            $wrapper.removeClass('nav-collapsed menu-collapsed');

            $('.nav-toggle').find('.toggle-icon').removeClass('ft-toggle-left').addClass('ft-toggle-right');
            toggle_icon.attr('data-toggle', 'expanded');
            if (compact_menu_checkbox.length > 0) {
                compact_menu_checkbox.prop('checked', false);
            }
        }
    });

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

    $('.navbar-toggle').on('click', function (e) {
        e.stopPropagation();
        $sidebar.toggleClass('hide-sidebar');
    });

    $('html').on('click', function (e) {
        if ($(window).width() < 992) {
            if (!$sidebar.hasClass('hide-sidebar') && $sidebar.has(e.target).length === 0) {
                $sidebar.addClass('hide-sidebar');
            }
        }
    });

    $('#sidebarClose').on('click', function () {
        $sidebar.addClass('hide-sidebar');
    });


});