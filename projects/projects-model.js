const db = require("../data/db-config.js");

// Export the helper functions
module.exports = {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  getTasksByProject,
  getProjectById
};

// Write actual helper functions
function getProjects() {
  return db("projects");
}

function addProject(newProject) {
  return db("projects").insert(newProject, "id");
}

function updateProject(changes, id) {
  return db("projects")
    .update(changes)
    .where({ id });
}

function deleteProject(id) {
  return db("projects")
    .del()
    .where({ id });
}

function getTasksByProject(id) {
  return db("projects as p")
    .select(
      "p.name as projectName",
      "p.description as projectDescription",
      "t.description as projectTasks"
    )
    .innerJoin("tasks as t", "t.project_id", "=", "p.id")
    .where({ "p.id": id })
    .orderBy("p.name");
}
function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}
