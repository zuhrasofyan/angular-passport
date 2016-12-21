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

    // otherwise will take care of routing the user to the specified url
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('APIInterceptor');
}
