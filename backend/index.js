const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");

// api end point
app.get("/", (req, res) => {
  res.send("Hello World");
});

//mongodb connection
mongoDB().catch((err) => console.log(err));

//listining

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
