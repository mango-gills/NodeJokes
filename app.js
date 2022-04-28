// Imports
const express = require("express");
const app = express();
const PORT = 3000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));

// Set View's
app.set("view engine", "ejs");

// Set Navigations
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.info(`App is listening on port ${PORT}`);
});
