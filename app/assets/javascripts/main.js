<<<<<<< HEAD
// TODO: Add angular application module and routes.
=======
>>>>>>> 0066b905c63ce1a88ba1da566db6da7e46a1ecb5
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',['ngRoute']);

<<<<<<< HEAD
StoreFront.config(['$routeProvider', function($routeProvider){
    // Default Route
    $routeProvider.otherwise({
        templateUrl: '../assets/mainIndex.html',
        controller: 'IndexCtrl'
    });

=======
// Angular routes
StoreFront.config(['$routeProvider', function($routeProvider){
>>>>>>> 0066b905c63ce1a88ba1da566db6da7e46a1ecb5
    // Route to retrieve one product
    // '/product/:productId
    $routeProvider.when('/product/:productId',{
        templateUrl: '../assets/mainProduct.html',
        controller: 'ProductCtrl'
    });
<<<<<<< HEAD
}]);

=======

    // Default Route
    $routeProvider.otherwise({
        templateUrl: '../assets/mainIndex.html',
        controller: 'IndexCtrl'
    });
}]);
>>>>>>> 0066b905c63ce1a88ba1da566db6da7e46a1ecb5
