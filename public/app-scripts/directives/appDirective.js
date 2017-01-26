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
                    function increment(){
                        var val = Number($('#number-of-clients').text());
                        val = val + 1;
                        $('#number-of-clients').text(val)
                        $timeout(function(){
                            if( val < 40){
                                increment();
                            }
                        }, 50);
                    }
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 400) {
                            $('.menu-bar-hidden').addClass('active');
                            $('.scroll-anchor').addClass('active');
                        }
                        else {
                            $('.menu-bar-hidden').removeClass('active');
                            $('.scroll-anchor').removeClass('active');
                        }
                        // Animate number on scroll
                        if($('#number-of-clients').length > 0){
                            var hT = $('#number-of-clients').offset().top,
                                hH = $('#number-of-clients').outerHeight(),
                                wH = $(window).height();
                            if($(this).scrollTop() > (hT+hH-wH)){
                                var num = Number($('#number-of-clients').text());
                                if(num === 0){
                                    increment();
                                }
                            }
                        }
                        // Animate circles on scroll
                        if($('.circle-animation').length > 0){
                            var ChT = $('.circle-animation').offset().top,
                            ChH = $('.circle-animation').outerHeight();
                            if($(this).scrollTop() > (ChT - wH)){
                                $('.circle-animation').addClass('active');
                            }else{
                                $('.circle-animation').removeClass('active');
                            }
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