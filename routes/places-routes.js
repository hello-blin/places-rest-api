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
  updatePlace, //Seperate funciton to update a Place
  deletePlace, //Seperate funciton to delete a Place
} = require("../controllers/places-controller");

//Getting a place that is assigned to a creator
router.get("/user/:uid", getPlaceByUserId);
//Getting a place by it's id
router.get("/:pid", getPlaceById);
//Getting all places
router.get("/", getAll);
//Create a new place
router.post("/", createPlace);
//Update a place
router.put("/:pid", updatePlace);
//Delete a place
// router.delete("/:pid", deletePlace);

module.exports = router;
