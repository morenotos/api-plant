// Libraries
const express = require("express");
// Controllers
const { newPlant } = require("../controllers/plants");

// Init Router
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({message:'Server on C:'})
});

// Tasks
router.post("/plant", newPlant);
// router.get("/plants", getPlants);
// router.get("/plants/:name", getOnePlant);
// router.put("/plants/:name/:capacity", updatePlant);
// router.put("/plants-deleted", deletePlant);

module.exports = router;
