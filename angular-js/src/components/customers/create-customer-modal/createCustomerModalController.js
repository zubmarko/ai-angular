export default function createCustomerModalController($scope, $uibModalInstance) {
  $scope.newCustomer = {};
  $scope.submitted = false; // To track form submission

  // List of biggest cities in Ukraine
  $scope.cities = [
    "Kyiv",
    "Kharkiv",
    "Odesa",
    "Dnipro",
    "Donetsk",
    "Zaporizhzhia",
    "Lviv",
    "Kryvyi Rih",
    "Mykolaiv",
    "Mariupol"
  ];

  $scope.submit = function (form) {
    $scope.submitted = true;
    if (form.$valid) {
      $uibModalInstance.close($scope.newCustomer);
      // Save data to the scope after submission
      $scope.savedCustomer = angular.copy($scope.newCustomer);
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}
