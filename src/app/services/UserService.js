angular
  .module('app')
  .service('UserService', UserService);

function UserService(store) {
  vm =this;
  var currentUser = null, currentToken = null;

  function setCurrentUser (user) {
    currentUser = user;
    store.set('user', user);
    return currentUser;
  }

  function getCurrentUser () {
    if (!currentUser) {
      currentUser = store.get('user');
    }
    return currentUser;
  };

  function getCurrentToken() {
    if (!currentToken) {
      currentToken = store.get('token');
    }
    return currentToken;
  }

  vm.setCurrentUser = setCurrentUser;
  vm.getCurrentUser = getCurrentUser;
  vm.getCurrentToken = getCurrentToken;

}
