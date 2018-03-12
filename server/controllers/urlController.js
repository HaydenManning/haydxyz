const { numToStr, strToNum } = require(`${__dirname}/../logic/baseEncoding`);
const newID = null;

dbID = () => {
  req.app
    .get("db")
    .getBaseTen()
    .then(response => {
      newID = response + 1;
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

let deleteShortUrl = (req, res) => {
  req.app
    .get("db")
    .deleteShortUrl(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

// TOP 10/25/50/100/250/500 Short Urls sorted by clicks || creation date

module.exports = {
  createShortUrl,
  getShortUrl,
  getAllUrl,
  deleteShortUrl
};
