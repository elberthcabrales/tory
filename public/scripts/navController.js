(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('NavController', NavController);


	function NavController($auth, $state, $location, $cookieStore) {
			var vm = this;
			vm.email="";
		// Controller
			vm.isAuthenticated = function() {
			  vm.email = $cookieStore.get('email');
			  return $auth.isAuthenticated();
			};

			vm.isActive = function(destination) {
				//console.log(destination===$location.path());
			    return destination===$location.path();
			};
			vm.logOut = function(){
				//console.log("entro");
				$cookieStore.remove('email');
				$auth.logout();
			};
		}


})();