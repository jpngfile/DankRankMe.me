var fs = require ("fs");
 
// Express settings
var express = require ("express");
var bodyParser = require ("body-parser");
var app = express ();
app.use (bodyParser.urlencoded ({ extended: true}));
app.use (bodyParser.json());

var port = 8000;


// Database and settings
var sqlite3 = require('sqlite3').verbose();

var dbPath = __dirname + "\\data\\database.db"
var imgPath = __dirname + "\\data\\images\\"
var numImages = 10;

var db = new sqlite3.Database (dbPath);


function setupDatabase () {
  db.serialize (function () {
    db.run ("CREATE TABLE captionTable (cId INTEGER PRIMARY KEY, iId INT, caption TEXT, popularity INT DEFAULT 0)");
    db.run ("CREATE TABLE images (iId INTEGER PRIMARY KEY, path TEXT, popularity INT DEFAULT 0)");
    db.run ("INSERT INTO images (path) VALUES (?)", imgPath + "1.jpg");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'test1', 10)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'test2', 5)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'aaa', 3)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'hi', 14)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'go fuck urself', 51)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'hello', 4)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'c', 0)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'asdsafasdasd', 1)");
    db.run ("INSERT INTO captionTable (iId, caption, popularity) VALUES (1, 'test1', 10)");
  });
}

function uploadImage (imageName) {
  db.run ("INSERT INTO images (path) VALUES (?)", imgPath + imageName);
}

function getcaptionTable (imageID) {
  db.get ("SELECT caption, popularity FROM captionTable WHERE iId = ?", imageID, function (err, row) {
    return row;
  });
}

function updateDB (imageID, captionID) {
  db.serialize (function () {
    db.run ("UPDATE captionTable SET popularity = popularity + 1 WHERE cId = ?", captionID);
    db.run ("UPDATE images SET popularity = popularity + 1 WHERE iId = ?", imageID);
  });
}

var router = express.Router ();

router.get ("/var/:variable", function (req, res) {
  var data = req.params.variable;
  res.json ({
    message : data
  });
});

router.get ("/api/test", function (req, res) {
  res.sendFile (imgPath + "1.jpg");
});


// GET REQUESTS
// "/get/images"
router.get ("/get/images", function (req, res) {
  var result = [];
  db.each ("SELECT * FROM images ORDER BY popularity DESC LIMIT ?", numImages, function (err, row) {
    result.push ({id : row.iId, path : row.path });
  });
  res.json ( {results : result });
});

// "/get/captions?imageId=1"
router.get ("/get/captions", function (req, res) {
  var result = [];
  console.log ("SELECT caption, popularity FROM captionTable WHERE iId = "+ req.query.imageId);
  db.each ("SELECT caption, popularity FROM captionTable WHERE iId = " + req.query.imageId, function (err, row) {  // callback
    result.push ({caption : row.caption, popularity : row.popularity });
    console.log ("added one entry to result")
  },
  function () { // completed
    console.log (result);
    res.json ({ 
      results : result 
    });
  });
});

// POST REQUESTS
router.post ("/vote", function (req, res) {
  var imageID = req.query.imageId;
  var captionID = req.query.captionID;
  updateDB (imageID, captionID);
});

app.use ("/", router);
//setupDatabase ();
db.get ("SELECT * FROM captionTable", function (err, row) {
  console.log (err);
  console.log (row.cId);
});
app.listen (port);
console.log ("Magic happens on port " + port);