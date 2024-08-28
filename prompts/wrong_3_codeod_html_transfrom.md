# Migrate HTML Templates angular.js to angular

1. Migrate HTML Templates angular.js to angular
2. create js codeshift  to replace "ng-if" to "*ngIf" and "ng-repeat="item in items"" to "*ngFor="let item of items""
3. add logic to replace ng-model to [(ngModel)]
4. add tests to file 
```
// convert-to-array-annotation.test.js
const transform = require("../angular-template-transform");
const jscodeshift = require("jscodeshift");

describe("Codemod - Convert to Array Annotation", () => {
  const api = { jscodeshift };

  const runTest = (input, expectedOutput) => {
    const fileInfo = { source: input };
    const options = {};
    const result = transform(fileInfo, api, options);
    // console.log('result', result);
    expect(result).toBe(expectedOutput);
  };

  describe("converts ng-if to *ngIf", () => {
    test("converts ng-if to *ngIf", () => {
      const input = 
    <div ng-if="condition"></div>
    ;

      const expectedOutput = 
    <div *ngIf="condition"></div>
    ;

      runTest(input, expectedOutput);
    });
    test("converts ng-if to *ngIf", () => {
      const input = 
    <div ng-if="condition && condition2"></div>
    ;

      const expectedOutput = 
    <div *ngIf="condition && condition2"></div>
    ;

      runTest(input, expectedOutput);
    });
  });

  describe("converts ng-repeat to *ngFor", () => {
    test("converts ng-if to *ngIf", () => {
        const input = 
        <div ng-repeat="item in items">{{item}}</div>
      ;
  
        const expectedOutput = 
        <div *ngFor="let item of items">{{item}}</div>
      ;
  
        runTest(input, expectedOutput);
      });
  });
});
```
for ng-model replacement
5. fix ng-bind to ngBind
6. add also logic to replace ng-model, ng-bind, ng-class
7. add also for ng-click
8. add also some complex html markup to test all conditions together
9. fix ng-bind to ngBind
