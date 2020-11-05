var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static("public"));


var good_task = ["buy socks", "practise with nodejs"];

var bad_task = ["buy ", "practise  "];

var juicy_task = [" socks", "odejs"];

app.post('/addtask', function (req, res) {

  var newTask = req.body.newtask;
  var taskCategory = req.body.taskcategory;

  if(taskCategory == "good"){
    good_task.push(newTask);
  }

  if(taskCategory == "bad"){
    bad_task.push(newTask);
  }

  if(taskCategory == "juicy"){
    juicy_task.push(newTask);
  }

  res.redirect("/");
});

app.get("/", function (req, res) {
  res.render("index", { good_task: good_task, bad_task: bad_task, juicy_task: juicy_task });
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});