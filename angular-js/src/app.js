import angular from 'angular';
import 'angular-route';
import 'angular-ui-bootstrap';
import 'angular-animate';
// import '~node_modules/chart.js/Chart.min.js';
import 'chart.js';
import 'angular-chart.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

// Import services
import dataService from './services/dataService';
import authService from './services/authService';
import authGuard from './services/authGuard';

// Import components and controllers
import toggleComponent from './components/toggle/toggleComponent';
import treeComponent from './components/tree/treeComponent';
import headerComponent from './components/header/headerComponent'; // Import headerComponent
import statisticsController from './components/statistics/statisticsController';
import customersController from './components/customers/customersController';
import loginController from './components/login/loginController';
import createCustomerModalController from './components/customers/create-customer-modal/createCustomerModalController';
import 'angular-ui-tree';
import 'angular-ui-tree/dist/angular-ui-tree.min.css'; 

angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'chart.js', 'ui.tree'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/login', {
        template: require('./components/login/login.html'),
        controller: 'loginController',
        title: 'Login'
      })
      .when('/statistics', {
        template: require('./components/statistics/statistics.html'),
        controller: 'statisticsController',
        resolve: { auth: authGuard },
        title: 'Statistics'
      })
      .when('/customers', {
        template: require('./components/customers/customers.html'),
        controller: 'customersController',
        resolve: { auth: authGuard },
        title: 'Customers'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
  .component('toggleComponent', toggleComponent)
  .component('treeComponent', treeComponent)
  .component('headerComponent', headerComponent) // Register headerComponent
  .controller('statisticsController', statisticsController)
  .controller('customersController', customersController)
  .controller('loginController', loginController)
  .controller('createCustomerModalController', createCustomerModalController)
  .service('dataService', dataService)
  .service('authService', authService)
  .service('authGuard', authGuard)
  .run(['$rootScope', '$route', 'authService', '$location', function($rootScope, $route, authService, $location) {
    $rootScope.$on('$routeChangeSuccess', function() {
      document.title = $route.current.title || 'AngularJS App';

      // Show header only on protected routes
      $rootScope.showHeader = $route.current.title !== 'Login';
      if ($rootScope.showHeader) {
        $rootScope.username = 'User'; // Replace with dynamic username if needed
        $rootScope.logout = function() {
          authService.logout();
          $location.path('/login');
        };
      }
    });
  }]);
