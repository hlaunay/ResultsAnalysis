'use strict';

(function(){
	angular
	.module('analysis')
	.factory('athleteService', athleteService);

	function athleteService($rootScope){
		return {
			list: function (callback) {
				if (!$rootScope.isBackEndReady) {
					console.log("athlete api is not ready");
					return;
				}
				console.log("getting athlete list");
				gapi.client.athleteapi.athleteEndPoint.getAthlete().execute(callback);
			},
			create: function (todo, callback) {
			},
			update: function (todo, callback) {
			},
			remove: function (todo, callback) {
			}
		};
	}
})();
