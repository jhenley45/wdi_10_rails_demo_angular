
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',['ngRoute']);

// <<<<<<< HEAD
// StoreFront.config(['$routeProvider', function($routeProvider){
//     // Default Route
//     $routeProvider.otherwise({
//         templateUrl: '../assets/mainIndex.html',
//         controller: 'IndexCtrl'
//     });

// =======
// Angular routes
StoreFront.config(['$routeProvider', function($routeProvider){
    // Route to retrieve one product
    // '/product/:productId


    $routeProvider.when('/product/new',{
        templateUrl: '../assets/mainCreateProduct.html',
        controller: 'CreateProductCtrl'
    });

    $routeProvider.when('/product/:productId',{
        templateUrl: '../assets/mainProduct.html',
        controller: 'ProductCtrl'
    });

    // Default Route
    $routeProvider.otherwise({
        templateUrl: '../assets/mainIndex.html',
        controller: 'IndexCtrl'
    });
}]);
