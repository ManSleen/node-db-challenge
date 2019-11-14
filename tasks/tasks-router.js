const express = require("express");

// Import data model
const Tasks = require("./tasks-model.js");

const router = express.Router();

// Write CRUD operations
router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      tasks.map(task => {
        console.log(task);
        if (task.completed === 0) {
          task.completed = false;
          return task;
        } else {
          task.completed = true;
          return task;
        }
      });

      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get all tasks from the db" });
    });
});

router.post("/", (req, res) => {
  const newTask = req.body;
  Tasks.addTask(newTask)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add project to the db" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Tasks.updateTask(changes, id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not update that project in the db" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Tasks.deleteTask(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not delete that project from the db" });
    });
});

// Export router
module.exports = router;
