const fs = require('fs');
const path = require('path');

const folderName = 'myFolder';
if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log('Folder created:', folderName);
}

const filePath = path.join(folderName, 'example.txt');
fs.writeFileSync(filePath, 'Hello, this is the first line.\n');
console.log('File created and content written.');

fs.appendFileSync(filePath, 'This is an appended line.\n');
console.log('Data appended to the file.');

const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('File content:\n', fileContent);

const newFilePath = path.join(folderName, 'renamed.txt');
fs.renameSync(filePath, newFilePath);
console.log('File renamed to renamed.txt');

const files = fs.readdirSync(folderName);
console.log('Files in folder:', files);

fs.unlinkSync(newFilePath);
console.log('File deleted.');

fs.rmdirSync(folderName);
console.log('Folder deleted.');
