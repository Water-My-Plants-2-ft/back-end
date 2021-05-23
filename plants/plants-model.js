const db = require('../api/data/db-config')

const getAll = () => {
    return db('plants')
}

const add = plant => {
    return db('plants')
    .insert(plant,
         ['nickname',
          'h2ofrequency',
          'species',
          'plantid',
          'userid'
    ])
}

const getById = (plantid) => {
    return db('plants')
    .where({ plantid })
    .first()
}

const update = plant => {
    const { plantid } = plant
    return db('plants')
    .where({ plantid })
    .update(plant,
        ['nickname',
        'h2ofrequency',
        'species',
        'plantid',
        'userid'
    ])     
}

const remove = plantid => {
    return db('plants')
    .where({ plant id })
    .del();
}

const getUserPlants = (userid) => {
    return db('plants')
    .where({ userid })
}



module.exports = {
    getAll,
    add,
    getById,
    update,
    remove,
    getUserPlants,
}