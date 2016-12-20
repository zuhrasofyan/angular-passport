angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

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
}
