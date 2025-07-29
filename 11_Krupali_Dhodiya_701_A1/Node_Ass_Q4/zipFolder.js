const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/myFolder.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } 
});

output.on('close', () => {
  console.log(` Archive created: ${archive.pointer()} total bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Folder to compress
archive.directory('myFolder/', false);
archive.finalize();
