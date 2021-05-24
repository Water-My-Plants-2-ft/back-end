const Plants = require('../plants/plants-model');

async function checkPlantData(req, res, next) {
  const { id } = req.params;
  const plant = await Plants.getPlantById(id);

  if (!plant) {
    res.status(404).json({ message: 'plant does not exist' });
  } else if (!plant.nickname || !plant.species || !plant.h2ofrequency) {
    res.status(404).json({ message: 'Input missing data fields' });
  }
  next();
}

async function validPlant(req, res, next) {
  const { id } = req.params;

  const plant = await Plants.getPlantById(id);

  if (!plant) {
    res.status(404).json({ message: 'plant does not exist' });
  } else {
    next();
  }
}
module.exports = {
  checkPlantData,
  validPlant,
};
