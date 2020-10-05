const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8888;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("public"));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'));
});

// Add routes
app.use(routes);

// Start the server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on ${PORT}`);
});
