const transform = require("../angular-template-transform");
const jscodeshift = require("jscodeshift");

describe("Codemod - Convert to Angular Syntax", () => {
  const api = { jscodeshift };

  const runTest = (input, expectedOutput) => {
    const fileInfo = { source: input };
    const options = {};
    const result = transform(fileInfo, api, options);
    expect(result).toBe(expectedOutput);
  };

  describe("converts ng-if to *ngIf", () => {
    test("converts ng-if to *ngIf", () => {
      const input = `
      <div ng-if="condition"></div>
      `;

      const expectedOutput = `
      <div *ngIf="condition"></div>
      `;

      runTest(input, expectedOutput);
    });

    test("converts ng-if with multiple conditions to *ngIf", () => {
      const input = `
      <div ng-if="condition && condition2"></div>
      `;

      const expectedOutput = `
      <div *ngIf="condition && condition2"></div>
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("converts ng-repeat to *ngFor", () => {
    test("converts ng-repeat to *ngFor", () => {
      const input = `
      <div ng-repeat="item in items">{{item}}</div>
      `;

      const expectedOutput = `
      <div *ngFor="let item of items">{{item}}</div>
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("converts ng-model to [(ngModel)]", () => {
    test("converts simple ng-model to [(ngModel)]", () => {
      const input = `
      <input ng-model="user.name">
      `;

      const expectedOutput = `
      <input [(ngModel)]="user.name">
      `;

      runTest(input, expectedOutput);
    });

    test("converts ng-model with different spacing to [(ngModel)]", () => {
      const input = `
      <input   ng-model = "user.email" >
      `;

      const expectedOutput = `
      <input   [(ngModel)]="user.email" >
      `;

      runTest(input, expectedOutput);
    });

    test("converts ng-model with additional attributes", () => {
      const input = `
      <input type="text" ng-model="user.address" class="form-control">
      `;

      const expectedOutput = `
      <input type="text" [(ngModel)]="user.address" class="form-control">
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("converts ng-bind to [ngBind]", () => {
    test("converts ng-bind to [ngBind]", () => {
      const input = `
      <span ng-bind="user.name"></span>
      `;

      const expectedOutput = `
      <span [ngBind]="user.name"></span>
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("converts ng-class to [ngClass]", () => {
    test("converts ng-class to [ngClass]", () => {
      const input = `
      <div ng-class="{'active': isActive}"></div>
      `;

      const expectedOutput = `
      <div [ngClass]="{'active': isActive}"></div>
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("converts ng-click to (click)", () => {
    test("converts ng-click to (click)", () => {
      const input = `
      <button ng-click="doSomething()">Click me</button>
      `;

      const expectedOutput = `
      <button (click)="doSomething()">Click me</button>
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("converts $ctrl and vm to property", () => {
    test("removes $ctrl prefix from property access", () => {
      const input = `
      <div ng-if="$ctrl.isVisible"></div>
      `;

      const expectedOutput = `
      <div *ngIf="isVisible"></div>
      `;

      runTest(input, expectedOutput);
    });

    test("removes vm prefix from property access", () => {
      const input = `
      <div ng-if="vm.isVisible"></div>
      `;

      const expectedOutput = `
      <div *ngIf="isVisible"></div>
      `;

      runTest(input, expectedOutput);
    });

    test("handles multiple instances", () => {
      const input = `
      <div ng-if="$ctrl.isVisible && vm.isEnabled"></div>
      `;

      const expectedOutput = `
      <div *ngIf="isVisible && isEnabled"></div>
      `;

      runTest(input, expectedOutput);
    });
  });

  describe("complex HTML markup", () => {
    test("transforms all AngularJS bindings to Angular bindings", () => {
      const input = `
      <div ng-if="$ctrl.isVisible" ng-class="{'active': vm.isActive}">
        <ul ng-repeat="item in $ctrl.items">
          <li ng-bind="item.name"></li>
          <input ng-model="$ctrl.newItemName" ng-click="vm.addItem()" />
        </ul>
      </div>
      `;

      const expectedOutput = `
      <div *ngIf="isVisible" [ngClass]="{'active': isActive}">
        <ul *ngFor="let item of items">
          <li [ngBind]="item.name"></li>
          <input [(ngModel)]="newItemName" (click)="addItem()" />
        </ul>
      </div>
      `;

      runTest(input, expectedOutput);
    });
  });
});
