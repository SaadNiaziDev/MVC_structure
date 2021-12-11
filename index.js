var express = require('express');
var arrayRoutes = require('./routes/arrayRoutes');
var app = express();

app.use(express.urlencoded({
    extended: true
  }));

app.use(express.json());
app.use(arrayRoutes);

app.use(() => {
    console.log("Server is running from default port!");
});

app.listen(3000);
