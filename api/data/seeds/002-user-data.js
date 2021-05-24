const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('password', 8);

exports.seed = async (knex) => {
  await knex('users').insert([
    {
      user_id: 1,
      user_username: 'Bruce Wayne',
      user_password: 'password',
      user_phone: '123-456-7890',
    },
    {
      user_id: 2,
      user_username: 'Edith Smith',
      user_password: 'password',
      user_phone: '234-567-8901',
    },
    {
      user_id: 3,
      user_username: 'Lily Mays',
      user_password: 'password',
      user_phone: '345-678-9012',
    },
  ]);
};
