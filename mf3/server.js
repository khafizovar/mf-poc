const express = require('express');

const app = express();
const port = process.env.PORT || 3004;

app.use('/', express.static(__dirname + '/dist/mf3/'));


app.listen(port);
console.log('Server started at http://localhost:' + port);
