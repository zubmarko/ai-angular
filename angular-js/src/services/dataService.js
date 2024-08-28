export default function dataService($http) {
  return {
    getStatistics: function() {
      return $http.get('data/statistics.json');
    },
    getCustomers: function() {
      return $http.get('data/customers.json');
    }
  };
}

dataService.$inject = ['$http']; // Manually inject dependencies for minification safety
