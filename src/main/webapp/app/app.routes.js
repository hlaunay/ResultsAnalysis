(function(){
    angular
        .module('analysis')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });
    }
})();