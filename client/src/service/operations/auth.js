import { apiConnector } from "../apiConnecter";
import { endpoints } from "../api";
import { setToken, setUser } from "../../slices/userSlice";

const { login, register } = endpoints;

export async function loginOperation(data, navigate, dispatch) {
  try {
    const response = await apiConnector("POST", login, data, null, null);
    console.log("LOGIN RESPONSE", response.data);
    if (!response.data.success) {
      throw new Error(response.message);
    }
    dispatch(setUser(response.data.user));
    dispatch(setToken(response.data.token));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
    navigate("/main");
  } catch (err) {
    console.log("LOGIN ERROR", err);
  }
}

export async function registerOperation(data, navigate) {
  try {
    const response = await apiConnector("POST", register, data, null, null);
    console.log("REGISTER RESPONSE", response);
    if (!response.data.success) {
      throw new Error(response.message);
    }
    console.log("REGISTERATION SUCCESSFUL");
    navigate("/login");
  } catch (err) {
    console.log("REGISTERATION ERROR", err);
  }
}

export function logout(navigate, dispatch) {
  //   dispatch(setToken(null));
  //   dispatch(setUser(null));
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  navigate("/login");
}
