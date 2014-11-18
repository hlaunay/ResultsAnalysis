// javascript closure
(function(){

    // init function for google endpoint loading
    function init(){
        windows.init();
    }

    // module analysis setting
    angular
        .module('analysis', ['ngRoute'])
        .controller('mainController', mainController);

    // main module controller
    function mainController($scope, $windows){
        $windows.init= function() {
            $scope.apply($scope.load_athleteapi_lib);
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
    }
})();