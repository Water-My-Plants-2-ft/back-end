exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('user_username', 200).notNullable();
      users.string('user_password', 200).notNullable();
      users.string('user_phone', 320).notNullable();
      users.timestamps(false, true);
    })

    .createTable('plants', (item) => {
      item.increments('plantid');
      item.string('nickname', 100).notNullable();
      item.string('species', 100).notNullable();
      item.string('h2ofrequency', 100).notNullable();
      item
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('RESTRICT');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('plants').dropTableIfExists('users');
};
