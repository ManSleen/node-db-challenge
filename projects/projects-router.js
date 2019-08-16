const express = require("express");

// Import data model
const Projects = require("./projects-model.js");

const router = express.Router();

// Write CRUD operations
router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      projects.map(project => {
        if (project.completed === 0) {
          project.completed = false;
          return project;
        } else {
          project.completed = true;
          return project;
        }
      });
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not get all projects from the db" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasksByProject(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add project to the db" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  Projects.addProject(newProject)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add project to the db" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Projects.updateProject(changes, id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not update that project in the db" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Projects.deleteProject(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not delete that project from the db" });
    });
});

// Export router
module.exports = router;
