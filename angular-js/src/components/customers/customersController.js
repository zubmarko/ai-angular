export default function customersController($scope, dataService, $uibModal) {
  $scope.title = "Customers Page";
  $scope.customers = [];
  $scope.newlyAddedCustomer = null;

  $scope.categories = [
    {
      "id": 1,
      "title": "Operating Systems",
      "children": [
        {
          "id": 2,
          "title": "Windows",
          "children": [
            {
              "id": 3,
              "title": "Windows 10"
            },
            {
              "id": 4,
              "title": "Windows 7"
            }
          ]
        },
        {
          "id": 5,
          "title": "Linux",
          "children": [
            {
              "id": 6,
              "title": "Ubuntu"
            },
            {
              "id": 7,
              "title": "Fedora"
            }
          ]
        }
      ]
    },
    {
      "id": 8,
      "title": "Development Tools",
      "children": [
        {
          "id": 9,
          "title": "IDEs",
          "children": [
            {
              "id": 10,
              "title": "Visual Studio"
            },
            {
              "id": 11,
              "title": "IntelliJ IDEA"
            }
          ]
        },
        {
          "id": 12,
          "title": "Version Control",
          "children": [
            {
              "id": 13,
              "title": "Git"
            },
            {
              "id": 14,
              "title": "Subversion"
            }
          ]
        }
      ]
    }
  ];

  $scope.onDrop = function(event) {
    console.log('Item moved:', event.source.nodeScope.$modelValue);
  };
  // Fetch data using dataService
  dataService.getCustomers().then(function(response) {
    $scope.customers = response.data;
  }, function(error) {
    console.error("Error fetching customers data:", error);
  });

  // Open modal to create a customer
  $scope.openCreateCustomerModal = function() {
    const modalInstance = $uibModal.open({
      template: require('./create-customer-modal/createCustomerModal.html'),
      controller: 'createCustomerModalController'
    });

    modalInstance.result.then(function(newCustomer) {
      $scope.customers = [
        newCustomer,
        ...$scope.customers,
      ]
      // $scope.customers.push(newCustomer);
      $scope.newlyAddedCustomer = newCustomer;
    });
  };
}

customersController.$inject = ["$scope", "dataService", "$uibModal"];
