'use strict';

(function(){
    angular
        .module('analysis')
        .controller('homeController', ['$scope', 'athleteService', homeController]);

    function homeController($scope, athleteService) {
        $scope
            .message="message de test"
        athleteService.list(function(resp){
            console.log(resp);
        });
    }
})();