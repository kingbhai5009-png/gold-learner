const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let file = path.join(__dirname, "index.html");

    fs.readFile(file, (err, data) => {

        if (err) {
            res.writeHead(500);
            res.end("Error");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(data);
    });

});

server.listen(3000, "0.0.0.0", () => {
    console.log("GOLD LEARNER Started!");
    console.log("http://localhost:3000");
});
