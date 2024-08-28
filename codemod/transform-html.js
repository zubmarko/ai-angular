const fs = require('fs');
const path = require('path');

// Utility function to read all files in a directory
const getAllFiles = (dirPath, arrayOfFiles = []) => {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, arrayOfFiles);
        } else if (fullPath?.endsWith('.html')) {
            arrayOfFiles.push(fullPath);
        }
    });
    return arrayOfFiles;
};

// Function to transform bindings in the HTML content
const transformBinding = (htmlContent) => {
    const transformations = [
        { from: 'ng-class', to: '[ngClass]' },
        { from: 'ng-style', to: '[ngStyle]' },
        { from: 'ng-bind', to: '[ngBind]' },
        { from: 'ng-src', to: '[src]' }
    ];

    return transformations.reduce((content, { from, to }) => {
        const regex = new RegExp(from, 'g');
        return content.replace(regex, to);
    }, htmlContent);
};

// Function to transform structural directives in the HTML content
const transformStructuralDirectives = (htmlContent) => {
    // Transformations for ng-if, ng-show, ng-hide, ng-switch remain the same
    const transformations = [
        { from: 'ng-if', to: '*ngIf' },
        { from: 'ng-show', to: '*ngIf' },
        { from: 'ng-hide', to: '[hidden]' },
        { from: 'ng-switch', to: '*ngSwitch' }
    ];

    // Apply standard transformations
    let transformedContent = transformations.reduce((content, { from, to }) => {
        const regex = new RegExp(from, 'g');
        return content.replace(regex, to);
    }, htmlContent);

    // Specific transformation for ng-repeat
    const ngRepeatRegex = /ng-repeat="(\w+) in (\w+)"/g;
    transformedContent = transformedContent.replace(ngRepeatRegex, '*ngFor="let $1 of $2"');

    return transformedContent;
};

// Function to transform event bindings in the HTML content
const transformEvents = (htmlContent) => {
    const transformations = [
        { from: 'ng-click', to: '(click)' },
        { from: 'ng-dblclick', to: '(dblclick)' },
        { from: 'ng-mousedown', to: '(mousedown)' },
        { from: 'ng-mouseup', to: '(mouseup)' },
        { from: 'ng-mouseenter', to: '(mouseenter)' },
        { from: 'ng-mouseleave', to: '(mouseleave)' },
        { from: 'ng-mousemove', to: '(mousemove)' },
        { from: 'ng-keydown', to: '(keydown)' },
        { from: 'ng-keyup', to: '(keyup)' },
        { from: 'ng-keypress', to: '(keypress)' },
        { from: 'ng-focus', to: '(focus)' },
        { from: 'ng-blur', to: '(blur)' },
        { from: 'ng-change', to: '(ngModelChange)' }  // Note: ng-change to ngModelChange is specific to form inputs
    ];

    return transformations.reduce((content, { from, to }) => {
        const regex = new RegExp(from, 'g');
        return content.replace(regex, to);
    }, htmlContent);
};

// Function to transform routing in the HTML content
const transformRouting = (htmlContent) => {
    const transformations = [
        { from: 'ng-href', to: '[routerLink]' }
    ];

    return transformations.reduce((content, { from, to }) => {
        const regex = new RegExp(from, 'g');
        return content.replace(regex, to);
    }, htmlContent);
};

// Function to transform controller references in the HTML content
const transformControllerReferences = (htmlContent) => {
    const transformations = [
        { from: 'vm\\.', to: '' },        // Replace "vm." with an empty string
        { from: '\\$scope\\.', to: '' },  // Replace "$scope." with an empty string
        { from: '\\$ctrl\\.', to: '' }    // Replace "$ctrl." with an empty string
    ];

    return transformations.reduce((content, { from, to }) => {
        const regex = new RegExp(from, 'g');
        return content.replace(regex, to);
    }, htmlContent);
};

// Function to process a single HTML file
const processFile = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const transformedContent = transformControllerReferences(
        transformRouting(
            transformEvents(
                transformStructuralDirectives(
                    transformBinding(content)
                )
            )
        )
    );
    fs.writeFileSync(filePath, transformedContent, 'utf8');
    console.log(`Processed: ${filePath}`);
};

// Main function to get all HTML files and process them
const main = (dirPath) => {
    const htmlFiles = getAllFiles(dirPath);
    htmlFiles.forEach(processFile);
};


module.exports = {
    transformBinding,
    transformStructuralDirectives,
    transformEvents,
    transformRouting,
    transformControllerReferences,
    getAllFiles,
    processFile,
    main
};