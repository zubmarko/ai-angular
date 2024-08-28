# Setup Demo Angular.js application

1. Create angular.js application with pages Statistics and Customers
2. create service to fetch data on pages
3. use webpack for project
4. in customers page create as sidebar angular js tree component add modal to create customer via fake api submit
5. [webpack-cli] Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
6. Module not found: Error: Can't resolve 'html-loader'
7. Cannot GET /data/statistics.json
8. please change structure to components folder
9. createCustomerModalController put in folder
10. provide code of statistics.html only
11. [object Module]
12. please fix error for my webpack.config [object Module]
13. please provide code only for component createCustomerModal with styles
14. display code of treeComponent
15. treeComponent should have separate html and js
16. add toggle bootstap control to show/hide Total Revenue in Statistics Page
17. please create toggle as separate component
18. add ng-animate for toggle
19. provide just code of statistics.html with ng-animate
20. add scss to project
21. change titles when navigate via pages
22. angular-ui-bootstrap include to app bootsrap styles
23. add it via package json and please choose correct version of bootstrap
24. add login route with auth guard , and protect routes statistics and customers
25. error Unknown provider: dataServiceProvider <- dataService <- statisticsController
26. app.js missed authService
27. add logic to store isAuthenticated to localStorage and after refresh the page keep user logged in
28. create header component like bootstap add dropdown with user name and dropdown to loggout header should be only in statistics and customers pages
29. add <nav><a href="#!statistics">Statistics</a><a href="#!customers">Customers</a></nav> to header
30. change city to list of biggest cities in Ukraine and it should be select or dropdown
31. add validations to each field also add logic to save data in scope after submit
32. change user list to Panels and add ng-animate with highlight light green background color after add new customer
33. Statistics Page add angular.js any svg chart library and create simple chart
34. keep previous logic for statistics from dataService.getStatistics and just display it as chart
35. please keep all logic for $scope.handleToggle and render chart
36. <canvas id="bar" class="chart chart-bar" chart-data="data" chart-labels="labels" chart-series="series" chart-click="onClick"> not render data
37. min and max of axis
38. on handleToggle and if showRevenue is true $scope.options max should be 70 instead of 100
39. $scope.options.scales.yAxes[0].ticks.max not change value
40. the same how to force set value
41. add software categories angular.js tree componnet use popular library for tree componenet
42. enable drag and drop
43. do i need data-nodrop-enabled
44. could you check code because drag and drop not working
45. add collapse to tree component
46. click on <a ng-click="$ctrl.toggle(node)" because drag event intersect
47. add animation to collapse
