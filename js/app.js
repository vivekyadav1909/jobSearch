        // create the module and name it jobSearch
        // also include ngRoute for all our routing needs
    var jobSearch = angular.module('jobSearch', ['ngRoute']);


        jobSearch.config(function($routeProvider) {
        $routeProvider
            //route for login page
            .when('/login', {
                templateUrl : 'index.html',
                controller : 'indexController'
            })
           
            // route for the myjobs page
            .when('/myjobs', {
                templateUrl : 'myjobs.html',
                controller : 'myjobsController'
            });

    });


    jobSearch.controller('indexController', function($scope) {
        $scope.message = 'Look! I am a job search page.';
    });

    jobSearch.controller('myJobsController', function($scope) {
        $scope.message = 'Look! I am a job search page.';
    });

   