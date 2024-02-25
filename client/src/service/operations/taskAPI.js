import { apiConnector } from "../apiConnecter";
import { taskEndpoints } from "../api";

const {createTask, getAllTasks, getSpecialTask, performTask} = taskEndpoints;
const header = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrYXNobGl0b3JpeWE4QGdtYWlsLmNvbSIsImlkIjoiNjVkYTA4OGViZDNmNTc4NjIzNWE2NWFmIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzA4ODQxNjI3LCJleHAiOjE3MDg4NDg4Mjd9.3cfg_lJraJqV3oW_-GbFMsqvDECnx9VlO8J7tN7fgd4"
}

export async function createTaskOperation(data){
    
        try{
            const response = await apiConnector("POST", createTask, data, header, null);
            console.log("CREATE TASK RESPONSE", response);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            return response.data.data;
        }catch(err){
            console.log("CREATE TASK ERROR", err);
        }
    

}

export function getAllTasksOperation(){
    return async(dispatch)=>{
        try{
            const response = await apiConnector("GET", getAllTasks, null, header, null);
            console.log("GET ALL TASKS RESPONSE", response);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            return response.data.data;
        }catch(err){
            console.log("GET ALL TASKS ERROR", err);
        }
    }
}

export function getSpecialTaskOperation(){
    return async(dispatch)=>{
        try{
            const response = await apiConnector("GET", getSpecialTask, null, header, null);
            console.log("GET SPECIAL TASK RESPONSE", response);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            return response.data.data;
        }catch(err){
            console.log("GET SPECIAL TASK ERROR", err);
        }
    }
}

export function performTaskOperation(data){
    return async(dispatch) => {
        try{
            const response = await apiConnector("POST", performTask, data, header, null);
            console.log("PERFORM TASK RESPONSE", response);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            return response.data.data;
        }catch(err){
            console.log("PERFORM TASK ERROR", err);
        }
    }
}