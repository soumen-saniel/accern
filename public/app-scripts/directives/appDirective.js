define(['foundation'], function () {
    var app = angular.module("coreModule");
    app.directive('appDirective', ['$timeout', function ($timeout) {
        return {
            restrict: 'A'
            , link: function (scope, element, attrs) {
                angular.element(element).ready(function () {
                    angular.element(element).foundation();
                    $(document).on('click', 'div.accordian-header', function () {
                        if ($(this).parent().hasClass('active')) {
                            $(this).parent().removeClass('active');
                        }
                        else {
                            $(this).parent().addClass('active');
                        }
                    });
                    $('input').blur(function () {
                        // check if the input has any value (if we've typed into it)
                        if ($(this).val()) $(this).addClass('used');
                        else $(this).removeClass('used');
                    });
                    // Toggle search form
                    $('.toggle-search').click(function () {
                        if ($('.search-container').hasClass('active')) {
                            $('.search-container').removeClass('active');
                        }
                        else {
                            $('.search-container').addClass('active');
                        }
                    });
                    // Revel menu on scroll
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 400) {
                            $('.menu-bar-hidden').addClass('active');
                            $('.scroll-anchor').addClass('active');
                        }
                        else {
                            $('.menu-bar-hidden').removeClass('active');
                            $('.scroll-anchor').removeClass('active');
                        }
                    });
                    // Scroll up
                    $('.scroll-anchor').on('click', function (event) {
                        event.preventDefault();
                        $('html,body').animate({
                            scrollTop: 0
                        }, 500);
                    });
                    // Hide wrapper till assets load
                    $('.wrapper').addClass('ready');
                });
            }
        };
    }]);
});