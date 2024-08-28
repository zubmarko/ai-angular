export default function statisticsController($scope, dataService) {
  $scope.title = "Statistics Page";
  $scope.showRevenue = true; // This controls the visibility of the chart

  // Initialize the chart data
  $scope.labels = ["Users", "Sales"];
  $scope.series = ["Statistics"];
  $scope.data = [[]]; // Empty array to be filled with API data
  $scope.stats = []; // Empty array to be filled with API data

  // Fetch data using dataService
  dataService.getStatistics().then(
    function (response) {
      const stats = response.data;
      $scope.statistics = stats; // Keep the original data structure
      $scope.labels = ["Users", "Sales", "Revenue"];
      $scope.data = [[stats.users, stats.sales, stats.revenue]];
      $scope.stats = stats;

      $scope.options = {
        scales: {
          yAxes: [
            {
              ticks: {
                min: stats.users, // Set the minimum value for the y-axis
                max: stats.revenue, // Set the maximum value for the y-axis (adjust as needed)
              },
            },
          ],
        },
      };
    },
    function (error) {
      console.error("Error fetching statistics data:", error);
    }
  );

  // Toggle visibility of the chart
  $scope.handleToggle = function (isChecked) {
    $scope.showRevenue = isChecked;
    if (isChecked) {
      $scope.labels = ["Users", "Sales", "Revenue"];
      $scope.data = [[$scope.stats.users, $scope.stats.sales, $scope.stats.revenue]];
      $scope.options.scales.yAxes[0].ticks.max = $scope.stats.revenue;
    } else {
      $scope.labels = ["Users", "Sales"];
      $scope.data = [[$scope.stats.users, $scope.stats.sales]];
      $scope.options.scales.yAxes[0].ticks.max = $scope.stats.sales;
    }
  },

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
}

statisticsController.$inject = ["$scope", "dataService"];
