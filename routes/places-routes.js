const express = require("express");
const colors = require("colors");
const router = express.Router();
const HttpError = require("../models/http-error");

//import Controllers
const {
  getPlaceById, // Seperate function to find a place by ID
  getPlaceByUserId, // Seperate function to find a place by users ID
} = require("../controllers/places-controller");

//Get request to render as json all places
router.get("/", (req, res, next) => {
  console.log("Get request to /api/places");
  res.status(200).json(DUMMY_PLACES);
});
//Getting a place that is assigned to a creator
router.get("/user/:uid", getPlaceByUserId);
//Getting a place by it's id
router.get("/:pid", getPlaceById);

module.exports = router;
