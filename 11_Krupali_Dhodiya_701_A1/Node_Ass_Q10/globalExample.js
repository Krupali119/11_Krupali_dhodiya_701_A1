console.log('Current directory (__dirname):', __dirname);

console.log('Current file (__filename):', __filename);

console.log('This is a normal log.');
console.error('This is an error log.');
console.warn('This is a warning log.');

setTimeout(() => {
    console.log('This message appears after 2 seconds (setTimeout)');
}, 2000);

let count = 0;
const interval = setInterval(() => {
    count++;
    console.log(`setInterval count: ${count}`);
    if (count === 3) {
        clearInterval(interval); 
        console.log('Interval cleared after 3 counts');
    }
}, 1000);

console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);

const buf = Buffer.from('Hello Node.js');
console.log('Buffer content:', buf);
console.log('Buffer to string:', buf.toString());

global.myGlobalValue = 'I am global';
console.log('Accessing global value:', global.myGlobalValue);
