angular.module('meanAuth', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
  })

  // home page
  .controller('HomeCtrl', function ($scope) {
    $scope.title = 'MEAN Authentication';
  })

  // login page
  .controller('LoginCtrl', function ($scope) {
    $scope.title = 'Login'
  })

  .controller('SignupCtrl', function ($scope) {
    $scope.title = 'Sign Up'
  })