const http = require("http");
const dotenv = require('dotenv');
const { getRandomFrasi } = require('./frasi');
dotenv.config();

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";

http.createServer(function(req, res){
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    const fraseRandom = getRandomFrasi()
    res.write(`
        <h1>${fraseRandom}</h1>
    `);
    res.end(); 
})
.listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at ${serverUrl}`);
});
