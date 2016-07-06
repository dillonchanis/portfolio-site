(function() {

  var app = angular.module('app', ['ngRoute', 'ngAnimate']);


  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'templates/about.html'
      })
      .when('/work', {
        templateUrl: 'templates/work.html'
      })
      .when('/contact', {
        templateUrl: 'templates/contact.html'
      })
      .otherwise('/');

  }]);

}());