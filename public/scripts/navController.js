(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('NavController', NavController);


	function NavController($auth, $state, $location) {
			var vm = this;

		// Controller
			vm.isAuthenticated = function() {
			  return $auth.isAuthenticated();
			};

			vm.isActive = function(destination) {
				//console.log(destination===$location.path());
			    return destination===$location.path();
			};
			vm.logOut = function(){
				//console.log("entro");
				$auth.logout();
			};
		}


})();