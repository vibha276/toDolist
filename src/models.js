const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  task:String,

});

const Task = mongoose.model("Task", toDoSchema);

module.exports = {
  Task,
};
