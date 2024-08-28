const path = require("path");
const { main } = require("./transform-html");

// Run the script
const directoryPath = path.join(__dirname, '../angular-js/');
main(directoryPath);