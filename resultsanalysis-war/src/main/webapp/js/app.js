(function(){
    var app = angular.module('analysis', []);

    app.directive('athleteForm', function(){
        return{
            restrict: 'E',
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