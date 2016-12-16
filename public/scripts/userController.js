(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('UserController', UserController);

	function UserController($http, logTest, $scope, webServiceFactory) {

		var vm = this;
		vm.pager = {};
		vm.users=[];
		vm.error;
		$scope.q = '';
		$scope.idToEdit=-1;
		$scope.showCrear;
		$scope.idDeleted;

		$scope.PrepareToEdit = function(user){
			$scope.idToEdit=user.id;
			//console.log(user);
			
		}
		$scope.PrepareToCreate = function(){

			$scope.showCrear=true;
		}
		//$scope.modelo="mi primero modelo con scope";

		vm.getUsers = function() {
			$scope.showCrear=false; //esconde el menu de crear
			// This request will hit the index method in the AuthenticateController
			// on the Laravel side and will return the list of users
			webServiceFactory.getUsers().success(function(users) {
					vm.users = users;
					vm.setPage(1);
					console.log(users);

				}).error(function(error) {
					vm.error = error;
				});
		}

		$scope.eliminarUsuario = function(id){
			
			webServiceFactory.deleteUser(id).then(
				function(response){
					console.log(response);
					$scope.idDeleted=response.data.id;
				},
				function(response){
						console.log("reposnose failure :"+response )
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
		
	 
	    vm.setPage = function(page) {
	        if (page < 1 || page > vm.pager.totalPages) {
	            return;
	        }
	 
	        // get pager object from service
	        vm.pager = logTest.GetPager(vm.users.length, page,5 );
	 
	        // get current page of items
	        vm.items = vm.users.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
	    	//console.log("entra metodo setPage");
	    }
	    //para correrlo al iniciar
	   /* initController();
 
	    function initController() {
	        // initialize to page 1
	         vm.setPage(1);
	    }*/
	  }
})();
