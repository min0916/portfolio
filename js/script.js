$(function () {

    portfolio.init()
})

const portfolio = {
    init: function () {
        portfolio.getScroll()
        portfolio.handleHeader()
        portfolio.scrollTo()
        portfolio.openMenu()
        portfolio.reset()
    },
    getScroll: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            if (scrollTop > 200) {
                $('html').addClass('scrolled')
            } else {
                $('html').removeClass('scrolled')
            }

        })
    },
    handleHeader: function () {
        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            if (scrollTop > 500) {
                $('#header').fadeIn(400);
            } else {
                $('#header').fadeOut(400);
            }
        })
    },
    scrollTo: function () {
        $('#header nav a').on('click', function () {
            const dataTarget = $(this).data('target');
            const offsetTop = $(dataTarget).offset().top;
            $('html, body').animate({
                scrollTop: offsetTop - 60
            })

            portfolio.reset();
        })
    },
    openMenu: function () {
        $('.btn-menu').on('click', function () {
            $('html').toggleClass('open-manu');

        });
        $('#header .screen').on('click', function () {
            $('html').removeClass('open-manu');
        });
    },
    reset: function () {
        $('html').removeClass('open-manu');

    }
}

