(function() {

	'use strict';

	angular
		.module('authApp')
		.controller('UserController', UserController);

	function UserController($http, logTest, $scope, $filter) {

		var vm = this;

		vm.users;
		vm.error;
		//$scope.modelo="mi primero modelo con scope";

		vm.getUsers = function() {

			// This request will hit the index method in the AuthenticateController
			// on the Laravel side and will return the list of users
			$http.get('api/home').success(function(users) {
				vm.users = users;
			//	$scope.modelo = users;
				console.log(users);
			}).error(function(error) {
				vm.error = error;
			});
		}
		vm.watch = function(){
			return logTest.esNumero();

		}

		/*pagination-----------------*/
	$scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = ['item1','item2','item3','item4','item5','item6','item7',
    		'item8','item9','item10','item11','item12','item13','item14'];
    $scope.q = '';
    
    $scope.getData = function () {
      // needed for the pagination calc
      // https://docs.angularjs.org/api/ng/filter/filter
  
      //return $filter('filter')($scope.data, $scope.q);
     
       // manual filter
       // if u used this, remove the filter from html, remove above line and replace data with getData()
       
       /* var arr = [];
        if($scope.q == '') {
            arr = $scope.data;
        } else {
            for(var ea in $scope.data) {
                if($scope.data[ea].indexOf($scope.q) > -1) {
                    arr.push( $scope.data[ea] );
                }
            }
        }
        console.log(arr);
        return arr;*/

       
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
    
  }
	
})();
var app=angular.module('authApp');

app.filter('startFrom', function() {
    return function(input, start) {
    	console.log(start);
        start = +start; //parse to int
        return input.slice(start);
    }
});