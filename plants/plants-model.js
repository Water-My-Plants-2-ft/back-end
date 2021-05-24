const db = require('../api/data/db-config');

module.exports = {
  getAllPlants,
  findPlantsById,
  findPlantsByUser,
  add,
  update,
  remove,
};

function getAllPlants() {
  return db('plants');
}

function findPlantsById(id) {
  return db('plants').where({ id }).first();
}

function findPlantsByUser(userId) {
  return db('users')
    .join('plants', 'users_id', 'plants.user_id')
    .select(
      'plants.id',
      'plants.nickname',
      'plants.species',
      'plants.h2ofrequency'
    )
    .where('users_id', userId);
}

function add(plant) {
  return db('plants')
    .insert(plant, 'plantid')
    .then((ids) => {
      const [id] = ids;
      return findById(id);
    });
}

function update(id, changes) {
  return db('plants').where({ id }).update(changes);
}

function remove(id) {
  return db('plants').where('plantid', id).del();
}
