const router = require('express').Router();
const Plants = require('../helpers/plants-model.js');
const restricted = require('../middleware/restricted.js');
const validPlant = require('../middleware/plant-id.js');
const checkPlantData = require('../middleware/plant-data.js');

router.get('/', restricted, (req, res) => {
  Plants.find()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res.status(500).json({ error: 'list of plants is not available' });
    });
});

router.get('/:id', restricted, validPlant, (req, res) => {
  const id = req.params.id;

  Plants.findPlantById(id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res.status(500).json({ error: 'information not received' });
    });
});

router.put('/:id', restricted, validPlant, checkPlantData, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const updatedPlant = { ...changes, id };

  Plants.update(id, changes)
    .then((editPlant) => {
      console.log(editPlant);
      res.status(200).json(updatedPlant);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'could not update plant information' });
    });
});

router.delete('/:id', restricted, validPlant, (req, res) => {
  const id = req.params.id;

  Plants.remove(id)
    .then((deleted) => {
      console.log(deleted);
      res.status(200).json({ success: ` plant was deleted` });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'could not delete plant' });
    });
});

module.exports = router;
