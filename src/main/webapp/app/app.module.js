// javascript closure
(function(){
    // module analysis setting
    angular
        .module('analysis', ['ngRoute'])
        .controller('mainController', ['$scope', '$location', '$window', mainController]);

    // main module controller
    function mainController($scope, $location, $window){
        $scope.getClass= function(path){
            var loc = $location.path().substr(0, path.length);
            if (loc == path) {
                return "active"
            } else {
                return ""
            }
        }

        $scope.load_athleteapi_lib= function() {
            var rootApi = 'http://localhost:8080/_ah/api';
            gapi.client.load('athleteapi', 'v1', function() {
                console.log("athleteapi api loaded");
                // Appeler l'api athleteapi
                gapi.client.athleteapi.athleteEndPoint.getAthlete().execute(function(resp) {
                    console.log(resp);
                });
            }, rootApi);
        }

        $window.init= function() {
            $scope.apply($scope.load_athleteapi_lib);
        }
    }

    // init function for google endpoint loading
    function init(){
        window.init();
    }
})();