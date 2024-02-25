import { apiConnector } from "../apiConnecter";

import { badgeEndpoints } from "../api";

const { createBadge, allotBadge, getAllBadges, getUserBadges } = badgeEndpoints;

const header = {
  Authorization: "Bearer ",
};

export async function createBadgeOperation(data) {
  try {
    const response = await apiConnector(
      "POST",
      createBadge,
      data,
      header,
      null
    );
    console.log("CREATE BADGE RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("CREATE BADGE ERROR", err);
  }
}

export function allotBadgeOperation(data) {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "POST",
        allotBadge,
        data,
        header,
        null
      );
      console.log("ALLOT BADGE RESPONSE", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      return response.data.data;
    } catch (err) {
      console.log("ALLOT BADGE ERROR", err);
    }
  };
}

export async function getAllBadgesOperation() {
  try {
    const response = await apiConnector("GET", getAllBadges, null, null, null);
    console.log("GET ALL BADGES RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    return response.data.data;
  } catch (err) {
    console.log("GET ALL BADGES ERROR", err);
  }
}

export function getUserBadgesOperation(data) {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "GET",
        getUserBadges,
        null,
        header,
        data
      );
      console.log("GET USER BADGES RESPONSE", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      return response.data.data;
    } catch (err) {
      console.log("GET USER BADGES ERROR", err);
    }
  };
}
