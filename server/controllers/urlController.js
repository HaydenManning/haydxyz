// Controller for /api/url endpoints
const { numToStr, strToNum } = require(`${__dirname}/../logic/baseEncoding`);
const newID = null;

// let testUrlCreation = (req, res) => {
//   let url = createNewShortURL();
//   console.log(req.body);
//   // need an if statement before creation to check db for the shorturl that was created / should the url already exist need to generate a new url by reinvoking createNewShortUrl()
//   // req.app
//   // .get("db")
//   // .doesUrlExist(url)
//   // .then(response => {})
//   // .catch(console.log);
//   req.app
//     .get("db")
//     .createTestUrl(url, req.body.original)
//     .then(response => {
//       console.log(`Creating new short url`);
//       res.status(200).json({ response, short_url: url });
//     })
//     .catch(err => {
//       console.log(`Failed to create new short url`);
//       res.status(500).json(err);
//     });
// };

// let getTestUrl = (req, res, next) => {
//   req.app
//     .get("db")
//     .getTestUrl(req.params.id)
//     .then(response => {
//       console.log(`Sending test url`);
//       res.status(200).json(response);
//     })
//     .catch(err => {
//       console.log(`Failed to send test url`);
//       res.status(500).json(err);
//     });
// };

dbID = () => {
  req.app
    .get("db")
    .getBaseTen()
    .then(response => {
      newID = response;
      return newID;
    });
};

let createShortUrl = (req, res) => {
  dbID();
  let url = numToStr(newID);
  req.app
    .get("db")
    .createShortUrl(url, req.body.original)
    .then(response => {
      res.status(200).json({ response, short_url: url });
    })
    .catch(err => {
      console.log(`Failed to create new short url`);
      res.status(500).json(err);
    });
};

let getShortUrl = (req, res) => {
  req.app
    .get("db")
    .getShortUrl(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

let getAllUrl = (req, res) => {
  req.app
    .get("db")
    .getAllUrl()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  createShortUrl,
  getShortUrl
};
