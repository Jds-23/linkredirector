"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var PORT = process.env.PORT || 3000;
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var server = http.createServer(function (req, res) {
    var redirect = config.redirects.find(function (r) { return r.path === req.url; });
    if (redirect) {
        res.writeHead(301, { Location: redirect.url });
        return res.end();
    }
    // Handle other requests
    res.writeHead(404);
    res.end();
});
server.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
