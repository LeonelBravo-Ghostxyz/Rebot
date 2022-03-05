const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('BOT ONLINE');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("Servidor online") });
}

module.exports = keepAlive;