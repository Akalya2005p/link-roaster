const express = require("express");

const { roastUrl, recentRoasts } = require("../controllers/roastController");

const router = express.Router();

router.post("/", roastUrl);

router.get("/recent", recentRoasts);

module.exports = router;
