const router = require('express').Router();
const Plants = require('../PLANTS/plants-model');
const {
  checkPlantId,
  checkPlantPayload,
} = require('../PLANTS/plants-middleware');
const { checkUserId } = require('../USERS/users-middleware');
const restricted = require('../AUTH/restricted');

//get all the plants
router.get('/', restricted, (req, res, next) => {
  Plants.getPlants()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

// get all plants by user id
router.get('/user/:id', restricted, checkUserId, (req, res, next) => {
  Plants.getPlantsByUserId(req.params.id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next);
});

//get the plants by plant ID
router.get('/:id', restricted, checkPlantId, (req, res, next) => {
  Plants.getPlantById(req.params.id)
    .then((plant) => {
      res.status(200).json(plant);
    })
    .catch(next);
});

// create a new plant
router.post('/', restricted, checkPlantPayload, (req, res, next) => {
  Plants.createPlant(req.body)
    .then((plant) => {
      res.status(201).json(plant);
    })
    .catch(next);
});

//update a plants info
router.put(
  '/:id',
  restricted,
  checkPlantId,
  checkPlantPayload,
  (req, res, next) => {
    Plants.updatePlant(req.params.id, req.body)
      .then((plant) => {
        res.status(200).json(plant);
      })
      .catch(next);
  }
);

//delete a plant
router.delete('/:id', restricted, checkPlantId, (req, res, next) => {
  Plants.deletePlant(req.params.id)
    .then(() => {
      res.status(200).json({
        message: 'Your plant was deleted',
      });
    })
    .catch(next);
});

router.use((err, req, res, next) /*eslint-disable-line*/ => {
  res.status(500).json({
    customMessage: 'Something went wrong in plant router',
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
