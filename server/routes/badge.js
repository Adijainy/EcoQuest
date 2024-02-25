const express = require("express");

const router = express.Router();

//importing badge controller
const {
  createBadge,
  getAllBadges,
  allotBadge,
  getUserBadges,
} = require("../controllers/badge");

//importing auth middleware
const { auth, isAdmin } = require("../middlewares/auth");

//badge routes
router.post("/createBadge", auth, isAdmin, createBadge);
router.get("/getAllBadges", getAllBadges);
router.post("/allotBadge", auth, allotBadge);
router.get("/getUserBadges", auth, getUserBadges);

module.exports = router;
