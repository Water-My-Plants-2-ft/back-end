exports.seed = async (knex) => {
  await knex('plants').insert([
    {
      nickname: 'boston fern',
      species: 'Nephrolepsis exaltata',
      h2ofrequency: '7',
      userid: 1,
    },
    {
      nickname: 'rubber plant',
      species: 'ficus elastica',
      h2ofrequency: '4',
      userid: 2,
    },
    {
      nickname: 'peace lily',
      species: 'Spathiphyllum wallisii',
      h2ofrequency: '4',
      userid: 3,
    },
    {
      nickname: 'snake plant',
      species: 'Sansevieria trifasciata',
      h2ofrequency: '4',
      userid: 4,
    },
    {
      nickname: 'spider plant',
      species: 'Chlorophytum comosum',
      h2ofrequency: '3',
      userid: 5,
    },
  ]);
};
