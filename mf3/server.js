const express = require('express');
const cors = require('cors')
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('simple-data.json', 'utf8'));

const app = express();
const app2 = express();
const port = process.env.PORT || 3004;

app.use(cors());
app2.use(cors());

app.use('/', express.static(__dirname + '/dist/mf3/'));

app.get('/products/', function(req, res) {
  res.send(data);
});

app2.get('/products-other/', function(req, res) {
  res.send(data);
});

app.listen(port);
app2.listen("8085");
console.log('Server started at http://localhost:' + port);
