var CalculatorService = angular.module('MiPrimerService', [])
.service('logTest', function () {
    this.square = function (a) { 
    	console.log("entramos al servicio ="+a);
    };

});