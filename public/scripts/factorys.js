(function(){
	"use strict";
	angular
	.module("authApp")
	.factory('webServiceFactory', function($http){
		function getUsers(){
			return $http.get('api/home');
		}
		function deleteUser(id)
		{

			//return $http.post('api/user/delete/:id',{id:id});
			return $http.delete('api/user/delete/'+id);
		}
		return{
			getUsers: getUsers,
			deleteUser: deleteUser
		}

	});
})();