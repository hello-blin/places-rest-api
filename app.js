const express = require("express");
const bodyparser = require("body-parser");
const app = express();

//Route importing
const placesRouter = require('./routes/places-routes')
const usersRouter = require('./routes/users-routes')

app.use(express.json());

//Routing
app.use('/api/places', placesRouter)
app.use('/api/users', usersRouter)

app.listen(3000, () => {
  console.log(`Connected to port 3000`.bgMagenta);
});
