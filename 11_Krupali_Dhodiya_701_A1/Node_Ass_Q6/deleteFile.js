const fs = require('fs');
const path = require('path');
const util = require('util');

// Convert callback to promise
const unlinkAsync = util.promisify(fs.unlink);

// Full path of file to delete
const fileToDelete = path.join(__dirname, 'files', 'deleteMe.txt');

async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`✅ File deleted: ${filePath}`);
  } catch (err) {
    console.error(`❌ Error deleting file:`, err.message);
  }
}

// Run the function
deleteFile(fileToDelete);
