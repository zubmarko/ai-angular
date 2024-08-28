const fs = require('fs');
const path = require('path');
const {
    transformBinding,
    transformStructuralDirectives,
    transformEvents,
    transformRouting,
    transformControllerReferences,
    getAllFiles
} = require('../transform-html');

// Mocking fs and path modules for getAllFiles function
jest.mock('fs');
jest.mock('path');

describe('transformBinding', () => {
    it('should replace ng-class with [ngClass]', () => {
        const input = '<div ng-class="someClass"></div>';
        const output = '<div [ngClass]="someClass"></div>';
        expect(transformBinding(input)).toBe(output);
    });

    it('should replace ng-style with [ngStyle]', () => {
        const input = '<div ng-style="someStyle"></div>';
        const output = '<div [ngStyle]="someStyle"></div>';
        expect(transformBinding(input)).toBe(output);
    });

    it('should replace ng-bind with [ngBind]', () => {
        const input = '<div ng-bind="someText"></div>';
        const output = '<div [ngBind]="someText"></div>';
        expect(transformBinding(input)).toBe(output);
    });

    it('should replace ng-src with [src]', () => {
        const input = '<img ng-src="someImageSource" />';
        const output = '<img [src]="someImageSource" />';
        expect(transformBinding(input)).toBe(output);
    });
});

describe('transformStructuralDirectives', () => {
    it('should replace ng-if with *ngIf', () => {
        const input = '<div ng-if="someCondition"></div>';
        const output = '<div *ngIf="someCondition"></div>';
        expect(transformStructuralDirectives(input)).toBe(output);
    });

    it('should replace ng-show with *ngIf', () => {
        const input = '<div ng-show="someCondition"></div>';
        const output = '<div *ngIf="someCondition"></div>';
        expect(transformStructuralDirectives(input)).toBe(output);
    });

    it('should replace ng-hide with [hidden]', () => {
        const input = '<div ng-hide="someCondition"></div>';
        const output = '<div [hidden]="someCondition"></div>';
        expect(transformStructuralDirectives(input)).toBe(output);
    });

    it('should replace ng-switch with *ngSwitch', () => {
        const input = '<div ng-switch="someSwitch"></div>';
        const output = '<div *ngSwitch="someSwitch"></div>';
        expect(transformStructuralDirectives(input)).toBe(output);
    });

    it('should replace ng-repeat with *ngFor', () => {
        const input = '<div ng-repeat="item in items">{{item}}</div>';
        const output = '<div *ngFor="let item of items">{{item}}</div>';
        expect(transformStructuralDirectives(input)).toBe(output);
    });
});

describe('transformEvents', () => {
    it('should replace ng-click with (click)', () => {
        const input = '<button ng-click="handleClick()"></button>';
        const output = '<button (click)="handleClick()"></button>';
        expect(transformEvents(input)).toBe(output);
    });

    it('should replace ng-dblclick with (dblclick)', () => {
        const input = '<button ng-dblclick="handleDblClick()"></button>';
        const output = '<button (dblclick)="handleDblClick()"></button>';
        expect(transformEvents(input)).toBe(output);
    });

    // Add more tests for other event transformations if needed
});

describe('transformRouting', () => {
    it('should replace ng-href with [routerLink]', () => {
        const input = '<a ng-href="/home"></a>';
        const output = '<a [routerLink]="/home"></a>';
        expect(transformRouting(input)).toBe(output);
    });
});

describe('transformControllerReferences', () => {
    it('should replace vm. with an empty string', () => {
        const input = '<div>{{vm.isFlag}}</div>';
        const output = '<div>{{isFlag}}</div>';
        expect(transformControllerReferences(input)).toBe(output);
    });

    it('should replace $scope. with an empty string', () => {
        const input = '<div>{{$scope.isFlag}}</div>';
        const output = '<div>{{isFlag}}</div>';
        expect(transformControllerReferences(input)).toBe(output);
    });

    it('should replace $ctrl. with an empty string', () => {
        const input = '<div>{{$ctrl.isFlag}}</div>';
        const output = '<div>{{isFlag}}</div>';
        expect(transformControllerReferences(input)).toBe(output);
    });
});

// describe('getAllFiles', () => {
//     beforeEach(() => {
//         fs.readdirSync.mockClear();
//         fs.statSync.mockClear();
//     });

//     it('should return all HTML files from a directory', () => {
//         const mockFiles = ['index.html', 'app.js', 'styles.css', 'about.html'];
//         const mockStat = { isDirectory: jest.fn().mockReturnValue(false) };
        
//         fs.readdirSync.mockReturnValue(mockFiles);
//         fs.statSync.mockImplementation(() => mockStat);

//         const result = getAllFiles('/path/to/directory');
//         expect(result).toEqual(['/path/to/directory/index.html', '/path/to/directory/about.html']);
//     });

//     it('should recursively return HTML files from subdirectories', () => {
//         const mockFiles = {
//             '/path/to/directory': ['index.html', 'subdir'],
//             '/path/to/directory/subdir': ['about.html', 'contact.html']
//         };
//         const mockStat = {
//             '/path/to/directory': { isDirectory: jest.fn().mockReturnValue(true) },
//             '/path/to/directory/subdir': { isDirectory: jest.fn().mockReturnValue(true) },
//             '/path/to/directory/index.html': { isDirectory: jest.fn().mockReturnValue(false) },
//             '/path/to/directory/subdir/about.html': { isDirectory: jest.fn().mockReturnValue(false) },
//             '/path/to/directory/subdir/contact.html': { isDirectory: jest.fn().mockReturnValue(false) },
//         };

//         fs.readdirSync.mockImplementation((dirPath) => mockFiles[dirPath] || []);
//         fs.statSync.mockImplementation((filePath) => mockStat[filePath] || { isDirectory: jest.fn().mockReturnValue(false) });

//         const result = getAllFiles('/path/to/directory');
//         expect(result).toEqual([
//             '/path/to/directory/index.html',
//             '/path/to/directory/subdir/about.html',
//             '/path/to/directory/subdir/contact.html'
//         ]);
//     });
// });
