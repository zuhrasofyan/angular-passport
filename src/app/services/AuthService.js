angular
  .module('app')
  .service('AuthService', function ($http, store, $location){
    var vm = this;
    //var isAuthenticated = false;
    
    function submitLogin(loginData) {
      $http.post('http://localhost:1337/auth/login', {
        username: loginData.email,
        password: loginData.password
      }).then(function(result){
        console.log(result);
        store.set('user', result.data.user);
        store.set('token', result.data.token );
        $location.path('/dashboard');
        //console.log(jwtHelper.decodeToken(store.get('token')));
        //console.log(jwtHelper.getTokenExpirationDate(store.get('token')));

      })
    };
    
    

    
    //register the functions
    vm.submitLogin = submitLogin;
    //vm.request = request;
    //vm.responseError = responseError;


  })