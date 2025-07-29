const fs = require('fs');
const unzipper = require('unzipper');

// File nd folder paths
const zipFilePath = './extract-zip/myFolder.zip';
const extractToFolder = 'unzipped';

fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: extractToFolder }))
  .on('close', () => {
    console.log(` Extraction complete! Files saved to: ${extractToFolder}/`);
  })
  .on('error', (err) => {
    console.error(' Error while extracting:', err);
  });

