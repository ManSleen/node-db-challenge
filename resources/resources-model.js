const db = require("../data/db-config.js");

// Export the helper functions
module.exports = {
  getResources,
  addResource,
  updateResource,
  deleteResource
};

// Write actual helper functions
function getResources() {
  return db("resources");
}

function addResource(newResource) {
  return db("resources").insert(newResource, "id");
}

function updateResource(changes, id) {
  return db("resources")
    .update(changes)
    .where({ id });
}

function deleteResource(id) {
  return db("resources")
    .del()
    .where({ id });
}
