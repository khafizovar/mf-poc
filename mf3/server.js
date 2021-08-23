const express = require('express');
const cors = require('cors')
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('simple-data.json', 'utf8'));

const app = express();
const port = process.env.PORT || 3004;

app.use(cors());

app.use('/', express.static(__dirname + '/dist/mf3/'));

app.get('/products/', function(req, res) {
  res.send(data);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
