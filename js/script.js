        // create the module and name it jobSearch
        // also include ngRoute for all our routing needs
    var app = angular.module('jobSearch', ['ngRoute']);


        app.config(function($routeProvider) {
        $routeProvider

            

            // route for the main page
            .when('/', {
                templateUrl : 'main.html',
                controller  : 'mainController'
            })
            
            // route for the contact page
            .when('/myjobs', {
                templateUrl : 'myjobs.html',
                controller  : 'contactController'
            });
    });

    app.controller('mainController', ['$scope', function($scope) {
    $scope.formInfo = {};
    $scope.saveData = function() {
      $scope.nameRequired = '';
      $scope.emailRequired = '';
      $scope.passwordRequired = '';
      if (!$scope.formInfo.name) {
        $scope.nameRequired = 'Name Required';
      }

      if (!$scope.formInfo.Email) {
        $scope.emailRequired = 'Email Required';
      }

      if (!$scope.formInfo.Password) {
        $scope.passwordRequired = 'Password Required';
      }
      else{
        alert("Signup Successful. Please Login into your account ");
     
    
    $scope.submit=function()
      {
         if($scope.username==$scope.formInfo.Email && $scope.password==$scope.formInfo.Password)
         {
        var name=$scope.formInfo.name;
        var user=$scope.username;
        var pass=$scope.password;
        alert("welcome "+name);
        window.location.href = "myjobs.html";
        }else{
           alert("Invalid Login");
         }
      }
    }
    }; 
    $scope.submit=function()
      {
         if($scope.username=='vivek@gmail.com' && $scope.password=='vivek')
         {
        var name='vivek';
        var user=$scope.username;
        var pass=$scope.password;
        alert("welcome "+name);
        window.location.href = "myjobs.html";
        }else{
           alert("Invalid Login");
         }
      } 
  }]);
