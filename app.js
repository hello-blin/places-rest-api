const express = require("express");
const bodyparser = require("body-parser");
const app = express();

//Route importing
const placesRouter = require("./routes/places-routes");
const usersRouter = require("./routes/users-routes");

//ErrorHandler import
const HttpError = require("./models/http-error");

app.use(express.json());

app.use(bodyparser.json());

//Routing
app.use("/api/places", placesRouter);
app.use("/api/users", usersRouter);

//Error middleware function which express can recognize
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

app.use((req, res, next) => {
  const error = new HttpError("Couldnt find this route", 404);
  throw error;
});

//Initializing port to launch
app.listen(3000, () => {
  console.log(`Connected to port 3000`.bgMagenta);
});
