angular
  .module('app')
  .component('login', {
    //restrict: 'E',
    templateUrl: 'app/login.html',
    controller : loginController,
    controllerAs: 'vm'
  });

  function loginController ($scope, $http, $q, store, $location, jwtHelper){
      var vm = this;
      var deferred = $q.defer();

      vm.hello = "hello world";
      vm.formLogin = {};

      vm.myToken = '';

      function submitLogin(loginData) {
        console.log(loginData.email);
        $http.post('http://localhost:1337/auth/login', {
          username: loginData.email,
          password: loginData.password
        }).then(function(result){
          console.log(result);
          vm.result = result;
          store.set('user', result.data.user);
          store.set('token', result.data.token );
          //$location.path('/');
          console.log(store.get('token'));
          vm.myToken = jwtHelper.decodeToken(store.get('token'));
          console.log(jwtHelper.getTokenExpirationDate(store.get('token')));

        })
      }
      vm.submitLogin = submitLogin;
    }
