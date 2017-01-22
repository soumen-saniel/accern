define(function(){
    var app = angular.module('coreModule');
    app.config(function($routeProvider, $stateProvider, $urlRouterProvider){
        //-----------------------------------------------------------------------------------------------
        //Angular ui router configuration
        //-----------------------------------------------------------------------------------------------
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'mainController as main'
        })
        .state('company',{
            url: '/company',
            templateUrl: '/views/company.html',
            controller: 'mainController as main'
        })
        .state('resource',{
            url: '/resource',
            templateUrl: '/views/resource.html',
            controller: 'mainController as main'
        })
        .state('contact',{
            url: '/contact',
            templateUrl: '/views/contact.html',
            controller: 'mainController as main'
        })
    });
})