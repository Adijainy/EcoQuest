const express = require("express");

const router = express.Router();

//importing user controller
const {
  createUser,
  loginUser,
  getLeaderBoard,
} = require("../controllers/user");

//user routes
router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.get("/getLeaderBoard", getLeaderBoard);

//exporting router
module.exports = router;
