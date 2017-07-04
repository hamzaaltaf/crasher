var myapp = angular.module('AwaazApp', ['ngRoute','ngMaterial', 'ngMessages'])
    this.myDate = new Date();
    this.isOpen = false;   
    myapp.config(function($routeProvider,$locationProvider,$sceDelegateProvider){
            $locationProvider.hashPrefix('');
			$routeProvider
					.when('/', {
              templateUrl: 'templates/sign-in.html',
              controller: 'userController'
          })
          .when('/sign-in', {
							templateUrl: 'templates/sign-in.html',
							controller: 'userController'
					})
					.when('/sign-up', {
									templateUrl: 'templates/signup.html',
									controller: 'userController'
					})
					
    
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://www.transltr.org/**'
  ]);
    })

myapp.service('userDataService', function() {
  var user_id;
  
  var assignUserId = function(id) {
      user_id = id
      console.log('Called and now the user_id is ' + user_id)
  };
  var getUserId = function(){
      console.log('Called and returning the value ' + user_id)
      return user_id;
  };
  return {
    assignUserId: assignUserId,
    getUserId: getUserId
  };
});

myapp.factory('sessionService',['$http', function(){
  return {
    set: function(key, value){
        console.log('This is Key ' + key + ' ' + 'Value ' + value);
        sessionStorage.setItem(key,value)
    },
    get: function(key) {
        console.log('Called with the key ' + key);
        console.log(sessionStorage.getItem(key))
        return sessionStorage.getItem(key)
    },

    destroy: function(key) {
        return sessionStorage.removeItem(key)
    }
  }  
}])
