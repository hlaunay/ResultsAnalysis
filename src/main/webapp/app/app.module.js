'use strict';

// init function for google endpoint loading
function init(){
    window.init();
}

// javascript closure
(function(){
    // module analysis setting
    angular
        .module('analysis', ['ngRoute'])
        .controller('mainController', ['$scope', '$location', '$window', '$rootScope', mainController]);

    // main module controller
    function mainController($scope, $location, $window, $rootScope){
        $rootScope.isBackEndReady = false;

        $window.init= function() {
            $scope.$apply($scope.load_athleteapi_lib);
        };

        $scope.getClass= function(path){
            var loc = $location.path().substr(0, path.length);
            if (loc == path) {
                return "active"
            } else {
                return ""
            }
        };

        $scope.load_athleteapi_lib= function() {
            var rootApi = 'http://results-analysis.appspot.com/_ah/api';
            gapi.client.load('athleteapi', 'v1', function() {
                console.log("athleteapi api loaded");
                $rootScope.isBackEndReady = true;
            }, rootApi);
        };
    }
})();