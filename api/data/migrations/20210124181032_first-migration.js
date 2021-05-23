exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('user_username', 200).notNullable();
      users.string('user_password', 200).notNullable();
      users.string('user_email', 320).notNullable();
      users.timestamps(false, true);
    })

    .createTable('plants', (plants) => {
      plants.increments('plantid');
      plants.string('nickname', 100).notNullable();
      plants.string('species, 100').notNullable();
      plants.string('h2ofrequency, 100').notNullable();
      plants
        .integer('userid')
        .unsigned()
        .references('userid')
        .notNullable()
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users').dropTableIfExists('plants');
};
