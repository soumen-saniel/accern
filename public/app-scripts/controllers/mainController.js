define(function () {
    var app = angular.module('coreModule');
    app.controller('mainController', ['$timeout', function ($timeout) {
        var ctrl = this;
        ctrl.clock = "loading clock...";
        ctrl.tickInterval = 1000;
        var tick = function () {
            ctrl.clock = Date.now();
            $timeout(tick, ctrl.tickInterval);
        }
        $timeout(tick, ctrl.tickInterval);
    }]);
})