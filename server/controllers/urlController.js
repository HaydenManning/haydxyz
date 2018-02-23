// Controller for /api/url endpoints
const { createNewShortURL } = require(`${__dirname}/../logic/generateNewURL`);

let testUrlCreation = (req, res) => {
  let url = createNewShortURL();
  console.log(req.body);
  req.app
    .get("db")
    .createTestUrl(url, req.body.original)
    .then(response => {
      console.log(`Creating new short url`);
      res.status(200).json({ response, short_url: url });
    })
    .catch(err => {
      console.log(`Failed to create new short url`);
      res.status(500).json(err);
    });
};

let getTestUrl = (req, res, next) => {
  req.app
    .get("db")
    .getTestUrl(req.params.id)
    .then(response => {
      console.log(`Sending test url`);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(`Failed to send test url`);
      res.status(500).json(err);
    });
};

module.exports = {
  testUrlCreation,
  getTestUrl
};
