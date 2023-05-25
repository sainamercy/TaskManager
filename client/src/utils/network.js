import axios from "axios";
import { getToken } from "./auth";
import { removeToken } from "./auth";

const instance = () =>
  axios.create({
    baseURL: "https://taskbit-byx7.onrender.com",
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
  });

const register = (data) => {
  return instance().post("/users", data);
};

const login = (data) => {
  return instance().post("/users/login", data);
};

const logout = () => {
  removeToken();
  return instance().delete("/users/logout");
};

const addTask = (data) => {
  return instance().post("/todos", data);
};

const getTasks = () => {
  if (getToken()) {
    return instance().get("/todos");
  }
};

const updateTask = (id, data) => {
  return instance().put(`/todos/${id}`, data);
};

const getTask = (id) => {
  return instance().get(`/todos/${id}`);
};

const deleteTask = (id) => {
  return instance().delete(`/todos/${id}`);
};
const autoLogin = () => {
  return instance().get("/users/login/check");
};

export default {
  register,
  login,
  logout,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
  autoLogin,
  getTask,
};
