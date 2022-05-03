const express = require("express");
const router = express.Router();
const colors = require("colors");

router.get("/", (req, res, next) => {
  console.log("Get request to api/users/".bgBlue);
  res.status(200).json({ message: "Hello from users" });
});

module.exports = router;
