const express = require('express');

const app = express();
const port = process.env.PORT || 8082;

app.use('/', express.static(__dirname + '/dist/mf1-parent/'));


app.listen(port);
console.log('Server started at http://localhost:' + port);
