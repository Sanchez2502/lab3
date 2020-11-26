(function() {
'use strict';

angular.module('application', [])

.controller('AppController', function ($scope) {
    $scope.product = "";
    $scope.result = "";

    $scope.calculation = function(){
        var masiv = "," + $scope.product + ",";
        var rift = masiv.split(/,[\s,]*/);

        rift.pop();
        rift.shift();

        if(rift.length == 0){
            $scope.result = "Будь ласка, уведіть дані!";
        }
        else if(rift.length <= 3){
            $scope.result = "На здоров'я!";
        }
        else{
            $scope.result = "Це забагато!";
        }
    };
});
})();