(function(){
    angular
        .module('analysis')
        .controller('homeController', homeController);

    function homeController($scope) {
        $scope
            .message="message de test"
    }
})();