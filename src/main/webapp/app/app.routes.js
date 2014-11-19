(function(){
    angular
        .module('analysis')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/components/home/homeView.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'app/components/about/aboutView.html'
            })
            .otherwise({redirectTo: '/home'});
    }
})();