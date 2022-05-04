const express = require("express");
const colors = require("colors");
const router = express.Router();
const HttpError = require("../models/http-error");

//import Controllers
const {
  getPlaceById,
  getPlaceByUserId,
} = require("../controllers/places-controller");

const DUMMY_PLACES = [
  {
    id: "p1",
    name: "Prishtina",
    description: "The capital city of Kosovo, largest city in Kosovo.",
    location: {
      lat: 42.66066397045114,
      lang: 21.175643842862385,
    },
    address: "Rruga Robert Doll, NR.158, 10000",
    creator: "u1",
  },
  {
    id: "p2",
    name: "Gjakova",
    description: "The oldest city and with a really rich culture on itself.",
    location: {
      lat: 42.38024874905271,
      lang: 20.42714469838844,
    },
    address: "Xhamia e hadumit, 11000",
    creator: "u2",
  },
  {
    id: "p3",
    name: "Drenas",
    description: "A city placed in Drenica's region.",
    location: {
      lat: 42.625027622866114,
      lang: 20.895505802405385,
    },
    address: "Rruga e Jasharajve, NR.123, 13000",
    creator: "u3",
  },
];
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
