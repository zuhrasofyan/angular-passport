angular
  .module('app')
  .service('AuthService', function ($http, $rootScope, store, $location, UserService, authManager){
    var vm = this;
    //var isAuthenticated = false;
    
    function submitLogin(loginData) {
      $http.post('http://localhost:1337/auth/login', {
        username: loginData.email,
        password: loginData.password
      }).then(function(result){
        //console.log(result);
        if (store.get('user')) {
          store.remove('user');
        }
        if (store.get('token')) {
          store.remove('token');
        }
        UserService.setCurrentUser(result.data.user);
        UserService.setCurrentToken(result.data.token);
        authManager.authenticate();
        console.log(authManager.isAuthenticated());
        //console.log(authManager.authenticate());
        //$location.path('/dashboard');
        //console.log(jwtHelper.decodeToken(store.get('token')));
        //console.log(jwtHelper.getTokenExpirationDate(store.get('token')));

      })
    };
    
    

    
    //register the functions
    vm.submitLogin = submitLogin;
    //vm.request = request;
    //vm.responseError = responseError;


  })