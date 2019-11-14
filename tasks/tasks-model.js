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
  return db("tasks as t")
    .select(
      "p.name as projectName",
      "t.description as task",
      "p.description as projectDescription",
      "t.completed"
    )
    .innerJoin("projects as p", "t.project_id", "=", "p.id")
    .orderBy("p.name", "t.id");
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
