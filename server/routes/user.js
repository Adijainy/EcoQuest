const express = require('express');

const router = express.Router();

//importing user controller
const{ createUser, loginUser } = require('../controllers/user');

//user routes
router.post('/createUser', createUser);
router.post('/loginUser', loginUser);

//exporting router
module.exports = router;

