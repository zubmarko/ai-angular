# Migrate HTML Templates angular.js

1. Migrate HTML Templates angular.js to angular display as table all required changes only for HTML
2. please use angular 18 instead of 2+
3. ng-bind can be replaced with ngBind?
4. remove from table ng-app and group rest rows for example - Binding - Forms and find similar groups
5. let's try to create node.js script with main function that get all files and modify HTML Files keep more functional programming style and let's create function transformBinding and apply it to html file/or just string and replace ng-class -> [ngClass] and rest changes from Binding category
6. add function for Structural Directives
7. add function for Events
8. add also function for Routing and return only script.js code
9. I would also add function to modify "vm.isFlag" to "isFlag", "$scope.isFlag" to "isFlag" and "$ctrl.isFlag" to "isFlag"
10. let's change logic for "ng-repeat" it should works in next way input: "<div ng-repeat="item in items">{{item}}</div>" output "<div *ngFor="let item of items">{{item}}</div>"
11. add export for each transform functions
12. add jest test for each function transformBinding, transformStructuralDirectives, transformEvents, transformRouting, transformControllerReferences, getAllFiles,
13. TypeError: Cannot read properties of undefined (reading 'forEach') on test
