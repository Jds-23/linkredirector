const fs = require('fs');
const assert = require('assert');

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const paths = config.redirects.map(r => r.path);
const uniquePaths = new Set(paths);

assert.strictEqual(paths.length, uniquePaths.size, 'Paths are not unique');
