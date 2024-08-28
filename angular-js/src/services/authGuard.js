export default function authGuard($q, $location, authService) {
    const deferred = $q.defer();
  
    if (authService.isAuthenticated()) {
      deferred.resolve();
    } else {
      deferred.reject();
      $location.path('/login');
    }
  
    return deferred.promise;
  }
  

  authGuard.$inject = ['$q', '$location', 'authService']; // Manually inject dependencies for minification safety
