const path = require('path');
// path separater
console.log(path.sep);

// getting the filepath
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

// getting the basename
const base = path.basename(filePath);
console.log(base);

// gettng the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);