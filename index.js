const express = require("express"); //importing module express
const server = express(); //making an object of the module, instance
const port = process.env.PORT || 4000; //listens on port 3000 for connections

const cors = require("cors");
const parser = require("body-parser");
server.use(cors()); //for using middlewares for callback functions
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo_vibha");
mongoose.connection.on("connected", () => {
  console.log("db connected"); // to check if connection is established //on is event listener
});
mongoose.connection.on("error", () => {
  console.log("db connection error");
});

const { getAllTasks } = require("./src/controller");
const { createTask } = require("./src/controller");
const { updateTask } = require("./src/controller");
const { deleteTask } = require("./src/controller");
const { patchTask } = require("./src/controller");

server.get("/", getAllTasks);
server.post("/create-new-task", createTask);
server.put("/update-task", updateTask);
server.delete("/delete-task", deleteTask);
server.patch("/patch-task", patchTask);

server.listen(port, () => {
  console.log(`Server is running on port :${port} `);
});
