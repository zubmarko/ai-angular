export default function loginController($scope, $location, authService) {
    $scope.username = '';
    $scope.password = '';
    $scope.errorMessage = '';
  
    $scope.login = function() {
      authService.login($scope.username, $scope.password)
        .then(function() {
          $location.path('/statistics'); // Redirect to a protected route after successful login
        })
        .catch(function(error) {
          $scope.errorMessage = error;
        });
    };
  }
  
  loginController.$inject = ["$scope", "$location", "authService"];
