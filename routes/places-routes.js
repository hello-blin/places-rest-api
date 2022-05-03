const express = require("express");
const colors = require('colors')
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Get request to /");
  res.status(200).json({ messsage: "hi" });
});

module.exports = router;
