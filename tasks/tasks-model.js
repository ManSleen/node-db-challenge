const db = require("../data/db-config.js");

// Export the helper functions
module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};

// Write actual helper functions
function getTasks() {
  return db("tasks");
}

function addTask(newTask) {
  return db("tasks").insert(newTask, "id");
}

function updateTask(changes, id) {
  return db("tasks")
    .update(changes)
    .where({ id });
}

function deleteTask(id) {
  return db("tasks")
    .del()
    .where({ id });
}
