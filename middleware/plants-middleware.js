const Plant = require('../plants/plants-model');

const plantPayload = (req, res, next) => {
  const { nickname, species, h2ofrequency } = req.body;
  if (!nickname || !species || !h2ofrequency) {
    res
      .status(400)
      .json({
        message: 'nickname, species, and h2ofrequency fields are required',
      });
  } else {
    next();
  }
};

module.exports = {
  plantPayload,
};
