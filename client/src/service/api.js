const BASE_URL = "https://ecoquest-xr43.onrender.com/api/v1";
//const BASE_URL = "http://localhost:4000/api/v1"
export const endpoints = {
  login: `${BASE_URL}/user/loginUser`,
  register: `${BASE_URL}/user/createUser`,
};

export const taskEndpoints = {
  createTask: `${BASE_URL}/task/createTask`,
  getAllTasks: `${BASE_URL}/task/getAllTasks`,
  getSpecialTask: `${BASE_URL}/task/getSpecialTasks`,
  getUserTasks: `${BASE_URL}/task/getUserTasks`,
  performTask: `${BASE_URL}/task/performTask`,
  getLeaderBoard: `${BASE_URL}/user/getLeaderBoard`,
};

export const badgeEndpoints = {
  createBadge: `${BASE_URL}/badge/createBadge`,
  getAllBadges: `${BASE_URL}/badge/getAllBadges`,
  getUserBadges: `${BASE_URL}/badge/getUserBadges`,
  allotBadge: `${BASE_URL}/badge/allotBadge`,
};
