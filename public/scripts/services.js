var CalculatorService = angular.module('MiPrimerService', [])
.service('logTest', function () {
   
    this.square = function (a) { 
    	console.log("entramos al servicio ="+a);
    };

    this.esNumero = function()
    {
    		console.log("entra a es numero");
    		 console.log(angular.isNumber(19));
    };
    
});