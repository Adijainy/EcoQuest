import { apiConnector } from "../apiConnecter";
import { taskEndpoints } from "../api";
import { toast } from "react-hot-toast";

const {
  createTask,
  getAllTasks,
  getSpecialTask,
  performTask,
  getLeaderBoard,
  getUserTasks,
} = taskEndpoints;

export async function createTaskOperation(data, token) {
  try {
    const response = await apiConnector(
      "POST",
      createTask,
      data,
      { Authorization: `Bearer ${token}` },
      null
    );
    console.log("CREATE TASK RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("CREATE TASK ERROR", err);
  }
}

export async function getAllTasksOperation(token) {
  try {
    const response = await apiConnector(
      "GET",
      getAllTasks,
      null,
      { Authorization: `Bearer ${token}` },
      null
    );
    console.log("GET ALL TASKS RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("GET ALL TASKS ERROR", err);
  }
}

export async function getSpecialTaskOperation(token) {
  try {
    const response = await apiConnector(
      "GET",
      getSpecialTask,
      null,
      { Authorization: `Bearer ${token}` },
      null
    );
    console.log("GET SPECIAL TASK RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("GET SPECIAL TASK ERROR", err);
  }
}

export async function performTaskOperation(data, token) {
  try {
    const response = await apiConnector(
      "POST",
      performTask,
      data,
      { Authorization: `Bearer ${token}` },
      null
    );
    console.log("PERFORM TASK RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("Task Performed Successfully");
    return response.data.data;
  } catch (err) {
    console.log("PERFORM TASK ERROR", err);
  }
}

export async function getLeaderBoardOperation() {
  try {
    const response = await apiConnector(
      "GET",
      getLeaderBoard,
      null,
      null,
      null
    );
    console.log("GET LEADERBOARD RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("GET LEADERBOARD ERROR", err);
  }
}

export async function getUserTasksOperation(data, token) {
  try {
    const response = await apiConnector(
      "GET",
      getUserTasks,
      data,
      { Authorization: `Bearer ${token}` },
      null
    );
    console.log("GET USER TASKS RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("GET USER TASKS ERROR", err);
  }
}
