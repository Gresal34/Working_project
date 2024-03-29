const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});