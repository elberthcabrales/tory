(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('UserController', UserController);

	function UserController($http, logTest, $scope) {

		var vm = this;
		vm.pager = {};
		vm.users=[];
		vm.error;

		//$scope.modelo="mi primero modelo con scope";

		vm.getUsers = function() {

			// This request will hit the index method in the AuthenticateController
			// on the Laravel side and will return the list of users
			$http.get('api/home').success(function(users) {
					vm.users = users;
					vm.setPage(1);
					//console.log(users);
					//console.log(users.slice(1,3));
				    //$scope.modelo = users;
					//console.log(users.length);
				}).error(function(error) {
					vm.error = error;
				});
		}
		vm.watch = function(){
			return logTest.esNumero();
		}
		/*prueba de $scope
		$scope.test= "hola mundo";
		$scope.testFuncion = function(){
			console.log('funcion llamada desde $scope');
		}
		*/

		/* metodo para llamar a la paginacion*/
		 //['item 1','item 2','item 3','item 4',
						//'item 5','item 6','item 7','item 8','item 9'];
		
		
	 
	    vm.setPage = function(page) {
	        if (page < 1 || page > vm.pager.totalPages) {
	            return;
	        }
	 
	        // get pager object from service
	        vm.pager = logTest.GetPager(vm.users.length, page);
	 
	        // get current page of items
	        vm.items = vm.users.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
	    	console.log("entra metodo setPage");
	    }
	   /* initController();
 
	    function initController() {
	        // initialize to page 1
	         vm.setPage(1);
	    }*/
	  }
})();
