const User = require('../models/user');
const Task = require('../models/task');

//create a new task

exports.createTask = async(req, res) => {
    try{
        const{title, description, points, category, carbonAvoided, unGoals, specialTask, unGoalDescription} = req.body;
        //validations
        if(!title || !description || !points || !category || !carbonAvoided || !unGoals || !unGoalDescription){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }

        //create new task
        const newTask = new Task({
            title, description, points, category, carbonAvoided, unGoals, specialTask, unGoalDescription
        })

        //save task to database
        const task = await newTask.save();
        return res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task
        })
    }catch(err){
        console.log("Error creating task: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error creating task"
        })
    }
}

//get all tasks
exports.getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find({specialTask: false});
        return res.status(200).json({
            success: true,
            message: "All tasks",
            data: tasks
        })
    }catch(err){
        console.log("Error getting tasks: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error getting tasks"
        })
    }
}

//get special tasks
exports.getSpecialTasks = async(req, res) => {
    try{
        const specialTasks = await Task.find({specialTask: true});
        return res.status(200).json({
            success: true,
            message: "Special tasks",
            data: specialTasks
        })
    }catch(err){
        console.log("Error getting special tasks: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error getting special tasks"
        })
    }
}


//perform a task
exports.performTask = async(req, res) => {
    try{
        const {userId, taskId} = req.body;
        //validations
        if(!userId || !taskId){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }

        //get task 
        const task = await Task.findById(taskId);
        if(!task){
            return res.status(404).json({
                success: false,
                error: "Task not found",
                message: "Task not found"
            })
        }
        
        //check if user has already performed the task
        const user = await User.findById(userId);
        if(!user.task.includes(taskId)){
            const updatedUser = await User.findByIdAndUpdate(userId,{
                $push: {task: taskId},
                $inc: {
                    points: task.points,
                    carbonAvoided: task.carbonAvoided
                },
                
            }, {new: true});

            updatedUser.password = undefined;
            return res.status(200).json({
                success: true,
                message: "Task performed successfully",
                data: updatedUser
            });
        }
        //find user and add the taskId
        const updatedUser = await User.findByIdAndUpdate(userId,{
            $inc: {
                carbonAvoided: task.carbonAvoided,
                points: task.points
            },
        }, {new: true});

        updatedUser.password = undefined;
        return res.status(200).json({
            success: true,
            message: "Task performed successfully",
            data: updatedUser
        });
    }catch(err){
        console.log("Error performing task: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error performing task"
        })
    }
}

//get all task for a user
exports.getUserTasks = async(req, res) => {
    try{
        const{userId} = req.body;
        if(!userId){
            return res.status(401).json({
                success: false,
                error: "All fields are required",
                message: "Please fill in all fields"
            })
        }
        const tasks = await User.findById(userId).populate('task').exec();
        return res.status(200).json({
            success: true,
            message: "All tasks for user",
            data: tasks
        })
    }catch(err){
        console.log("Error getting user tasks: ", err);
        return res.status(500).json({
            success: false,
            error: "Server error",
            message: "Error getting user tasks"
        })
    }
}