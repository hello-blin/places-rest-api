const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const placesrouter = require('./routes/places-routes')
app.use(express.json());

//Routing
app.use('/api/places', placesrouter)

app.listen(3000, () => {
  console.log(`Connected to port 3000`.bgMagenta);
});
