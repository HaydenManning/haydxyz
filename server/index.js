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
const {
  testUrlCreation,
  getTestUrl
} = require(`${__dirname}/controllers/urlController`);

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
      maxAge: 86400000
    }
  })
);

/* REWRITE Auth0Strategy */
// authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientSecret: CLIENT_SECRET,
      clientID: CLIENT_ID,
      scope: "openid profile",
      callbackURL: "/auth"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      console.log(profile);
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            // app
            //   .get("db")
            //   .createUserByAuthId(profile.id)
            //   .then(created => done(null, created[0]));
            return "User does not have Permission";
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// endpoints
app.get(
  "/auth",
  passport.authenticate(`auth0`, {
    failureRedirect: "http://localhost:3002/auth"
  }),
  (req, res) => {
    res.redirect(`http://localhost:3002/`);
  }
);

app.get("/api/me", (req, res) => {
  console.log(req);
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(500).json({ message: "User is not logged in" });
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3002/");
  });
});

/* CREATE THESE
app.get(`api/url/:id`, getShortUrl);
app.get(`/api/url/`, getAllUrl);
app.post(`/api/url`, createNewShortUrl);
app.delete(`/api/url/:id`, deleteShortUrl);
app.get(`/api/user/:id`, getUserById);
app.get(`/api/user/`, getAllUsers);
app.post(`/api/user`, createNewUser);
app.delete(`/api/user/:id`, deleteUser);
app.put(`/api/user/:id`, updateUserFirstName);
app.put(`/api/user/:id`, updateUserLastName);
app.put(`/api/user/permissions/:id`, updateUserRole);
app.put(`/api/user/:id`, updateUserEmail);
AUTH
AUTH LOGOUT
AUTH /ME
*/

// TEST ENDPOINTS
app.post(`/api/url/test`, testUrlCreation);
app.get(`/api/url/test/:id`, getTestUrl);

/* for production only
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
}); */

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
