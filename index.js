const express = require("express");
var cors = require('cors');
var fs = require('fs');
const app = express();
const port = 1337;

app.use(cors());
const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({ extended: false });

// before your routes
app.use(parser.json());
app.use(urlencodedParser);

app.get("/", (req, res) => {
    res.json({
        "/": "Presents a comprehensive list of all available routes.",
        "/camp": "Provides an overview of selected refugee camps.",
        "/boundaries?camp=<camp_name>": "Displays data related to the camp boundaries.",
        "/shelters?camp=<camp_name>": "Displays data related to the camp shelters."
    });
});

app.get("/camp", (req, res) => {
    res.json({
        "Doro": "South Sudan",
        "Tunaydbah": "North sudan"
    });
});

app.get("/boundaries", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream(__dirname + '/data/'+req.query.camp+'/camp_boundaries.geojson').pipe(res);
});

app.get("/shelters", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream(__dirname + '/data/'+req.query.camp+'/camp_shelters.geojson').pipe(res);
});

app.listen(port);
console.log('The server is now listening on: ' + port);

function fetchJSON(url) {
    return fetch(url)
      .then(function(response) {
        return response.json();
      });
  }
