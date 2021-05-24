const db = require('../api/data/db-config');

const getAll = () => {
  return db('users');
};

const findById = (id) => {
  return db('users').where('user_id', id).first();
};

const add = (user) => {
  return db.insert(user).into('users');
};

const update = (id, changes) => {
  return db('users').where('user_id', id).update(changes);
};

const remove = (id) => {
  return db('users').where('user_id', id).del();
};

module.exports = {
  getAll,
  findById,
  add,
  update,
  remove,
};
