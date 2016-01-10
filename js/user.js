
angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.firstName = '';
$scope.lastName = '';
$scope.email = '';
$scope.password = '';

$scope.users = [
{id:1, firstName:'vivek', lastName:"yadav" }
];
$scope.incomplete = false; 
$scope.signup = function(id) {
  $scope.hideform = false;
  if (id == 'new') {
    $scope.incomplete = true;
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.email= '';
    $scope.password= '';
    }
};
$scope.$watch('firstName', function() {$scope.test();});
$scope.$watch('lastName', function() {$scope.test();});
$scope.$watch('email',function() {$scope.test();});
$scope.$watch('password',function() {$scope.test();});
});
