const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('password', 8);

exports.seed = async (knex) => {
  await knex('users').insert([
    { username: 'Bruce Wayne', password: hash, phonenumber: '123-456-7890' },
    { username: 'Edith Smith', password: hash, phonenumber: '234-567-8901' },
    { username: 'Lily Mays', password: hash, phonenumber: '345-678-9012' },
  ]);
};
