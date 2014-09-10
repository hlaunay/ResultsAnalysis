(function(){
    var app = angular.module('analysis', []);

    app.directive('athleteForm', function(){
        return{
            restrict: 'AE',
            // declare the directive scope as private (and empty)
            scope: {},
            templateUrl: 'tpl/athlete-form.html',
            controller: function(){
                this.athlete={};

                this.search = function(){
                    console.log("Search athlete");
                    // reset form
                    this.athlete={};
                };
            },
            controllerAs: 'athleteFormCtrl'
        };
    });
})();