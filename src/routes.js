angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
 

  $stateProvider
    .state('home', {
      url: '/',
      component: 'app'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    });

    $urlRouterProvider.otherwise('/');

    //intercept all http with auth header that taken from local storage. ()
    $httpProvider.interceptors.push(function($q, store){
      return {
        'request' : function(config) {
          var currentToken = store.get('token');
          var access_token = currentToken ? currentToken : null;
          if (access_token) {
            config.headers.authorization = 'Bearer ' + store.get('token');
          }
          return config;
        }
      }
    });
}
