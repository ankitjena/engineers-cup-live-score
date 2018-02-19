'use strict';

/**
 * @ngdoc function
 * @name scoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoreApp
 */
angular.module('scoreApp')
  .controller('MainCtrl', function ($scope, $location , loginservice) {

    if(loginservice.isLoggedIn()) $location.path('/admin');
    
    $scope.password = "";
    $scope.login = function(){
      if($scope.password === "admin") {
        loginservice.setAdmin();
        $location.path('/admin');
      } else {
        alert("Incorrect Password");
      }
    };
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
