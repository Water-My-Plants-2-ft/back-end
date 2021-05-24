const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');
const Plants = require('../plants/plants-model');
const restricted = require('../middleware/restrict');
const validUser = require('../users/user-model');
const checkPlantData = require('../middleware/plants-middleware');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ error: 'no list generated' });
    });
});

router.get('/:id', restricted, validUser, (req, res) => {
  const id = req.params.id;

  Users.myUserId(id)
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: 'user id not received' });
    });
});

router.put('/:id', restricted, validUser, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const hash = bcrypt.hashSync(changes.password, 8);
  changes.password = hash;
  const updatedUser = { ...changes, id };

  Users.update(id, changes)
    .then((editUser) => {
      console.log(updatedUser);
      res.status(200).json(updatedUser);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'users cannot be updated' });
    });
});

router.delete('/:id', restricted, validUser, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then((deleted) => {
      console.log(deleted);
      res.status(200).json({ success: `user was successfully deleted` });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'user could not be deleted' });
    });
});

router.get('/:id', restricted, validUser, (req, res) => {
  console.log(req.params.id);
  Plants.findPlantsByUser(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: 'Could not get the list of plants for this user' });
    });
});

router.post('/:id', restricted, validUser, checkPlantData, (req, res) => {
  const id = req.params.id;
  let plants = req.body;
  plants = { ...plants, user_id: id };

  Plants.add(plants)
    .then((newPlant) => {
      res.status(201).json(newPlant);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Could not save the plant' });
    });
});

module.exports = router;
