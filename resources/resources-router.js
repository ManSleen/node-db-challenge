const express = require("express");

// Import data model
const Resources = require("./resources-model.js");

const router = express.Router();

// Write CRUD operations
router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not get all resources from the db" });
    });
});

router.post("/", (req, res) => {
  const newResource = req.body;
  Resources.addResource(newResource)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add project to the db" });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Resources.updateResource(changes, id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not update that project in the db" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Resources.deleteResource(id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Could not delete that project from the db" });
    });
});

// Export router
module.exports = router;
