// Controller for /api/url endpoints
const { createNewShortURL } = require(`${__dirname}/../logic/generateNewURL`);

let testUrlCreation = (req, res) => {
  let url = createNewShortURL();
  console.log(`Generating new test URL: ${url}`);
  res.status(200).json({ url });
};

module.exports = {
  testUrlCreation
};
