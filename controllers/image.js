const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: "ea8e767bd6b148b88b89381b5b4f9709",
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('Unable to connect with API...'))
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('Unable to get entries...'))
}

module.exports = {
  handleImage, // ES6
  handleApiCall
}

