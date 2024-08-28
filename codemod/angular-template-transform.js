module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const source = fileInfo.source;

  // Replace ng-if with *ngIf
  let transformedSource = source.replace(/\bng-if\b/g, "*ngIf");

  // Replace ng-repeat="item in items" with *ngFor="let item of items"
  transformedSource = transformedSource.replace(
    /\bng-repeat\s*=\s*"(.*?)\s+in\s+(.*?)"/g,
    '*ngFor="let $1 of $2"'
  );

  // Replace ng-model with [(ngModel)]
  transformedSource = transformedSource.replace(
    /\bng-model\s*=\s*"(.*?)"/g,
    '[(ngModel)]="$1"'
  );

  // Replace ng-bind with [ngBind]
  transformedSource = transformedSource.replace(
    /\bng-bind\s*=\s*"(.*?)"/g,
    '[ngBind]="$1"'
  );

  // Replace ng-class with [ngClass]
  transformedSource = transformedSource.replace(
    /\bng-class\s*=\s*"(.*?)"/g,
    '[ngClass]="$1"'
  );

  // Replace ng-click with (click)
  transformedSource = transformedSource.replace(
    /\bng-click\s*=\s*"(.*?)"/g,
    '(click)="$1"'
  );

  // Replace $ctrl.isVisible or vm.isVisible with isVisible
  transformedSource = transformedSource.replace(
    /([\'\"= ])(?:\$ctrl|vm)\.(\w+)/g,
    "$1$2"
  );

  return transformedSource;
};
