 myapp.controller('userController',function ($scope, $mdSidenav, $timeout, $route, $rootScope, $routeParams, $http, $location, sessionService) {
    console.log('Initialized');
    $scope.sessionService = sessionService;
})