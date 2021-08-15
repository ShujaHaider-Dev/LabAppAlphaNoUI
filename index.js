const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const listItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home", {
    listItems: listItems
  });
});

app.get("/submit/record", function(req, res){
    const queryObject = req.query;
    listItems.push([queryObject.name, queryObject.age, queryObject.
    gender])
    res.redirect("/")
});

app.listen(3000, function() {
  console.log("Server running on port 3000.");
});