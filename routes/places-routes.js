const express = require("express");
const colors = require("colors");
const router = express.Router();
const HttpError = require("../models/http-error");


//import Controllers
const {
  getPlaceById, // Seperate function to find a place by ID
  getPlaceByUserId, // Seperate function to find a place by users ID
  createPlace, //Seperate function to create a Place,
  getAll, //Seperate funciton to get all Places
} = require("../controllers/places-controller");

//Getting a place that is assigned to a creator
router.get("/user/:uid", getPlaceByUserId);
//Getting a place by it's id
router.get("/:pid", getPlaceById);
//Getting all places
router.get("/", getAll);

router.post("/", createPlace);

module.exports = router;
