export default function authService($q) {
    const STORAGE_KEY = 'isAuthenticated';
    let isAuthenticated = JSON.parse(localStorage.getItem(STORAGE_KEY)) || false;
  
    return {
      login: function(username, password) {
        if (username === 'admin' && password === 'password') {
          isAuthenticated = true;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(isAuthenticated));
          return $q.resolve();
        } else {
          return $q.reject('Invalid credentials');
        }
      },
      logout: function() {
        isAuthenticated = false;
        localStorage.removeItem(STORAGE_KEY);
      },
      isAuthenticated: function() {
        return isAuthenticated;
      }
    };
  }
  
  authService.$inject = ['$q'];
  