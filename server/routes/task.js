const express = require('express');

const router = express.Router();

//importing task controller
const{createTask, getAllTasks, getSpecialTasks, performTask, getUserTasks} = require('../controllers/task');

//importing auth middleware
const {auth, isAdmin} = require('../middlewares/auth');

//task routes
router.post('/createTask', auth, isAdmin, createTask);
router.get('/getAllTasks', auth, getAllTasks);
router.get('/getSpecialTasks', auth, getSpecialTasks);
router.post('/performTask', auth, performTask);
router.get('/getUserTasks', auth, getUserTasks);

//exporting router

module.exports = router;
