angular
  .module('app')
  .component('fountainHeader', {
    templateUrl: 'app/components/header/header.html',
    controller: headerController,
    controllerAs: 'vm'
  });

function headerController($rootScope, store, $location, authManager) {
  var vm = this;

  // if(store.get('user')){
  //   vm.username = store.get('user').username;
  // } else vm.username = null;


  function logout(){
    store.remove('user');
    store.remove('token');
    $location.path('/');
    //authManager.
  }
  vm.logout = logout;
}