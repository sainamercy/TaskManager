import axios from "axios";
import { getToken } from "./auth";
import { removeToken } from "./auth";

const instance = () =>
  axios.create({
    baseURL: "http://127.0.0.1:3000",
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
  return instance().get("/todos");
};

const updateTask = (id, data) => {
  return instance().put(`/todos/${id}`, data);
};

const deleteTask = (id) => {
  return instance().delete(`/todos/${id}`);
};

export default {
  register,
  login,
  logout,
  addTask,
  getTasks,
  updateTask,
  deleteTask,
};