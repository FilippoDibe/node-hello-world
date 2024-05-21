const http = require("http");
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(`<h1>${process.env.MESSAGGIO}</h1>`);
    res.end(); 
})
.listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at ${serverUrl}`);
});
