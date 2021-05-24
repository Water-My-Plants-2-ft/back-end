exports.seed = async (knex) => {
  await knex('plants').insert([
    {
      plantid: 1,
      nickname: 'boston fern',
      species: 'Nephrolepsis exaltata',
      h2ofrequency: '7',
      user_id: 1,
    },
    {
      plantid: 2,
      nickname: 'rubber plant',
      species: 'ficus elastica',
      h2ofrequency: '4',
      user_id: 2,
    },
    {
      plantid: 3,
      nickname: 'peace lily',
      species: 'Spathiphyllum wallisii',
      h2ofrequency: '4',
      user_id: 3,
    },
    {
      plantid: 4,
      nickname: 'snake plant',
      species: 'Sansevieria trifasciata',
      h2ofrequency: '4',
      user_id: 1,
    },
    {
      plantid: 5,
      nickname: 'spider plant',
      species: 'Chlorophytum comosum',
      h2ofrequency: '3',
      user_id: 1,
    },
  ]);
};
