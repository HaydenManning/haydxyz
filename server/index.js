require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { json } = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const path = require("path");
const {
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET,
  PORT
} = process.env;
const { testUrlCreation } = require(`${__dirname}/controllers/urlController`);

const app = express();

// database connection
massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.use(json());
app.use(cors());
// serving production files
// app.use(express.static(`${__dirname}/../build/`));

// sessions
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 21600000
    }
  })
);

// authentication

// endpoints

app.get(`/api/url/test`, testUrlCreation);

/* for production only
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
}); */

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
