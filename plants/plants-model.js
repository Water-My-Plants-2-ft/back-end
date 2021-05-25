const db = require('../api/db-config');

const getPlants = () => {
  return db('plants');
};

const getPlantById = (plant_id) => {
  return db('plants').where('plant_id', plant_id).first();
};

const createPlant = (plant) => {
  return db('plants').insert(plant, [
    'plant_id',
    'nickname',
    'species',
    'h2o_frequency',
  ]);
};

const updatePlant = async (id, plant) => {
  return db('plants')
    .where('plant_id', id)
    .update(plant, ['plant_id', 'nickname', 'species', 'h2o_frequency']);
};

const deletePlant = async (plant_id) => {
  return db('plants').where('plant_id', plant_id).del();
};

module.exports = {
  getPlants,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
};
